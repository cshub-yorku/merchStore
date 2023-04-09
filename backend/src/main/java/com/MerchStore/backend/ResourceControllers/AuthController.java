package com.MerchStore.backend.ResourceControllers;

import com.MerchStore.backend.Dao.UserAuthenticatorDao;
import com.MerchStore.backend.Dao.UsersDao;
import com.MerchStore.backend.Dao.VerifyUserDao;
import com.MerchStore.backend.Model.UserAuthenticator;
import com.MerchStore.backend.Model.Users;
import com.MerchStore.backend.Model.VerifyUser;
import com.MerchStore.backend.Service.EmailService;
import com.MerchStore.backend.jwt.AuthenticationPayload.JwtResponse;
import com.MerchStore.backend.jwt.AuthenticationPayload.LoginRequest;
import com.MerchStore.backend.jwt.AuthenticationPayload.MessageResponse;
import com.MerchStore.backend.jwt.AuthenticationPayload.SignupRequest;
import com.MerchStore.backend.jwt.JwtTokenProvider;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v1/auth")
public class AuthController extends ResponseHandler {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserAuthenticatorDao dao;

    @Autowired
    VerifyUserDao secondDao;
    @Autowired
    UsersDao activeDao;
    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtTokenProvider jwtTokenProvider;
    @Autowired
    private JavaMailSender mailSender;

    public AuthController(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Optional<Users> optionalActiveStatus = activeDao.getByEmail(loginRequest.getEmail());
        try{
            if (optionalActiveStatus.isEmpty()) {
                return ResponseEntity
                        .badRequest()
                        .body(new MessageResponse("Error: Please Signup first!"));
            }else {
                Users user = optionalActiveStatus.get();
                if (user.isActive()) {
                    Authentication authentication = authenticationManager.authenticate(
                            new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                    String jwt = jwtTokenProvider.createToken(authentication);

                    UserAuthenticator userDetails = (UserAuthenticator) authentication.getPrincipal();
                    List<String> roles = new ArrayList<>();
                    roles.add(userDetails.getRole().toString());

                    return ResponseEntity.ok(new JwtResponse(jwt,
                            userDetails.getUserId(),
                            userDetails.getEmail(),
                            roles));
                }else{
                    return ResponseEntity
                            .badRequest()
                            .body(new MessageResponse("Error: Please verify your email!"));
                }
            }
        }catch (Exception e){
            e.getMessage();
            return ResponseEntity.internalServerError().body("Unknown error");
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest, HttpServletRequest request) throws MessagingException, UnsupportedEncodingException {
        if (dao.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }else{
            signUpRequest.setPassword(encoder.encode(signUpRequest.getPassword()));
            dao.save(signUpRequest);

            String verifyCode = RandomStringUtils.randomAlphanumeric(20);
            UserAuthenticator userDetails = (UserAuthenticator) dao.loadUserByUsername(signUpRequest.getEmail());
            VerifyUser verifyUser = new VerifyUser(userDetails.getUserId(), verifyCode);
            secondDao.save(verifyUser);

            String subject = "Please verify your registration";
            String content = "Dear [[name]],<br>"
                    + "Please click the link below to verify your registration:<br>"
                    + "<h3><a href=\"[[URL]]\" target=\"_self\">VERIFY</a></h3>"
                    + "Thank you,<br>"
                    + "CSHub.";

            content = content.replace("[[name]]", signUpRequest.getFirstName());

            String verifyURL = "http://localhost:9000/v1/auth" + "/verify?code=" + verifyCode;

            content = content.replace("[[URL]]", verifyURL);


            EmailService emailService = new EmailService(mailSender);
            emailService.sendOrderConfirmationEmail(signUpRequest.getEmail(), subject, content);


            return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
        }
    }

    @GetMapping("/verify")
    public String verifyUser(@RequestParam("code") String code) {

        boolean status = true;

        Optional<VerifyUser> optionalUserCode = secondDao.getByCode(code);

        if (optionalUserCode.isEmpty()) {
            status = false;
        } else {
            Optional<Users> usersOptional = activeDao.get(optionalUserCode.get().getUserId());
            if(usersOptional.isEmpty()){
                throw new UsernameNotFoundException("User not found");
            }else{
                Users user = usersOptional.get();
                user.setActive(true);
                activeDao.update(user);
            }
        }

        if (status) {
            return "verify_success";
        } else {
            return "verify_fail";
        }
    }
}

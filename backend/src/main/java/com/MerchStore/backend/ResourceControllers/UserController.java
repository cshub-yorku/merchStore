package com.MerchStore.backend.ResourceControllers;


import com.MerchStore.backend.Dao.ResetPasswordTokensDao;
import com.MerchStore.backend.Dao.UserAuthenticatorDao;
import com.MerchStore.backend.Driver;
import com.MerchStore.backend.Model.ResetTokens;
import com.MerchStore.backend.Model.UserAuthenticator;
import com.MerchStore.backend.Model.Users;
import com.MerchStore.backend.Service.EmailService;
import com.MerchStore.backend.Service.UserService;
import com.google.gson.JsonParser;
import jakarta.mail.MessagingException;
import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import jakarta.servlet.http.Cookie;
import java.io.UnsupportedEncodingException;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("v1/users")
public class UserController extends ResponseHandler{

    @Autowired
    UserAuthenticatorDao dao;
    @Autowired
    private JavaMailSender mailSender;
    @Autowired
    PasswordEncoder encoder;
    private static final Logger logger = LoggerFactory.getLogger(Driver.class);
    @GetMapping("/user")
    public ResponseEntity<?> getUserDetails(HttpServletRequest request) {
        // Extract the JWT token from the cookie
        String jwt = Arrays.stream(request.getCookies())
                .filter(cookie -> "token".equals(cookie.getName()))
                .findFirst()
                .map(Cookie::getValue)
                .orElse(null);

        // Check if the JWT token is present
        if (jwt == null || jwt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("No authentication token found.");
        }

        try {
            // Get email from token
            String email = getEmailFromToken(jwt);
            UserAuthenticator user = (UserAuthenticator) dao.loadUserByUsername(email);
            return ResponseEntity.ok(user.getUserDetails());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while fetching user details.");
        }
    }


    @GetMapping("/")
    public List<Users> getUsers() {

        return UserService.getAllUsers();
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateUser(@RequestBody Users user) {
        boolean updated = UserService.updateUser(user);
        if (updated) {
            return new ResponseEntity<>("User updated", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Unable to update user", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable long id){
        Optional<Users> user = UserService.getById(id);
        if (user.isPresent()) {
            boolean deleted = UserService.deleteUser(user.get());
            if (deleted) {
                return new ResponseEntity<>("User deleted", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Unable to delete user", HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } else {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/reset/request")
    public ResponseEntity<?> resetRequest(HttpServletRequest request, @RequestParam String email){
        String baseURL = ServletUriComponentsBuilder.fromRequestUri(request).replacePath(null)
                .build()
                .toUriString();
        try{
            UserAuthenticator user = (UserAuthenticator) dao.loadUserByUsername(email);
            if(user.isEnabled()){
                ResetTokens token = new ResetTokens(email);
                ResetPasswordTokensDao rDao = new ResetPasswordTokensDao();
                rDao.insertNewToken(token);

                String subject = "Password Reset";
                String content = "Dear [[name]],<br>"
                        + "Please click the link below to reset your password:<br>"
                        + "<h3><a href=\"[[URL]]\" target=\"_self\">RESET</a></h3>"
                        + "Thank you,<br>"
                        + "CSHub.";
                content = content.replace("[[name]]", user.getUserDetails().getFirstName());
                String verifyURL = "http://localhost:3000/reset-password?token=" + token.getToken();
                content = content.replace("[[URL]]", verifyURL);

                EmailService emailService = new EmailService(mailSender);
                emailService.sendOrderConfirmationEmail(email, subject, content);
                return new ResponseEntity<>("If you have an account, a link to reset password has been to sent to : " + email,HttpStatus.OK);
            }else{
                return new ResponseEntity<>("Verify your account first.", HttpStatus.BAD_REQUEST);
            }
        }catch (UnsupportedEncodingException | MessagingException e){
            logger.error(e.getMessage());
            e.printStackTrace();
            return new ResponseEntity<>("Unable to send resetRequest, please try again later.", HttpStatus.INTERNAL_SERVER_ERROR);
        }catch (UsernameNotFoundException ex){
            logger.error(ex.getMessage());
            ex.printStackTrace();
            return new ResponseEntity<>("If you have an account, a link to reset password has been to sent to : " + email,HttpStatus.OK);
        }

    }

    @PutMapping("/reset/password")
    public ResponseEntity<?> resetPassword(@RequestParam String token, @RequestBody String jsonWrapper){
        JsonParser parser = new JsonParser();
        String password = parser.parse(jsonWrapper).getAsJsonObject().get("password").getAsString();
        ResetPasswordTokensDao rDao = new ResetPasswordTokensDao();
        return rDao.getAllActiveTokensByEmail(token).map(validToken -> {
            if(validToken.isValidToken()){
                rDao.disableToken(validToken);
                String encodedPass = encoder.encode(password);
                rDao.updateUserPassword(validToken.getEmail(),encodedPass);
                return new ResponseEntity<>(HttpStatus.OK);
            }else{
                return new ResponseEntity<>("Invalid token", HttpStatus.BAD_REQUEST);
            }
        }).orElseGet(() -> new ResponseEntity<>(HttpStatus.BAD_REQUEST));
    }
}

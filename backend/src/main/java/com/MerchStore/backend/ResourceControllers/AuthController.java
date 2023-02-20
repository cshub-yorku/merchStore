package com.MerchStore.backend.ResourceControllers;

import com.MerchStore.backend.Dao.UserAuthenticatorDao;
import com.MerchStore.backend.Model.UserAuthenticator;
import com.MerchStore.backend.jwt.AuthenticationPayload.JwtResponse;
import com.MerchStore.backend.jwt.AuthenticationPayload.LoginRequest;
import com.MerchStore.backend.jwt.AuthenticationPayload.MessageResponse;
import com.MerchStore.backend.jwt.AuthenticationPayload.SignupRequest;
import com.MerchStore.backend.jwt.JwtTokenProvider;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/v1/auth")
public class AuthController extends ResponseHandler {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserAuthenticatorDao dao;
    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtTokenProvider jwtTokenProvider;

    @GetMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
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
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (dao.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }else{
            signUpRequest.setPassword(encoder.encode(signUpRequest.getPassword()));
            dao.save(signUpRequest);
            return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
        }
    }
}

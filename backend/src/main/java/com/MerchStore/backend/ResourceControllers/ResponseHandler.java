package com.MerchStore.backend.ResourceControllers;

import com.MerchStore.backend.Model.APIResponse;
import com.MerchStore.backend.Model.UserRoles;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public abstract class ResponseHandler {

    @Value("${merchstore.app.jwtSecret}")
    private String jwtSecret;

    protected UserRoles getRoleFromToken(String token){
        String t = token.split("Bearer ")[1];
        Claims claims = Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(t).getBody();

        return UserRoles.valueOf((String) claims.get("role"));
    }
    protected String getEmailFromToken(String token){
        return (String) Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token.split("Bearer ")[1])
                .getBody().get("sub");
    }
    protected ResponseEntity<?> responseObj(APIResponse<?> response, int statusCode){
        return switch (statusCode) {
            case 200 -> ResponseEntity.ok(response);
            case 204 -> ResponseEntity.noContent().build();
            case 404 -> ResponseEntity.notFound().build();
            case 400 -> ResponseEntity.badRequest().body(response.getErrors());
            case 500 -> ResponseEntity.internalServerError().body(response.getErrors());
            case 401 -> new ResponseEntity<>("Unauthorized", HttpStatus.UNAUTHORIZED);
            default -> throw new UnsupportedOperationException("Invalid status code");
        };
    }
}

package com.MerchStore.backend.Model;

import org.apache.commons.lang3.RandomStringUtils;

public class ResetTokens {
    private final String email;
    private final String token;
    private boolean validToken = false;

    public ResetTokens(String email) {
        this.email = email;
        this.token = generateToken();
        validToken = true;
    }
    public ResetTokens(String email, String token, boolean validToken) {
        this.email = email;
        this.validToken = validToken;
        this.token = token;
    }

    private String generateToken(){
        return RandomStringUtils.randomAlphanumeric(20);
    }

    public String getEmail() {
        return email;
    }

    public String getToken() {
        return token;
    }

    public boolean isValidToken() {
        return validToken;
    }
}

package com.MerchStore.backend.Model;

public class VerifyUser {

    private final long userId;

    private String verificationCode;

    public VerifyUser(long userId, String verificationCode) {
        this.userId = userId;
        this.verificationCode = verificationCode;
    }

    public void setVerificationCode(String verificationCode) {
        this.verificationCode = verificationCode;
    }

    public long getUserId() {
        return userId;
    }

    public String getVerificationCode() {
        return verificationCode;
    }
}

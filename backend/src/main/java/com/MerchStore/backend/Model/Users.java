package com.MerchStore.backend.Model;

public class Users {

    private final long userId;

    private String firstName; // Not final: What if wrong first name entered upon signup

    private String lastName;

    private String email;

    private long phoneNumber; // Not String: Drop down for country code and for future use (Maybe messaging)

    public Users(long userId, String firstName, String lastName, String email, long phoneNumber){
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    public Users(long userId, String firstName, String email, long phoneNumber){
        this.userId = userId;
        this.firstName = firstName;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    public long getUserId() {
        return userId;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public long getPhoneNumber() {
        return this.phoneNumber;
    }
}

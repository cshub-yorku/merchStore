package com.MerchStore.backend.Model;

public class User {

    private final long userId;

    private String firstName; // Not final: What if wrong first name entered upon signup

    private String lastName;

    private String email;

    private int phoneNumber; // Not String: Drop down for country code and for future use (Maybe messaging)

    public User(long userId, String firstName, String lastName, String email, int phoneNumber){
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    public User(long userId, String firstName, String email, int phoneNumber){
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

    public int getPhoneNumber() {
        return this.phoneNumber;
    }
}

package com.MerchStore.backend.Model;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

public class UserAuthenticator implements UserDetails {
    private String password = null;
    private final String userEmail;
    private final long userId;
    private Users userDetails;

    // Constructor used when retrieving user info from database
    public UserAuthenticator(Users userDetails, String password){
        this.password = password;
        this.userEmail = userDetails.getEmail();
        this.userId = userDetails.getUserId();
        this.userDetails = userDetails;
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return String.valueOf(this.userId);
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public String getEmail() {
        return userEmail;
    }

    public long getUserId() {
        return userId;
    }

    public Users getUserDetails() {
        return userDetails;
    }
}

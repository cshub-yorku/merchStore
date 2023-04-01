package com.MerchStore.backend.ResourceControllers;


import com.MerchStore.backend.Dao.UserAuthenticatorDao;
import com.MerchStore.backend.Model.UserAuthenticator;
import com.MerchStore.backend.Model.Users;
import com.MerchStore.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("v1/users")
public class UserController extends ResponseHandler{

    @Autowired
    UserAuthenticatorDao dao;
    @GetMapping("/user")
    public ResponseEntity<?> getUserDetails(@RequestHeader(HttpHeaders.AUTHORIZATION) String token) {
        UserAuthenticator user = (UserAuthenticator) dao.loadUserByUsername(this.getEmailFromToken(token));
        return ResponseEntity.ok(user.getUserDetails());
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
}

package com.MerchStore.backend.ResourceControllers;


import com.MerchStore.backend.Model.Users;
import com.MerchStore.backend.Service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("v1/users")
public class UserController {

    @GetMapping("/")
    public List<Users> getUsers() {

        return UserService.getAllUsers();
    }


    @PutMapping("/{id}")
    public ResponseEntity<String> updateUser(@PathVariable long id, @RequestBody Users user) {
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

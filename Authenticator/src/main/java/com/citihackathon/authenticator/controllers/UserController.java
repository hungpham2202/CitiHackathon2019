package com.citihackathon.authenticator.controllers;

import com.citihackathon.authenticator.models.User;
import com.citihackathon.authenticator.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PostFilter;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @CrossOrigin(origins = "*")
    @GetMapping("/accounts/me")
    @PreAuthorize("#hasAnyAuthority('admin', 'volunteer')")
    public Principal user(Principal principal) {
        return principal;
    }
//Hello timeout
    @CrossOrigin(origins = "*")
    @GetMapping("/accounts")
    @PreAuthorize("#hasAnyAuthority('admin', 'volunteer')")
    public User findUserById(@RequestParam("userId") Integer id) {
        return userService.getUserById(id);
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/register")
    @PreAuthorize(value = "#permitAll()")
    @PostFilter("#permitAll()")
    public User registerNewUser(@Valid @RequestBody User user) {
        return userService.createUser(user);
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/accounts")
    @PreAuthorize("#hasAnyAuthority('admin', 'volunteer')")
    public User createNewUser(@Valid @RequestBody User user) {
        return userService.createUser(user);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/accounts/reset-password")
    @PreAuthorize("#hasAnyAuthority('admin', 'volunteer')")
    public String resetPassword(@RequestParam("userId") Integer id, @RequestParam("username") String username, @RequestParam("emailAddress") String email) {
        return userService.resetPassword(id, username, email);
    }

    @CrossOrigin(origins = "*")
    @PutMapping("/accounts/account-type")
    @PreAuthorize("#hasAnyAuthority('admin', 'volunteer')")
    public User updateAccType(@RequestParam("userId") Integer id, @RequestParam("accountType") User.AccountType accountType) {
        return userService.updateAccType(id, accountType);
    }

    @CrossOrigin(origins = "*")
    @PutMapping("/accounts")
    @PreAuthorize("#hasAnyAuthority('admin', 'volunteer')")
    public User updateAccDetail(@RequestParam("userId") Integer id, @RequestBody User user) {
        return userService.updateAccDetail(id, user);
    }

    @CrossOrigin(origins = "*")
    @DeleteMapping("/accounts")
    @PreAuthorize("#hasAnyAuthority('admin', 'volunteer')")
    public void deleteUser(@RequestParam("userId") Integer id) {
        userService.deleteUser(id);
    }
}

package com.citihackathon.authenticator.services;

import com.citihackathon.authenticator.models.User;
import com.citihackathon.authenticator.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.common.exceptions.UnauthorizedUserException;
import org.springframework.stereotype.Service;

import java.nio.charset.Charset;
import java.util.Random;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User getUserById(Integer id) {
        return userRepository.findById(id).get();
    }

    public User createUser(User user) {
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        return userRepository.save(user);
    }

    public String resetPassword(Integer id, String username, String email) {
        String newpassword = randomGenerator();
        User user = userRepository.findByIdAndUsernameAndEmailAddress(id, username, email);
        user.setPassword(newpassword);
        userRepository.save(user);
        return newpassword;
    }

    private String randomGenerator() {
        byte[] array = new byte[10];
        new Random().nextBytes(array);
        return new String(array, Charset.forName("UTF-8"));
    }

    public User updateAccType(Integer id, User.AccountType accountType) {
        User user = userRepository.findByIdAndAccountType(id, accountType);
        if (!accountType.equals(User.AccountType.admin)) {
            throw new UnauthorizedUserException(user.getUsername());
        }
        user.setAccountType(accountType);
        return userRepository.save(user);
    }

    public User updateAccDetail(Integer id, User newuser) {
        return userRepository.findById(id).map(user -> {
            user.setPassword(newuser.getPassword());
            user.setEmailAddress(newuser.getEmailAddress());
            user.setFirstName(newuser.getFirstName());
            user.setLastName(newuser.getLastName());
            user.setGender(newuser.getGender());
            user.setDateOfBirth(newuser.getDateOfBirth());
            user.setOrganisationName(newuser.getOrganisationName());
            return userRepository.save(user);
        }).orElseThrow(() -> new UsernameNotFoundException(id.toString()));
    }

    public void deleteUser(Integer id) {
        userRepository.deleteById(id);
    }
}

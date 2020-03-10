package com.citihackathon.authenticator.repository;

import com.citihackathon.authenticator.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUsername(String username);
    Optional<User> findById(Integer id);
    User findByIdAndUsernameAndEmailAddress(Integer id,String username, String emailAddress);
    User findByIdAndAccountType(Integer id, User.AccountType accountType);
}

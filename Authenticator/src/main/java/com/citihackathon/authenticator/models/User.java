package com.citihackathon.authenticator.models;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "accounts")
@Getter
@Setter
@ToString
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
    @NotBlank
    String username;
    @NotBlank
    String password;
    @Enumerated(EnumType.STRING)
    AccountType accountType = AccountType.volunteer;
    @Email
    @NotBlank
    String emailAddress;
    @NotBlank
    String firstName;
    @NotBlank
    String lastName;
    @Enumerated(EnumType.STRING)
    Gender gender;
    @Temporal(TemporalType.DATE)
    Date dateOfBirth;
    @NotBlank
    String organisationName;


    public enum AccountType {
        admin,
        volunteer
    }

    public enum Gender {
        Male,
        Female,
        Others
    }
}
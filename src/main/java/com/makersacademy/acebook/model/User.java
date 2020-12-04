package com.makersacademy.acebook.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GenerationType;

import lombok.Data;

@Data
@Entity
@Table(name = "USERS")
public class User {

    //public static final PasswordEncoder PASSWORD_ENCODER = new BCryptPasswordEncoder(); (1)

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
    private String firstname;
    private String lastname;
    private String email;
    private String password;

    private User() {}


    public User(String firstname,String lastname,String email,String password) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    };
};

package com.makersacademy.acebook.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GenerationType;

import lombok.Data;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

import org.hibernate.annotations.CreationTimestamp;

@Data
@Entity
@Table(name = "POSTS")
public class Post {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
    private String content;
    @CreationTimestamp
    private LocalDateTime postdate;

    private Post() {}


    public Post(String content) {
        this.postdate = postdate;
        this.content = content;
    }
}

package com.quizapplication.server.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.sql.Timestamp;

@Data
@Entity
@Table(name = "user_profile")
public class UserProfileModel {

    @Id
    private Long phone;

    private String name;

    private String email;

    @CreationTimestamp
    @Column(name="create_timestamp", nullable=false, updatable = false)
    private Timestamp createTimestamp;

    @UpdateTimestamp
    @Column(name="update_timestamp")
    private Timestamp updateTimestamp;

}

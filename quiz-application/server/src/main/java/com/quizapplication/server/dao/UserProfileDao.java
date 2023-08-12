package com.quizapplication.server.dao;

import com.quizapplication.server.model.UserProfileModel;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

@Transactional
public interface UserProfileDao extends JpaRepository<UserProfileModel, Long> {

    UserProfileModel findByPhone(Long phone);
}

package com.quizapplication.server.service;

import com.quizapplication.server.dto.RequestHeaderDTO;
import com.quizapplication.server.dto.UserProfileDTO;
import org.springframework.http.ResponseEntity;

public interface UserProfileService {

    public ResponseEntity<Object> saveUserData(UserProfileDTO userProfileDTO, RequestHeaderDTO requestHeaderDTO);
}

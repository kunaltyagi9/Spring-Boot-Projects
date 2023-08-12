package com.quizapplication.server.service.impl;

import com.quizapplication.server.constants.CodeConstant;
import com.quizapplication.server.dao.UserProfileDao;
import com.quizapplication.server.dto.RequestHeaderDTO;
import com.quizapplication.server.dto.UserProfileDTO;
import com.quizapplication.server.model.UserProfileModel;
import com.quizapplication.server.service.UserProfileService;
import com.quizapplication.server.utils.CommonResponseEntity;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.LinkedHashMap;

@Service
public class UserProfileServiceImpl implements UserProfileService {

    @Autowired
    UserProfileDao userProfileDao;

    @Autowired
    CommonResponseEntity commonResponseEntity;

    @Override
    public ResponseEntity<Object> saveUserData(@Valid UserProfileDTO userProfileDTO, RequestHeaderDTO requestHeaderDTO) {
        boolean isUserAlreadyExist = false;
        String message = "";
        LinkedHashMap<String, Object> data = null;

        UserProfileModel userProfileModel = userProfileDao.findByPhone(userProfileDTO.getPhone());

        if (userProfileModel != null) {
            isUserAlreadyExist = true;
        }

        if (userProfileModel == null) {
            userProfileModel = new UserProfileModel();

            userProfileModel.setPhone(userProfileDTO.getPhone());
            userProfileModel.setName(userProfileDTO.getName());
            userProfileModel.setEmail(userProfileDTO.getEmail());
        }

        userProfileDao.saveAndFlush(userProfileModel);

        message = isUserAlreadyExist ? CodeConstant.USER_ALREADY_EXIST : CodeConstant.SAVE_USER_DETAIL_SUCCESS;

        data = commonResponseEntity.ResponseEntityWithMap(CodeConstant.SUCCESS, message,
                isUserAlreadyExist ? CodeConstant.RESOURCE_ALREADY_EXIST : CodeConstant.OK);

        return new ResponseEntity<Object>(data, HttpStatus.OK);
    }
}

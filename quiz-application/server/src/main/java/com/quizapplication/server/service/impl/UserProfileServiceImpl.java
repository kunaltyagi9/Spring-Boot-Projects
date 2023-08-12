package com.quizapplication.server.service.impl;

import com.quizapplication.server.constants.CodeConstant;
import com.quizapplication.server.dao.UserProfileDao;
import com.quizapplication.server.dto.RequestHeaderDTO;
import com.quizapplication.server.dto.UserProfileDTO;
import com.quizapplication.server.model.UserProfileModel;
import com.quizapplication.server.service.UserProfileService;
import com.quizapplication.server.utils.CommonResponseEntity;
import com.quizapplication.server.utils.Utility;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.LinkedHashMap;

@Service
@Slf4j
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

    @Override
    public ResponseEntity<Object> getUserData(RequestHeaderDTO requestHeaderDTO) {
        String message = "";
        LinkedHashMap<String, Object> data = null;

        if (requestHeaderDTO.getPhone() == null) {
            message = CodeConstant.BAD_REQUEST_MSG;

            data = commonResponseEntity.ResponseEntityWithMap(CodeConstant.BAD_REQUEST_STATUS, message,
                    CodeConstant.BAD_REQUEST_CODE);

            return new ResponseEntity<Object>(data, HttpStatus.BAD_REQUEST);
        }

        try {
            UserProfileModel userProfileModel = userProfileDao.findByPhone(requestHeaderDTO.getPhone());

            if (userProfileModel == null) {
                message = CodeConstant.NO_DATA_FOUND;

                data = commonResponseEntity.ResponseEntityWithMap(CodeConstant.NO_DATA_FOUND, message,
                        CodeConstant.NO_DATA_FOUND_CODE);

                return new ResponseEntity<Object>(data, HttpStatus.OK);
            }

            UserProfileDTO userProfileDTO = new UserProfileDTO();

            userProfileDTO.setPhone(userProfileModel.getPhone());
            userProfileDTO.setEmail(userProfileModel.getEmail());
            userProfileDTO.setName(userProfileModel.getName());

            message = CodeConstant.GET_USER_DETAIL_SUCCESS;

            data = commonResponseEntity.ResponseEntityWithMapAndData(CodeConstant.SUCCESS, message,
                    CodeConstant.OK, userProfileDTO);

            return new ResponseEntity<Object>(data, HttpStatus.OK);
        } catch (Exception e) {

            log.error("Error FETCH USER ##### ", e);

            message = CodeConstant.SYSTEM_ERROR_MSG;

            data = commonResponseEntity.ResponseEntityWithMap(CodeConstant.FAILURE, message,
                    CodeConstant.SYSTEM_ERROR_CODE);

            return new ResponseEntity<Object>(data, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

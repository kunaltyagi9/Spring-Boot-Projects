package com.quizapplication.server.controller;

import com.quizapplication.server.constants.APIConstants;
import com.quizapplication.server.dto.RequestHeaderDTO;
import com.quizapplication.server.dto.UserProfileDTO;
import com.quizapplication.server.service.UserProfileService;
import com.quizapplication.server.utils.Utility;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@Slf4j
@RequiredArgsConstructor
@CrossOrigin
public class UserProfileController {

    final UserProfileService userProfileService;


    @PostMapping(APIConstants.SAVE_USER_DETAIL)
    public ResponseEntity<Object> saveUserDetail(@RequestHeader Map<String, String> requestHeaderMap,
                                                 @Valid @RequestBody UserProfileDTO userProfileDTO) {

        log.info("SAVE USER DETAIL CONTROLLER ##### ", UserProfileController.class.getName());

        RequestHeaderDTO requestHeaderDTO = Utility.getRequestHeaderDTO(requestHeaderMap);

        ResponseEntity<Object> response = userProfileService.saveUserData(userProfileDTO, requestHeaderDTO);

        return response;
    }
}

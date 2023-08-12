package com.quizapplication.server.utils;

import com.quizapplication.server.constants.ParameterConstants;
import com.quizapplication.server.dto.RequestHeaderDTO;

import java.util.Map;

public class Utility {


    public static RequestHeaderDTO getRequestHeaderDTO(Map<String, String> headerMap) {
        RequestHeaderDTO requestHeaderDTO = new RequestHeaderDTO();

        requestHeaderDTO.setPhone(Long.parseLong(headerMap.get(ParameterConstants.RH_PHONE)));

        return requestHeaderDTO;
    }
}

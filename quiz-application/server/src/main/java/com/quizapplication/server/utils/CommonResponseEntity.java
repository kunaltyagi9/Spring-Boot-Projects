package com.quizapplication.server.utils;

import com.quizapplication.server.constants.ApplicationConstants;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.LinkedHashMap;

@Service("commonResponseEntity")
@Slf4j
public class CommonResponseEntity {

    public LinkedHashMap<String, Object> ResponseEntityWithMap(Object status, Object msg, Object code) {
        LinkedHashMap<String, Object> map = new LinkedHashMap<>();

        map.put(ApplicationConstants.REQUEST_STATUS, status);
        map.put(ApplicationConstants.RESPONSE_CODE, code);
        map.put(ApplicationConstants.RESPONSE_MSG, msg);

        log.info("RESULT ######" + map);

        return map;
    }

    public LinkedHashMap<String, Object> ResponseEntityWithMapAndData(Object status, Object msg, Object code, Object data) {
        LinkedHashMap<String, Object> map = new LinkedHashMap<>();

        map.put(ApplicationConstants.REQUEST_STATUS, status);
        map.put(ApplicationConstants.RESPONSE_CODE, code);
        map.put(ApplicationConstants.RESPONSE_MSG, msg);
        map.put(ApplicationConstants.RESPONSE_DATA, data);

        log.info("RESULT ######" + map);

        return map;
    }
}

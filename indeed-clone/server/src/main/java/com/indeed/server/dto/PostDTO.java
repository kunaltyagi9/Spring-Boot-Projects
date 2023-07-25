package com.indeed.server.dto;

import lombok.Data;

@Data
public class PostDTO {

    private String profile;

    private String type;

    private String description;

    private String experience;

    private String technology[];

    private String salary;
}

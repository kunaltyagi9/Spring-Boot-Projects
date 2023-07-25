package com.indeed.server.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "posts")
public class Post {
    private String profile;
    private String type;
    private String description;
    private String experience;
    private String technology[];
    private String date;
    private String salary;

    public Post() {
    }

    public Post(String profile, String type, String description, String experience, String[] technology, String date, String salary) {
        this.profile = profile;
        this.type = type;
        this.description = description;
        this.experience = experience;
        this.technology = technology;
        this.date = date;
        this.salary = salary; 
    }

    public String getProfile() {
        return profile;
    }

    public void setProfile(String profile) {
        this.profile = profile;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public String[] getTechnology() {
        return technology;
    }

    public void setTechnology(String[] technology) {
        this.technology = technology;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getSalary() {
        return salary;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }
}

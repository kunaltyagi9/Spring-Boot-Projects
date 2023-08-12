package com.example.emsservice.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

public interface FileService {

    public String uploadImage(String path, MultipartFile file) throws IOException;

    public InputStream getImageByImageName(String name, String prePath) throws FileNotFoundException;
}

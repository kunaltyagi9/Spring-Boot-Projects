package com.example.emsservice.service.impl;

import com.example.emsservice.service.FileService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Date;

@Service
public class FileServiceImpl implements FileService {

    @Override
    public String uploadImage(String path, MultipartFile file) throws IOException {

        String name = file.getOriginalFilename();

        // Full Path
        String filePath = path + name + new Date().getTime();

        File newFile = new File(path);

        if (!newFile.exists()) {
            newFile.mkdir();
        }

        Files.copy(file.getInputStream(), Paths.get(filePath));

        return filePath;
    }

    @Override
    public InputStream getImageByImageName(String name, String path) throws FileNotFoundException {
        InputStream is = new FileInputStream(path + name);
        return is;

    }
}

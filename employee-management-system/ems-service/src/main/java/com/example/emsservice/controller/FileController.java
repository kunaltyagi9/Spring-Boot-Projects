package com.example.emsservice.controller;

import com.example.emsservice.service.FileService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.io.InputStream;

@RestController
@RequestMapping("/file")
public class FileController {

    @Autowired
    private FileService fileService;

    @Value("${project.image}")
    private String path;

    private String prePath = "http://localhost:8080/file";

    @PostMapping("/upload")
    public String fileUpload(MultipartFile file) {
        String filePath;
        try {
            filePath = this.fileService.uploadImage(path, file);
        } catch (Exception e) {
            e.printStackTrace();
            return "Image is not uploaded";
        }

        return prePath + "/" + filePath;
    }

    @GetMapping(value = "/images/{name}", produces = MediaType.IMAGE_JPEG_VALUE)
    public void getImageInfoByName(@PathVariable("name") String name, HttpServletResponse response) throws IOException {
        System.out.println(name);

        InputStream image = this.fileService.getImageByImageName(name, path);
        System.out.println(image);
        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        StreamUtils.copy(image, response.getOutputStream());
    }
}

package com.indeed.server.controller;

import com.indeed.server.model.Post;
import com.indeed.server.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class PostController {

    @Autowired
    PostService postService;

    @GetMapping("/posts")
    public List<Post> getAllPosts() {
        return this.postService.getAllPosts();
    }

    @PostMapping("/post")
    public Post savePost(@RequestBody Post post) {
        return this.postService.savePost(post);
    }
}

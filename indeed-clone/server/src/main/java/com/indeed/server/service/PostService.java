package com.indeed.server.service;

import com.indeed.server.dto.PostDTO;
import com.indeed.server.model.PostModal;

import java.util.List;

public interface PostService {

    public List<PostModal> getAllPosts();

    public PostModal savePost(PostDTO post);
}

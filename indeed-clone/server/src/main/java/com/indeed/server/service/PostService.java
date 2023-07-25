package com.indeed.server.service;

import com.indeed.server.model.Post;

import java.util.List;

public interface PostService {

    public List<Post> getAllPosts();

    public Post savePost(Post post);
}

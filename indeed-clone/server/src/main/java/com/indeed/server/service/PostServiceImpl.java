package com.indeed.server.service;

import com.indeed.server.dao.PostDao;
import com.indeed.server.model.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServiceImpl implements PostService{

    @Autowired
    PostDao postDao;

    @Override
    public List<Post> getAllPosts() {
        return postDao.findAll();
    }

    @Override
    public Post savePost(Post post) {
        return postDao.save(post);
    }
}

package com.indeed.server.dao;

import com.indeed.server.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostDao extends MongoRepository<Post, String> {
}

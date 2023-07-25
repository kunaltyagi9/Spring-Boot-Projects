package com.indeed.server.dao;

import com.indeed.server.model.PostModal;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostDao extends MongoRepository<PostModal, String> {
}

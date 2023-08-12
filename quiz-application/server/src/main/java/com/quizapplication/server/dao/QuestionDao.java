package com.quizapplication.server.dao;

import com.quizapplication.server.model.QuestionModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionDao extends JpaRepository<QuestionModel, Integer> {

    List<QuestionModel> findByCategory(String category);
}

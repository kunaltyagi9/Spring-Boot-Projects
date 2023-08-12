package com.quizapplication.server.service;

import com.quizapplication.server.model.QuestionModel;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface QuestionService {

    public ResponseEntity<List<QuestionModel>> getAllQuestions();

    public ResponseEntity<List<QuestionModel>> getQuestionsByCategory(String category);
}

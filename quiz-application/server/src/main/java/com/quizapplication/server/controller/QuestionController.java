package com.quizapplication.server.controller;

import com.quizapplication.server.constants.APIConstants;
import com.quizapplication.server.model.QuestionModel;
import com.quizapplication.server.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("question")
@RequiredArgsConstructor
public class QuestionController {

    final QuestionService questionService;

    @GetMapping(APIConstants.GET_ALL_QUESTIONS)
    public ResponseEntity<List<QuestionModel>> getAllQuestions() {
        return this.questionService.getAllQuestions();
    }

    @GetMapping(APIConstants.GET_QUESTION_BY_CATEGORY + "/{category}")
    public ResponseEntity<List<QuestionModel>> getQuestionsByCategory(@PathVariable String category) {
        return this.questionService.getQuestionsByCategory(category.toLowerCase());
    }
}

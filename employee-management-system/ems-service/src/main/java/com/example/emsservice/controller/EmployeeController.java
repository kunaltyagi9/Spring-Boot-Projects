package com.example.emsservice.controller;

import com.example.emsservice.model.Employee;
import com.example.emsservice.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeController extends Employee {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/employee/add")
    public Employee addEmployee(@RequestBody Employee employee) {

        return this.employeeService.addEmployee(employee);
    }
}

package com.example.emsservice.service.impl;

import com.example.emsservice.model.Employee;
import com.example.emsservice.repository.EmployeeRepo;
import com.example.emsservice.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepo employeeRepo;

    @Override
    public Employee addEmployee(Employee employee) {
        employeeRepo.save(employee);
        return employee;
    }
}

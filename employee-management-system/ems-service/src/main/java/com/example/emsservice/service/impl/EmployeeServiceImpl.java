package com.example.emsservice.service.impl;

import com.example.emsservice.model.Employee;
import com.example.emsservice.repository.EmployeeRepo;
import com.example.emsservice.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepo employeeRepo;

    @Override
    public Employee addEmployee(Employee employee) {
        employeeRepo.save(employee);
        return employee;
    }

    @Override
    public List<Employee> getEmployees() {
        return employeeRepo.findAll();
    }

    @Override
    public Employee getEmployee(long employeeId) {

        return employeeRepo.findById(employeeId).get();
    }

    @Override
    public Employee updateEmployeeInfo(Employee employee) {
        employeeRepo.save(employee);
        return employee;
    }

    @Override
    public Employee deleteEmployeeInfo(long employeeId) {
        Employee employee = employeeRepo.findById(employeeId).get();
        employeeRepo.delete(employee);

        return employee;
    }
}

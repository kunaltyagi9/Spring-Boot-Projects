package com.example.emsservice.controller;

import com.example.emsservice.model.Employee;
import com.example.emsservice.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class EmployeeController extends Employee {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/employee")
    public Employee addEmployee(@RequestBody Employee employee) {

        return this.employeeService.addEmployee(employee);
    }

    @GetMapping("/employees")
    public List<Employee> getEmployees() {
        System.out.println("Hello");
        return this.employeeService.getEmployees();
    }

    @GetMapping("employee/{employeeId}")
    public Employee getEmployee(@PathVariable String employeeId){
        return this.employeeService.getEmployee(Long.parseLong(employeeId));
    }

    @PutMapping("employee")
    public Employee updateEmployeeInfo(Employee employee) {

        return this.employeeService.updateEmployeeInfo(employee);
    }

    @DeleteMapping("employee/{employeeId}")
    public Employee deleteEmployeeInfo(@PathVariable String employeeId) {
        return this.employeeService.deleteEmployeeInfo(Long.parseLong(employeeId));
    }
}

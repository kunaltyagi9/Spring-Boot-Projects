package com.example.emsservice.service;

import com.example.emsservice.model.Employee;
import java.util.List;

public interface EmployeeService {

    public Employee addEmployee(Employee employee);

    public List<Employee> getEmployees();

    public Employee getEmployee(long employeeId);

    public Employee updateEmployeeInfo(Employee employee);

    public Employee deleteEmployeeInfo(long employeeId);
}

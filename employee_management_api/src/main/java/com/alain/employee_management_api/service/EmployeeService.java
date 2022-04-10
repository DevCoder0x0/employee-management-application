package com.alain.employee_management_api.service;

import com.alain.employee_management_api.entity.Employee;

import java.util.List;
import java.util.Optional;

public interface EmployeeService {
    List<Employee> findAllEmployees();

    Employee findEmployeeById(Long id);

    Employee authenticateEmployee(String email, String password);

    void addEmployee(Employee employee);

    void updateEmployee(Long id, String firstName, String lastName, String email, String password);

    void deleteEmployee(Long id);

    Long getSickHours(String email);

    Long useSickHours(String email, Long sickHoursUsed);

    Long getVacationHours(String email);

    Long useVacationHours(String email);
}

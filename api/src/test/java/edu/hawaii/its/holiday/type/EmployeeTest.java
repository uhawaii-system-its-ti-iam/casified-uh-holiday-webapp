package edu.hawaii.its.holiday.type;

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class EmployeeTest {

    private Employee employee;

    @BeforeEach
    public void setUp() {
        employee = new Employee();
    }

    @Test
    public void construction() {
        assertNotNull(employee);
        assertNull(employee.getUhNumber());

        employee = new Employee(123456789L);
        assertThat(employee.getUhNumber(), equalTo(123456789L));
    }

    @Test
    public void setters() {
        assertNotNull(employee);
        assertNull(employee.getUhNumber());
        assertNotNull(employee.toString());

        employee.setUhNumber(12345678L);
        assertThat(employee.getUhNumber(), equalTo(12345678L));
        assertThat(employee.toString(), containsString("uhNumber=12345678"));
    }
}

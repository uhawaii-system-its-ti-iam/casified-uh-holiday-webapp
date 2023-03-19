package edu.hawaii.its.holiday.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.hawaii.its.holiday.type.Designation;

public interface DesignationRepository extends JpaRepository<Designation, Integer> {

    @Override
    Optional<Designation> findById(Integer id);

}

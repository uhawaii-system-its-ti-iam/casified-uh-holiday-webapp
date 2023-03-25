package edu.hawaii.its.holiday.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.hawaii.its.holiday.type.Type;

public interface TypeRepository extends JpaRepository<Type, Integer> {

    @Override
    Optional<Type> findById(Integer id);

}

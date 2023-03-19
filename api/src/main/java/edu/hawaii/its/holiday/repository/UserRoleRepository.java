package edu.hawaii.its.holiday.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.hawaii.its.holiday.type.UserRole;

public interface UserRoleRepository extends JpaRepository<UserRole, Integer> {

    @Override
    Optional<UserRole> findById(Integer id);

}

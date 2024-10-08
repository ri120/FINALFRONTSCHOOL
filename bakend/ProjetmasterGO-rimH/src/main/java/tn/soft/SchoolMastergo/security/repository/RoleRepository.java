package tn.soft.SchoolMastergo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import tn.soft.SchoolMastergo.security.models.Role;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Integer> {
    Optional<Role> findByName(String roleStudent);
}

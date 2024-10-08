package tn.soft.SchoolMastergo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import tn.soft.SchoolMastergo.security.models.VerificationToken;



public interface VerificationTokenRepository extends JpaRepository<VerificationToken,Long> {
    VerificationToken findByToken(String token);
}


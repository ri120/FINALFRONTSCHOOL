package tn.soft.SchoolMastergo.security.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import tn.soft.SchoolMastergo.security.models.ForgotPasswordToken;
import tn.soft.SchoolMastergo.security.models.User;



public interface ForgotPasswordTokenRepository extends JpaRepository<ForgotPasswordToken, Long> {
    @Query("select fpt from ForgotPasswordToken fpt where fpt.token = ?1 and fpt.user = ?2 ")
    Optional<ForgotPasswordToken> findByTokenAndUser(Integer token, User user);
}


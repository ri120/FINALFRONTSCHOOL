package tn.soft.SchoolMastergo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.soft.SchoolMastergo.entites.EmpTemps;

public interface SeanceRepository extends JpaRepository<EmpTemps, Long> {
}

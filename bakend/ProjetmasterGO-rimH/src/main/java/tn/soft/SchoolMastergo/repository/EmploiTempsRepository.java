package tn.soft.SchoolMastergo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.soft.SchoolMastergo.entites.EmpTemps;

import java.util.List;

public interface EmploiTempsRepository  extends JpaRepository<EmpTemps, Long>{
//    Optional<EmpTemps> findByClassesId(Long classeId);

    List<EmpTemps> findByClassesId(Long classesId);

}

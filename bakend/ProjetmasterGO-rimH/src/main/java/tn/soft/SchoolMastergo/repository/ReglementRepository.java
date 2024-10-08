package tn.soft.SchoolMastergo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.soft.SchoolMastergo.entites.Reglement;

import java.util.List;

public interface ReglementRepository extends JpaRepository<Reglement, Long> {
    List<Reglement> findByParent_Id(Long parentId);
    List<Reglement> findByEleve_Id(Long eleveId);
}

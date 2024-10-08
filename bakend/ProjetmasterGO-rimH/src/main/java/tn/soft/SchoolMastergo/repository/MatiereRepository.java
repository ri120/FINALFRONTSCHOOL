package tn.soft.SchoolMastergo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.soft.SchoolMastergo.entites.Matiere;
import tn.soft.SchoolMastergo.entites.Niveau;

import java.util.List;

public interface MatiereRepository extends JpaRepository<Matiere, Long> {
    List<Matiere> findByNiveau(Niveau niveau);
}

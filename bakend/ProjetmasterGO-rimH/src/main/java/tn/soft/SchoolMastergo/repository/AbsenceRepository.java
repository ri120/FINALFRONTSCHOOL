package tn.soft.SchoolMastergo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import tn.soft.SchoolMastergo.entites.Absence;
import tn.soft.SchoolMastergo.entites.Eleve;

public interface AbsenceRepository extends JpaRepository<Absence, Long> {
	/* List<Absence> listAbsenceByEleve(Long idparent); */
   @Query("select u from Absence u where u.eleve.id = ?1 ")
   List<Absence> listAbsenceByidEleve(Long id);
}

package tn.soft.SchoolMastergo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.soft.SchoolMastergo.entites.Examen;

import java.util.List;

public interface ExamenRepository extends JpaRepository<Examen, Long> {

    List<Examen> findExamByClasses_IdAndMatiere_IdMatiere(Long classId, Long matiereId);
}

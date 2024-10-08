package tn.soft.SchoolMastergo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import tn.soft.SchoolMastergo.entites.Devoir;

import java.util.List;

public interface DevoirRepository extends JpaRepository<Devoir, Long> {
    @Query("select u from Devoir u where u.professeur.id = ?1 ")
    List<Devoir> listDevoirByProfesseur(Long id);

    List<Devoir> findByClasses_IdAndMatiere_IdMatiere(Long classId, Long matiereId);
}

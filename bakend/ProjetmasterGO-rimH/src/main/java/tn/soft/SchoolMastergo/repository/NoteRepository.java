package tn.soft.SchoolMastergo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import tn.soft.SchoolMastergo.entites.Note;

import java.util.List;

public interface NoteRepository extends JpaRepository<Note, Long> {
    @Query("select u from Note u where u.examen.idExamen = ?1 ")
    List<Note> listNoteByExamen(Long id);

//    List<Note> findByEleveId(Long eleveId);

    List<Note> findByEleve_IdAndExamen_Matiere_IdMatiere(Long idEleve, Long idMatiere);

   
}

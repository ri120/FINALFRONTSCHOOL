package tn.soft.SchoolMastergo.services;

import org.springframework.security.core.Authentication;
import tn.soft.SchoolMastergo.dto.ClassesDto;
import tn.soft.SchoolMastergo.dto.ListNoteDto;
import tn.soft.SchoolMastergo.dto.NoteDto;
import tn.soft.SchoolMastergo.entites.Eleve;

import java.util.List;

public interface NoteService {
    List<NoteDto> findAllNotes();
    NoteDto findNoteById(Long id);
    NoteDto createNote(NoteDto noteDto);
    void deleteNoteById(Long noteId);

    List<Eleve> getElevesByExamen(Long examenId);

    List<ClassesDto> findAllExamenByClasse(Long idclasse);

    List<ListNoteDto> findAllListNotesByExamen(Long id);


    List<ListNoteDto> getNotesByEleveIdMatiereId(Long idMatiere, Authentication connectedUser);
}

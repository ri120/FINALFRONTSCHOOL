package tn.soft.SchoolMastergo.services.impl;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import tn.soft.SchoolMastergo.dto.ClassesDto;
import tn.soft.SchoolMastergo.dto.ListNoteDto;
import tn.soft.SchoolMastergo.dto.NoteDto;
import tn.soft.SchoolMastergo.entites.*;
import tn.soft.SchoolMastergo.repository.ClassesRepository;
import tn.soft.SchoolMastergo.repository.ExamenRepository;
import tn.soft.SchoolMastergo.repository.NoteRepository;
import tn.soft.SchoolMastergo.security.repository.EleveRepository;
import tn.soft.SchoolMastergo.services.NoteService;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class NoteServiceImpl implements NoteService {
    private final NoteRepository noteRepository;
    private final ExamenRepository examenRepository;
    private final EleveRepository eleveRepository;
    private final ClassesRepository classesRepository;

    @Override
    public List<NoteDto> findAllNotes() {
        return noteRepository.findAll().stream()
                .map(NoteDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public NoteDto findNoteById(Long id) {
        Optional<Note> optionalNote = noteRepository.findById(id);
        optionalNote.orElseThrow(() -> new RuntimeException("Note not found with id: " + id));
        return NoteDto.fromEntity(optionalNote.get());
    }

    @Override
    public NoteDto createNote(NoteDto noteDto) {
        Eleve eleve = eleveRepository.findById(noteDto.getElevesId())
                .orElseThrow(() -> new EntityNotFoundException("No Eleve found with ID:: " + noteDto.getElevesId()));

        Examen examen = examenRepository.findById(noteDto.getExamensId())
                .orElseThrow(() -> new EntityNotFoundException("No Examen found with ID:: " + noteDto.getExamensId()));

        Note note = NoteDto.toEntity(noteDto);
        note.setEleve(eleve);
        note.setExamen(examen);

        return NoteDto.fromEntity(noteRepository.save(note));

    }

    @Override
    public void deleteNoteById(Long noteId) {
        noteRepository.deleteById(noteId);
    }


    @Override
    public List<Eleve> getElevesByExamen(Long examenId) {
        Examen examen = examenRepository.findById(examenId).orElseThrow(() -> new RuntimeException("Examen not found"));
        return examen.getClasses().stream()
                .flatMap(classes -> classes.getEleves().stream())
                .distinct()
                .toList();
    }



    @Override
    public List<ClassesDto> findAllExamenByClasse(Long idexamen) {
        return this.getExamenByClasse(idexamen).stream()
                .map(ClassesDto::fromEntity)
                .collect(Collectors.toList());
    }

    public List<Classes> getExamenByClasse(Long idclasses) {
        Examen examen = examenRepository.findById(idclasses)
                .orElseThrow(() -> new EntityNotFoundException("Classe not found"));
        return examen.getClasses();
    }
    @Override
    public List<ListNoteDto> findAllListNotesByExamen(Long id) {
        return noteRepository.listNoteByExamen(id).stream()
                .map(ListNoteDto::fromEntity)
                .collect(Collectors.toList());
    }


    @Override
    public List<ListNoteDto> getNotesByEleveIdMatiereId(Long idMatiere, Authentication connectedUser) {
        Eleve eleve = ((Eleve) connectedUser.getPrincipal());
        return noteRepository.findByEleve_IdAndExamen_Matiere_IdMatiere(eleve.getId(),idMatiere).stream()
                .map(ListNoteDto::fromEntity)
                .collect(Collectors.toList());
    }

}



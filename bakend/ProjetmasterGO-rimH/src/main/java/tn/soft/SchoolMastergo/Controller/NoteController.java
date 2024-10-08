package tn.soft.SchoolMastergo.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import tn.soft.SchoolMastergo.dto.ClassesDto;
import tn.soft.SchoolMastergo.dto.ListNoteDto;
import tn.soft.SchoolMastergo.dto.NoteDto;
import tn.soft.SchoolMastergo.entites.Eleve;
import tn.soft.SchoolMastergo.services.NoteService;
import tn.soft.SchoolMastergo.services.ParentService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/notes")
@RequiredArgsConstructor
public class NoteController {


    private final NoteService noteService;
    private final ParentService parentService;

    @GetMapping("/listeNote")
    public List<NoteDto> findAllNotes() {
        return noteService.findAllNotes();
    }

    @GetMapping("/getNotebyid/{id}")
    public NoteDto findNoteById(@PathVariable("id") Long id) {
        return noteService.findNoteById(id);
    }

    @PostMapping("/save")
    public NoteDto createNote(@RequestBody NoteDto noteDto) {
        return noteService.createNote(noteDto);
    }

    @DeleteMapping("/" +
            "/{id}")
    public void deleteNoteById(@PathVariable("id") Long id) {
        noteService.deleteNoteById(id);
    }

    @GetMapping("/eleve/{examenId}")
    public List<Eleve> getElevesByExamen(@PathVariable("examenId") Long examenId) {
        return noteService.getElevesByExamen(examenId);
    }
    @GetMapping("/classe/{classId}")
    public List<ClassesDto> getExamenByClasse(@PathVariable("classId") Long classId) {
        return noteService.findAllExamenByClasse(classId);
    }
    @GetMapping("/listeNoteByExamen/{idExam}")
    public List<ListNoteDto> findAllNotesByExamen(@PathVariable("idExam") Long idExam) {
        return noteService.findAllListNotesByExamen(idExam);
    }
    @GetMapping("/listeNoteByEleve/{idmatiere}")
    public List<ListNoteDto> getNotesByEleveId (@PathVariable("idmatiere") Long idmatiere,Authentication connectedUser){
        return noteService.getNotesByEleveIdMatiereId( idmatiere,connectedUser);
    }

    @GetMapping("/ListNoteEleveByParentMatiere/{idEleve}/{idMatiere}")
    public ResponseEntity<List<ListNoteDto>> getNotesByParentAndMatiere(@PathVariable Long idEleve,@PathVariable Long idMatiere, Authentication authentication) {
        List<ListNoteDto> notes = parentService.getListNotesByEleveAndMatiere(idEleve,idMatiere, authentication);
        return ResponseEntity.ok(notes);
    }

    }

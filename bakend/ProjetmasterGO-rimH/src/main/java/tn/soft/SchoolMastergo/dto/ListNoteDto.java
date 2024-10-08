package tn.soft.SchoolMastergo.dto;

import lombok.*;
import tn.soft.SchoolMastergo.entites.Note;
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ListNoteDto {

    private Long idNote;
    private String noteExam;
    private String remarque;
    private Elevedto eleve;
    private ExamenDto examen;

    public static Note toEntity(NoteDto request)
    {
        return Note.builder()
                .idNote(request.getIdNote())
                .noteExam(request.getNoteExam())
                .remarque(request.getRemarque())
                .build();


    }
    public static ListNoteDto fromEntity(Note request)
    {
        return ListNoteDto.builder()
                .idNote(request.getIdNote())
                .noteExam(request.getNoteExam())
                .remarque(request.getRemarque())
                .eleve(Elevedto.fromEntity(request.getEleve()))
                .examen(ExamenDto.fromEntity(request.getExamen()))
                .build();

    }
}

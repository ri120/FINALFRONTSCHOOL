package tn.soft.SchoolMastergo.dto;


import lombok.Builder;
import lombok.Data;
import tn.soft.SchoolMastergo.entites.Note;

@Builder
@Data
public class NoteDto {
    private Long idNote;
    private String noteExam;
    private String remarque;
    private Long elevesId;
    private Long examensId;


    public static Note toEntity(NoteDto request)
    {
        return Note.builder()
                .idNote(request.getIdNote())
                .noteExam(request.getNoteExam())
                .remarque(request.getRemarque())
                .build();

    }
    public static NoteDto fromEntity(Note request)
    {
        return NoteDto.builder()
                .idNote(request.getIdNote())
                .noteExam(request.getNoteExam())
                .remarque(request.getRemarque())
                .build();

    }
}

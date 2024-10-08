package tn.soft.SchoolMastergo.dto;


import lombok.Builder;
import lombok.Data;
import tn.soft.SchoolMastergo.entites.*;
import java.util.Date;
import java.util.List;

@Builder
@Data
public class DevoirDto {
    private Long idDevoir;
    private String tache;
    private Date dateDevoir;
    private List<Long> classesId;
    private Long matiereId;
    private String titre;

    public static Devoir toEntity(DevoirDto request)
    {
        return Devoir.builder()
                .idDevoir(request.getIdDevoir())
                .tache(request.getTache())
                .dateDevoir(request.getDateDevoir())
                .titre(request.getTitre())

                .build();

    }
    public static DevoirDto fromEntity(Devoir request)
    {
        return DevoirDto.builder()
                .idDevoir(request.getIdDevoir())
                .tache(request.getTache())
                .dateDevoir(request.getDateDevoir())
                .titre(request.getTitre())

                .build();

    }
}

package tn.soft.SchoolMastergo.dto;

import lombok.*;
import tn.soft.SchoolMastergo.entites.Devoir;

import java.util.Date;
import java.util.List;
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ListDevoirDto {
    private Long idDevoir;
    private String tache;
    private Date dateDevoir;
    private List<Long> classesId;
    private  MatiereDto matiereDto;


    public static Devoir toEntity(ListDevoirDto request)
    {
        return Devoir.builder()
                .idDevoir(request.getIdDevoir())
                .tache(request.getTache())
                .dateDevoir(request.getDateDevoir())

                .build();

    }
    public static ListDevoirDto fromEntity(Devoir request)
    {
        return ListDevoirDto.builder()
                .idDevoir(request.getIdDevoir())
                .tache(request.getTache())
                .dateDevoir(request.getDateDevoir())
                .matiereDto(MatiereDto.fromEntity(request.getMatiere()))
                .build();

    }
}

package tn.soft.SchoolMastergo.dto;

import lombok.*;
import tn.soft.SchoolMastergo.entites.Examen;

import java.util.Date;
import java.util.List;
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ListExamenDto {
    private Long idExamen;
    private String numExamen;
    private Date date;
    private String duree;
    private List<Long> classesIds;
    private Long professeurId;
    private MatiereDto matiereDto;



    public static Examen toEntity(ListExamenDto request)
    {
        return Examen.builder()
                .idExamen(request.getIdExamen())
                .numExamen(request.getNumExamen())
                .date(request.getDate())
                .duree(request.getDuree())
                .build();

    }
    public static ListExamenDto fromEntity(Examen request)
    {
        return ListExamenDto.builder()
                .idExamen(request.getIdExamen())
                .numExamen(request.getNumExamen())
                .date(request.getDate())
                .duree(request.getDuree())
                .matiereDto(MatiereDto.fromEntity(request.getMatiere()))
                .build();

    }

}

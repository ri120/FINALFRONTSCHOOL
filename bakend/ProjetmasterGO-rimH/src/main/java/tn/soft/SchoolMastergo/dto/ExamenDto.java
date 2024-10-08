package tn.soft.SchoolMastergo.dto;


import lombok.Builder;
import lombok.Data;
import tn.soft.SchoolMastergo.entites.*;

import java.util.Date;
import java.util.List;

@Builder
@Data
public class ExamenDto {
    private Long idExamen;
    private String numExamen;
    private Date date;
    private String duree;
    private List<Long> classesIds;
    private Long professeurId;
    private Long matiereId;



    public static Examen toEntity(ExamenDto request)
    {
        return Examen.builder()
                .idExamen(request.getIdExamen())
                .numExamen(request.getNumExamen())
                .date(request.getDate())
                .duree(request.getDuree())
                .build();

    }
    public static ExamenDto fromEntity(Examen request)
    {
        return ExamenDto.builder()
                .idExamen(request.getIdExamen())
                .numExamen(request.getNumExamen())
                .date(request.getDate())
                .duree(request.getDuree())
                .build();

    }

}

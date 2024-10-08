package tn.soft.SchoolMastergo.dto;

import lombok.Builder;
import lombok.Data;
import tn.soft.SchoolMastergo.entites.Absence;

import java.util.Date;
import java.util.List;

@Builder
@Data
public class AbsenceDto {
    private Long id;
    private Date date;
    private String matiere;
    private Long professeurId;
    private List<Long> slotEmploiTempsId;
    private Long eleveID;


    public static Absence toEntity(AbsenceDto request)
    {
        return Absence.builder()
                .id(request.getId())
                .date(request.getDate())
                .matiere(request.getMatiere())
                .build();

    }
    public static AbsenceDto fromEntity(Absence request)
    {
        return AbsenceDto.builder()
                .id(request.getId())
                .date(request.getDate())
                .matiere(request.getMatiere())
                .build();

    }
}

package tn.soft.SchoolMastergo.dto;


import lombok.Builder;
import lombok.Data;
import tn.soft.SchoolMastergo.entites.*;

import java.util.List;
@Builder
@Data
public class EmpTempsDto {
    private Long id;
    private String salle;
    private String anneescolair;
    private Long matiereid;
    private Long professeurid;
    private Long classesid;
    private List<Long> emploisTempsIds;
    private List<Long> absences;

    public static EmpTemps toEntity(EmpTempsDto request)
    {
        return EmpTemps.builder()
                .id(request.getId())
                .salle(request.getSalle())
                .anneescolair(request.getAnneescolair())
                .build();

    }
    public static EmpTempsDto fromEntity(EmpTemps request)
    {
        return EmpTempsDto.builder()
                .id(request.getId())
                .salle(request.getSalle())
                .anneescolair(request.getAnneescolair())
                .build();
    }
}

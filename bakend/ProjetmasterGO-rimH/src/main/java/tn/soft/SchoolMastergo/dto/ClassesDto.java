package tn.soft.SchoolMastergo.dto;


import lombok.Builder;
import lombok.Data;
import tn.soft.SchoolMastergo.entites.*;

import java.util.List;

@Builder
@Data
public class ClassesDto {
    private Long id;
    private String titre;
    private String annescolair;

    private List<Long> elevesIds;

    private List<Long> SeancesIds;
    private List<Long> devoirsIds;
    private List<Long> coursIds;
    private List<Long> examensIds;

    public static Classes toEntity(ClassesDto request)
    {
        return Classes.builder()
                .id(request.getId())
                .titre(request.getTitre())
                .annescolair(request.getAnnescolair())
                .build();

    }
    public static ClassesDto fromEntity(Classes request)
    {
        return ClassesDto.builder()
                .id(request.getId())
                .titre(request.getTitre())
                .annescolair(request.getAnnescolair())
                .build();

    }
}

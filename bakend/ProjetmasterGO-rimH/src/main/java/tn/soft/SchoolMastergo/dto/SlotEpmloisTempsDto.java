package tn.soft.SchoolMastergo.dto;

import lombok.Builder;
import lombok.Data;
import tn.soft.SchoolMastergo.entites.SlotEpmloisTemps;

import java.util.List;

@Builder
@Data
public class SlotEpmloisTempsDto {
    private Long id;
    private String timestart;
    private String timeend;
    private String jour;
    private String anneescolair;
    private List<Long> seancesIds;

    public static SlotEpmloisTemps toEntity(SlotEpmloisTempsDto request)
    {
        return SlotEpmloisTemps.builder()
                .id(request.getId())
                .timestart(request.getTimestart())
                .timeend(request.getTimeend())
                .jour(request.getJour())
                .anneescolair(request.getAnneescolair())
                .build();

    }
    public static SlotEpmloisTempsDto fromEntity(SlotEpmloisTemps request)
    {
        return SlotEpmloisTempsDto.builder()
                .id(request.getId())
                .timestart(request.getTimestart())
                .timeend(request.getTimeend())
                .jour(request.getJour())
                .anneescolair(request.getAnneescolair())
                .build();
    }
}

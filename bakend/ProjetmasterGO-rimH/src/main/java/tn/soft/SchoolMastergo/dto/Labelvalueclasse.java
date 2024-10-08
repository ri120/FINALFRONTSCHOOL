package tn.soft.SchoolMastergo.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import tn.soft.SchoolMastergo.entites.Classes;
import tn.soft.SchoolMastergo.entites.SlotEpmloisTemps;
@Builder
@Data
@AllArgsConstructor
public class Labelvalueclasse {
    private Long value;
    private String label;
    public static Labelvalueclasse fromEntity(Classes classes) {
        return Labelvalueclasse.builder()
                .value(classes.getId())
                .label(classes.getTitre())

                .build();
    }
}

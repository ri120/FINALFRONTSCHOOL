package tn.soft.SchoolMastergo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NiveauDto {
    private Long id;
    private String nom;
    private String typeEnseignement;
}

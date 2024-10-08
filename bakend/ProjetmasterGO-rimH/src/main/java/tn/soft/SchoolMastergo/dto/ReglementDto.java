package tn.soft.SchoolMastergo.dto;


import lombok.Builder;
import lombok.Data;
import tn.soft.SchoolMastergo.entites.Offre;
import tn.soft.SchoolMastergo.entites.Reglement;

import java.util.Date;

@Builder
@Data
public class ReglementDto {
    private Long id;
    private String modepaiement;
    private Date operation;
    private Double montant;
    private Long parentId;
    private Long eleveId;

    public static Reglement toEntity(ReglementDto request)
    {
        return Reglement.builder()
                .id(request.getId())
                .modepaiement(request.getModepaiement())
                .operation(request.getOperation())
                .montant(request.getMontant())
                .build();

    }
    public static ReglementDto fromEntity(Reglement request)
    {
        return ReglementDto.builder()
                .id(request.getId())
                .modepaiement(request.getModepaiement())
                .operation(request.getOperation())
                .montant(request.getMontant())
                .build();
    }
}

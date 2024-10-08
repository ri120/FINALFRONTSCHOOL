package tn.soft.SchoolMastergo.dto;

import lombok.*;
import tn.soft.SchoolMastergo.entites.Eleve;
import tn.soft.SchoolMastergo.entites.NiveauScolaire;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Listeleve {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private NiveauScolaire niveauScolaire;
    private String statutPaiement;
    private String statutAffectation;
    public static Eleve toEntity(Listeleve request)
    {
        return Eleve.builder()
                .id(request.getId())
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .phone(request.getPhone())
                .email(request.getEmail())
                .niveauScolaire(request.getNiveauScolaire())
                .statutPaiement(request.getStatutPaiement())
                .statutAffectation(request.getStatutAffectation())
                .build();
    }
    public static Listeleve fromEntity(Eleve request)
    {
        return Listeleve.builder()
                .id(request.getId())
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .phone(request.getPhone())
                .email(request.getEmail())
                .niveauScolaire(request.getNiveauScolaire())
                .statutPaiement(request.getStatutPaiement())
                .statutAffectation(request.getStatutAffectation())
                .build();

    }
}

package tn.soft.SchoolMastergo.dto;

import java.util.ArrayList;

import org.springframework.stereotype.Component;

import tn.soft.SchoolMastergo.entites.Niveau;

@Component
public class NiveauMapper {

    public NiveauDto toDTO(Niveau niveau) {
        return new NiveauDto(niveau.getId(), niveau.getNom(), niveau.getTypeEnseignement());
    }

    public Niveau toEntity(NiveauDto niveauDTO) {
        return new Niveau(niveauDTO.getId(), niveauDTO.getNom(), niveauDTO.getTypeEnseignement(), new ArrayList<>());
    }
}
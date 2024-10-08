package tn.soft.SchoolMastergo.services;

import tn.soft.SchoolMastergo.dto.ListReglement;
import tn.soft.SchoolMastergo.dto.Listeleve;
import tn.soft.SchoolMastergo.dto.ReglementDto;
import tn.soft.SchoolMastergo.entites.NiveauScolaire;

import java.util.List;

public interface ReglementService {
    List<ReglementDto> findAllReglements();
    ReglementDto findReglementById(Long reglementId);
    ReglementDto createReglement(ReglementDto reglementDto);
    void deleteReglementById(Long reglementId);

    List<Listeleve> findAllListEleve(NiveauScolaire niveauScolaire);

    List<Listeleve> findAllListElevePaye(NiveauScolaire niveauScolaire);
    List<ListReglement> findlistereglementbyeleve(Long ideleve);
    void deleteEleveById(Long IdEleve);
}

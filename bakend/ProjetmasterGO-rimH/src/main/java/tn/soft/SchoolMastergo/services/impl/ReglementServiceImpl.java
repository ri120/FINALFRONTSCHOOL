package tn.soft.SchoolMastergo.services.impl;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import tn.soft.SchoolMastergo.dto.ListReglement;
import tn.soft.SchoolMastergo.dto.Listeleve;
import tn.soft.SchoolMastergo.dto.ReglementDto;
import tn.soft.SchoolMastergo.entites.*;
import tn.soft.SchoolMastergo.repository.ReglementRepository;
import tn.soft.SchoolMastergo.security.repository.EleveRepository;
import tn.soft.SchoolMastergo.security.repository.ParentRepository;
import tn.soft.SchoolMastergo.services.ReglementService;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReglementServiceImpl implements ReglementService {
    private final ReglementRepository reglementRepository;
    private final ParentRepository parentRepository;
    private final EleveRepository eleveRepository;

    @Override
    public List<ReglementDto> findAllReglements() {
        return reglementRepository.findAll().stream()
                .map(ReglementDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public ReglementDto findReglementById(Long reglementId) {
        Optional<Reglement> optionalReglement = reglementRepository.findById(reglementId);
        optionalReglement.orElseThrow(() -> new RuntimeException("Reglement not found with id: " + reglementId));
        return ReglementDto.fromEntity(optionalReglement.get());
    }

    @Override
    public ReglementDto createReglement(ReglementDto reglementDto) {
        Parent parent = parentRepository.findById(reglementDto.getParentId())
                .orElseThrow(() -> new EntityNotFoundException("No Parent found with ID:: " + reglementDto.getParentId()));

        Eleve eleve = eleveRepository.findById(reglementDto.getEleveId())
                .orElseThrow(() -> new EntityNotFoundException("No Eleve found with ID:: " + reglementDto.getEleveId()));

        Reglement reglement = ReglementDto.toEntity(reglementDto);
        reglement.setEleve(eleve);
        reglement.setParent(parent);
        eleve.setStatutPaiement("paye");
        eleveRepository.save(eleve);
        return ReglementDto.fromEntity(reglementRepository.save(reglement));
    }

    @Override
    public void deleteReglementById(Long reglementId) {
        reglementRepository.deleteById(reglementId);
    }

    @Override
    public List<Listeleve> findAllListEleve(NiveauScolaire niveauScolaire) {
        return eleveRepository.listAllEleveByNiv(niveauScolaire).stream()
                .map(Listeleve::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public List<Listeleve> findAllListElevePaye(NiveauScolaire niveauScolaire) {
        return eleveRepository.listAllEleveByNivAndPaye(niveauScolaire).stream()
                .map(Listeleve::fromEntity)
                .collect(Collectors.toList());
    }
    @Override
    public void deleteEleveById(Long IdEleve) {
        eleveRepository.deleteById(IdEleve);
    }

	@Override
	public List<ListReglement> findlistereglementbyeleve(Long ideleve) {
		   return reglementRepository.findByEleve_Id(ideleve).stream()
	                .map(ListReglement::fromEntity)
	                .collect(Collectors.toList());
	}

}

package tn.soft.SchoolMastergo.services.impl;

import java.util.List;
import java.util.stream.Collectors;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import tn.soft.SchoolMastergo.dto.NiveauDto;
import tn.soft.SchoolMastergo.dto.NiveauMapper;
import tn.soft.SchoolMastergo.entites.Niveau;
import tn.soft.SchoolMastergo.repository.NiveauRepository;

@Service
@RequiredArgsConstructor
public class NiveauServiceImpl {

    private final NiveauRepository niveauRepository;


    private final NiveauMapper niveauMapper;

    public List<NiveauDto> findAll() {
        List<Niveau> niveaux = niveauRepository.findAll();
        return niveaux.stream().map(niveauMapper::toDTO).collect(Collectors.toList());
    }

    public NiveauDto findById(Long id) {
        Niveau niveau = niveauRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Niveau not found"));
        return niveauMapper.toDTO(niveau);
    }

    public List<NiveauDto> getNiveausByTypeEnseignement(String typeEnseignement) {
        List<Niveau> niveaux = niveauRepository.findByTypeEnseignement(typeEnseignement);
        return niveaux.stream().map(niveauMapper::toDTO).collect(Collectors.toList());
    }

    public NiveauDto create(NiveauDto NiveauDto) {
        Niveau niveau = niveauMapper.toEntity(NiveauDto);
        Niveau savedNiveau = niveauRepository.save(niveau);
        return niveauMapper.toDTO(savedNiveau);
    }

    public NiveauDto update(Long id, NiveauDto NiveauDto) {
        Niveau existingNiveau = niveauRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Niveau not found"));
        existingNiveau.setNom(NiveauDto.getNom());
        Niveau updatedNiveau = niveauRepository.save(existingNiveau);
        return niveauMapper.toDTO(updatedNiveau);
    }

    public void delete(Long id) {
        Niveau existingNiveau = niveauRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Niveau not found"));
        niveauRepository.delete(existingNiveau);
    }

}

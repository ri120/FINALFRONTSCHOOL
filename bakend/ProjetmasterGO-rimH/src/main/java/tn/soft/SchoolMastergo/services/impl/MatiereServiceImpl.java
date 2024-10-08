package tn.soft.SchoolMastergo.services.impl;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import tn.soft.SchoolMastergo.dto.ClassesDto;
import tn.soft.SchoolMastergo.dto.MatiereDto;
import tn.soft.SchoolMastergo.entites.Agentadministratif;
import tn.soft.SchoolMastergo.entites.Classes;
import tn.soft.SchoolMastergo.entites.Matiere;
import tn.soft.SchoolMastergo.entites.Niveau;
import tn.soft.SchoolMastergo.file.FileStorageService;
import tn.soft.SchoolMastergo.repository.MatiereRepository;
import tn.soft.SchoolMastergo.repository.NiveauRepository;
import tn.soft.SchoolMastergo.services.MatiereService;

import java.awt.print.Book;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MatiereServiceImpl implements MatiereService {
    private final MatiereRepository matiereRepository;
    private final FileStorageService fileStorageService;
    private final NiveauRepository niveauRepository;
    @Override
    public List<MatiereDto> findAllMatieres() {
        return matiereRepository.findAll().stream()
                .map(MatiereDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public List<MatiereDto> findAllMatieresByNiveau(Long niveauId) {
        Niveau niveau = niveauRepository.findById(niveauId)
                .orElseThrow(() -> new EntityNotFoundException("No Niveau found with ID:: " + niveauId));
        return matiereRepository.findByNiveau(niveau).stream()
                .map(MatiereDto::fromEntity)
                .collect(Collectors.toList());

    }

    @Override
    public MatiereDto findMatiereById(Long id) {
        Optional<Matiere> optionalMatiere = matiereRepository.findById(id);
        optionalMatiere.orElseThrow(() -> new RuntimeException("Matier not found with id: " + id));
        return MatiereDto.fromEntity(optionalMatiere.get());

    }
    @Override
    public MatiereDto saveMatiere(MatiereDto matiereDto, Authentication connectedUser) {
       /*Niveau niveau = niveauRepository.findById(matiereDto.getNiveauId())
                .orElseThrow(() -> new EntityNotFoundException("No Niveau found with ID:: " + matiereDto.getNiveauId()));*/

        Agentadministratif user = ((Agentadministratif) connectedUser.getPrincipal());
        Matiere matiere = MatiereDto.toEntity(matiereDto);
        System.err.println(matiere);
        matiere.setAgentadministratif(user);
       // matiere.setNiveau(niveau);
        return MatiereDto.fromEntity(matiereRepository.save(matiere));
    }
    @Override
    public void deleteById(Long matiereId) {
        matiereRepository.deleteById(matiereId);
    }
    @Override
    public MatiereDto update(MatiereDto matiereDto, Authentication connectedUser) {
    	
    	Optional<Matiere>matiereptional =matiereRepository.findById(matiereDto.getIdMatiere());
    	if(matiereptional.isPresent())
    	 {
        Agentadministratif user = ((Agentadministratif) connectedUser.getPrincipal());
        Matiere matiere = MatiereDto.toEntity(matiereDto);
        matiereptional.get().setNomMatiere(matiere.getNomMatiere());
        matiereptional.get().setCoeficient(matiere.getCoeficient());
        matiereptional.get().setCover(matiere.getCover());
        matiereptional.get().setDuree(matiere.getDuree());
        matiereptional.get().setAgentadministratif(user);
        return MatiereDto.fromEntity(matiereRepository.save(matiereptional.get()));
    	 }
    	else
    		throw new RuntimeException("invalid classes");
    }

   /* public void uploadMatierCoverPicture(MultipartFile file, Authentication connectedUser, Long matiereId) {
        Matiere matiere = matiereRepository.findById(matiereId)
                .orElseThrow(() -> new EntityNotFoundException("No Matiere found with ID:: " + matiereId));
        Agentadministratif user = ((Agentadministratif) connectedUser.getPrincipal());
        var profilePicture = fileStorageService.saveFile(file, matiereId, user.getId());
        matiere.setAvatar(profilePicture);
        matiereRepository.save(matiere);
    }
*/

}


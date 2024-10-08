package tn.soft.SchoolMastergo.services;

import org.springframework.security.core.Authentication;
import org.springframework.web.multipart.MultipartFile;
import tn.soft.SchoolMastergo.dto.MatiereDto;

import java.util.List;

public interface MatiereService {
     List<MatiereDto> findAllMatieres();
     List<MatiereDto> findAllMatieresByNiveau(Long niveauId);
     MatiereDto findMatiereById(Long id);
     MatiereDto saveMatiere(MatiereDto matiereDto, Authentication connectedUser);
     void deleteById(Long matiereId);
     MatiereDto update(MatiereDto matiereDto, Authentication connectedUser);
   // void uploadMatierCoverPicture(MultipartFile file, Authentication connectedUser, Long matiereId);

}

package tn.soft.SchoolMastergo.services;

import org.springframework.security.core.Authentication;
import org.springframework.web.multipart.MultipartFile;

import tn.soft.SchoolMastergo.dto.ClassesDto;
import tn.soft.SchoolMastergo.dto.CoursDto;
import tn.soft.SchoolMastergo.dto.OffreDto;
import tn.soft.SchoolMastergo.dto.EmpTempsDto;

import java.util.List;

public interface OffreService {
    OffreDto saveOffre(OffreDto offreDto, Authentication connectedUser);
    List<OffreDto> findAll();
    OffreDto findById(Long id);
    OffreDto uploadoffreImg(Long Idimg, MultipartFile image);
    void deleteSeanceById(Long offreId);
    OffreDto update(OffreDto coffreDto, Authentication connectedUser);
}

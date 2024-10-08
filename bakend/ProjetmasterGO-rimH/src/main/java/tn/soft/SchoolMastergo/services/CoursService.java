package tn.soft.SchoolMastergo.services;

import org.springframework.security.core.Authentication;
import org.springframework.web.multipart.MultipartFile;
import tn.soft.SchoolMastergo.dto.CoursDto;
import tn.soft.SchoolMastergo.dto.ListCour;

import java.util.List;



public interface CoursService {
    List<CoursDto> findAllCours();
    CoursDto findCourById(Long id);

    void deleteCourById(Long courId);
    CoursDto uploadcoursfile(Long Idarticle, MultipartFile image);
    CoursDto createCours(CoursDto coursDto, Authentication connectedUser);
    List<ListCour> findAllCoursByclasseAndmatiere(Long classId, Long matiereId);
}

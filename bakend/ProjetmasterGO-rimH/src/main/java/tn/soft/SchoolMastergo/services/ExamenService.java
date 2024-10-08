package tn.soft.SchoolMastergo.services;

import org.springframework.security.core.Authentication;
import tn.soft.SchoolMastergo.dto.ExamenDto;
import tn.soft.SchoolMastergo.dto.Labelvalueclasse;
import tn.soft.SchoolMastergo.dto.ListExamenDto;

import java.util.List;

public interface ExamenService {
   List<ListExamenDto> findAllExamen() ;
    ExamenDto findExamenById(Long id);
    ExamenDto createExamen(ExamenDto examenDto ,Authentication connectedUser);
    void deleteExamenById(Long examenId);

    List<Labelvalueclasse> listeclasse();

    List<ListExamenDto> findAllExamensByclasseAndmatiere(Long classId, Long matiereId);
}

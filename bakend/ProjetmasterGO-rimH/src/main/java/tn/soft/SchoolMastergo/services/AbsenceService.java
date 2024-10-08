package tn.soft.SchoolMastergo.services;

import org.springframework.security.core.Authentication;
import tn.soft.SchoolMastergo.dto.AbsenceDto;
import tn.soft.SchoolMastergo.dto.ListAbsenceDto;

import java.util.List;

public interface AbsenceService {
    List<AbsenceDto> findAllAbsence();
    AbsenceDto findAbsenceById(Long id);

    AbsenceDto createAbsence(AbsenceDto absenceDto, Authentication connectedUser);

    //    AbsenceDto createAbsence(AbsenceDto absenceDto);
    void deleteAbsenceById(Long abscenceId);

   List<ListAbsenceDto> findAllListAbsenceByEleve(Long id);

}

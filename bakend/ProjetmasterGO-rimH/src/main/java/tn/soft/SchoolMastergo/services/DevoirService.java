package tn.soft.SchoolMastergo.services;

import org.springframework.security.core.Authentication;
import org.springframework.web.multipart.MultipartFile;
import tn.soft.SchoolMastergo.dto.DevoirDto;
import tn.soft.SchoolMastergo.dto.ListDevoirDto;

import java.util.List;

public interface DevoirService {
    List<DevoirDto> findAllDevoirs();
    DevoirDto findDevoirById(Long id);
   DevoirDto createDevoir(DevoirDto devoirDto, Authentication connectedUser);
    void deleteDevoirById(Long devoirId);
    DevoirDto uploaddevoirfile(Long idDevoir, MultipartFile image) ;
    List<ListDevoirDto> findAllDevoirsByProf(Authentication connectedUser);

    List<ListDevoirDto> findAllDevoirsByclasseAndmatiere(Long classId, Long matiereId);
}

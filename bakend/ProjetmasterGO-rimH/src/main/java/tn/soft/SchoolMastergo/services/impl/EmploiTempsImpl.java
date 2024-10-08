package tn.soft.SchoolMastergo.services.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.soft.SchoolMastergo.dto.emploiEleve.EmpTempsDto;
import tn.soft.SchoolMastergo.repository.EmploiTempsRepository;
import tn.soft.SchoolMastergo.services.EmploiTempsService;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EmploiTempsImpl implements EmploiTempsService {

    private final EmploiTempsRepository empTempsRepository;

//    @Override
//    public EmpTempsDto getEmpTempsByClasseId(Long classeId) {
//        Optional<EmpTemps> empTemps = empTempsRepository.findByClassesId(classeId);
//        return empTemps.map(EmpTempsDto::fromEntity)
//                .orElseThrow(() -> new RuntimeException("EmpTemps not found for class id: " + classeId));
//    }

        @Override
    public List<EmpTempsDto> getEmpTempsByClasseId(Long classeId) {
            return empTempsRepository.findByClassesId(classeId).stream()
                    .map(EmpTempsDto::fromEntity)
                    .collect(Collectors.toList());
        }
}

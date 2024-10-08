package tn.soft.SchoolMastergo.services;

import tn.soft.SchoolMastergo.dto.emploiEleve.EmpTempsDto;

import java.util.List;

public  interface EmploiTempsService {
//    EmpTempsDto getEmpTempsByClasseId(Long classeId);
    List<EmpTempsDto> getEmpTempsByClasseId(Long classeId);
}

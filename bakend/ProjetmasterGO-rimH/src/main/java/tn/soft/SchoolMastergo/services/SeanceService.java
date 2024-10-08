package tn.soft.SchoolMastergo.services;

import tn.soft.SchoolMastergo.dto.*;

import java.util.List;

public interface SeanceService {
    EmpTempsDto saveSeance(EmpTempsDto seanceDto);
    List<EmpTempsDto> findAll();
    List<Listenptemps> findAllEmp();

    EmpTempsDto findById(Long id);
    List<Listeprof> findAllprof();
    void deleteSeanceById(Long seanceId);
    List<Labelvalue> listeslot();
}

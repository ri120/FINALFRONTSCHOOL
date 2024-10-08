package tn.soft.SchoolMastergo.services.impl;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import tn.soft.SchoolMastergo.dto.*;
import tn.soft.SchoolMastergo.entites.*;
import tn.soft.SchoolMastergo.repository.ClassesRepository;
import tn.soft.SchoolMastergo.repository.MatiereRepository;
import tn.soft.SchoolMastergo.repository.SeanceRepository;
import tn.soft.SchoolMastergo.repository.SlotEpmloisTempsRepository;
import tn.soft.SchoolMastergo.security.repository.ProfesseurRepository;
import tn.soft.SchoolMastergo.services.SeanceService;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SeanceServiceImpl implements SeanceService {
    private final SeanceRepository seanceRepository;
    private final ProfesseurRepository professeurRepository;
    private final ClassesRepository classesRepository;
    private final SlotEpmloisTempsRepository slotEpmloisTempsRepository;
    private final MatiereRepository matiereRepository;
   // private final SlotEpmloisTempsRepository slotEpmloisTempsRepository;
    
    public EmpTempsDto saveSeance(EmpTempsDto seanceDto) {
        Matiere matiere = matiereRepository.findById(seanceDto.getMatiereid())
                .orElseThrow(() -> new EntityNotFoundException("No Matiere found with ID:: " + seanceDto.getMatiereid()));
        Professeur professeur = professeurRepository.findById(seanceDto.getProfesseurid())
                .orElseThrow(() -> new EntityNotFoundException("No Professeur found with ID:: " + seanceDto.getProfesseurid()));

        Classes classes = classesRepository.findById(seanceDto.getClassesid())
                .orElseThrow(() -> new EntityNotFoundException("No Professeur found with ID:: " + seanceDto.getClassesid()));

        List<SlotEpmloisTemps> slotEpmloisTemps;
        if (seanceDto.getEmploisTempsIds().isEmpty()) {
            throw new IllegalArgumentException("you need atleast on EmploiTempsIds");
        } else {
            slotEpmloisTemps = new ArrayList<>();
            for (Long slotEpmloisTempsId : seanceDto.getEmploisTempsIds()) {
                Optional<SlotEpmloisTemps> slotEpmloisTemps1 = slotEpmloisTempsRepository.findById(slotEpmloisTempsId);
                slotEpmloisTemps1.ifPresent(slotEpmloisTemps::add);
            }
        }

        EmpTemps seance = EmpTempsDto.toEntity(seanceDto);
//        seance.setClasses(classes);
        seance.setMatiere(matiere);
        seance.setProfesseur(professeur);
        seance.setEmploisTemps(slotEpmloisTemps);
        System.err.println(seance);
        seance.setClasses(classes);
        EmpTemps seanceSaved = seanceRepository.save(seance);

        classesRepository.save(classes);
        return EmpTempsDto.fromEntity(seanceSaved);

    }

    public List<EmpTempsDto> findAll() {
        return seanceRepository.findAll().stream()
                .map(EmpTempsDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public List<Listenptemps> findAllEmp() {
        return seanceRepository.findAll().stream()
                .map(Listenptemps::fromEntity)
                .collect(Collectors.toList());
    }

    public EmpTempsDto findById(Long id) {

        Optional<EmpTemps> seance = seanceRepository.findById(id);
        seance.orElseThrow(() -> new RuntimeException("seance not found with id: " + id));
        return EmpTempsDto.fromEntity(seance.get());
    }


    @Override
    public void deleteSeanceById(Long seanceId) {
        matiereRepository.deleteById(seanceId);
    }

    @Override
    public List<Listeprof> findAllprof() {
        return professeurRepository.findAll().stream()
                .map(Listeprof::fromEntity)
                .collect(Collectors.toList());
    }
    @Override
	public List<Labelvalue> listeslot() {
	    return slotEpmloisTempsRepository.findAll()
	        .stream()
	        .map(Labelvalue::fromEntity)
	        .collect(Collectors.toList());
	  }
}

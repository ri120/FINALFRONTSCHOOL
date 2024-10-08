package tn.soft.SchoolMastergo.services.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import tn.soft.SchoolMastergo.dto.AbsenceDto;
import tn.soft.SchoolMastergo.dto.ListAbsenceDto;
import tn.soft.SchoolMastergo.entites.Absence;
import tn.soft.SchoolMastergo.entites.Eleve;
import tn.soft.SchoolMastergo.entites.Professeur;
import tn.soft.SchoolMastergo.entites.SlotEpmloisTemps;
import tn.soft.SchoolMastergo.repository.AbsenceRepository;
import tn.soft.SchoolMastergo.repository.SeanceRepository;
import tn.soft.SchoolMastergo.repository.SlotEpmloisTempsRepository;
import tn.soft.SchoolMastergo.security.repository.EleveRepository;
import tn.soft.SchoolMastergo.services.AbsenceService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AbsenceServiceImpl implements AbsenceService {
    private final AbsenceRepository absenceRepository;
    private final SeanceRepository seanceRepository;
    private final SlotEpmloisTempsRepository slotEpmloisTempsRepository;
    private final EleveRepository eleveRepository;

    @Override
    public List<AbsenceDto> findAllAbsence() {
        return absenceRepository.findAll().stream()
                .map(AbsenceDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public AbsenceDto findAbsenceById(Long id) {
        Optional<Absence> optionalAbsence = absenceRepository.findById(id);
        optionalAbsence.orElseThrow(() -> new RuntimeException("Absence not found with id: " + id));
        return AbsenceDto.fromEntity(optionalAbsence.get());
    }

    @Override
    public AbsenceDto createAbsence(AbsenceDto absenceDto, Authentication connectedUser) {
        Professeur professeur = ((Professeur) connectedUser.getPrincipal());
        Optional<Eleve> eleve = eleveRepository.findById(absenceDto.getEleveID());
        List<SlotEpmloisTemps> slotEpmloisTemps= new ArrayList<>();
        Absence absence = AbsenceDto.toEntity(absenceDto);
        if (absenceDto.getSlotEmploiTempsId().isEmpty() && !eleve.isPresent() && professeur==null) {
            throw new IllegalArgumentException("you need atleast on slotEpmloisTemps");
        } else {
            for (Long slotId : absenceDto.getSlotEmploiTempsId()) {
                Optional<SlotEpmloisTemps> slots = slotEpmloisTempsRepository.findById(slotId);
                slots.ifPresent(slotEpmloisTemps::add);
            }
            absence.setEleve(eleve.get());
            absence.setSeances(slotEpmloisTemps);
            absence.setProfesseur(professeur);

            return AbsenceDto.fromEntity(absenceRepository.save(absence));
        }

//            throw new IllegalArgumentException("you need atleast on absence");

    }

    @Override
    public void deleteAbsenceById(Long abscenceId) {
        absenceRepository.deleteById(abscenceId);
    }

	@Override
	public List<ListAbsenceDto> findAllListAbsenceByEleve(Long id) {
		return absenceRepository.listAbsenceByidEleve(id).stream()
             .map(ListAbsenceDto::fromEntity)
            .collect(Collectors.toList());
	}



}

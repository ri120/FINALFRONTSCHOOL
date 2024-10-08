package tn.soft.SchoolMastergo.services.impl;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import tn.soft.SchoolMastergo.dto.ExamenDto;
import tn.soft.SchoolMastergo.dto.Labelvalueclasse;
import tn.soft.SchoolMastergo.dto.ListExamenDto;
import tn.soft.SchoolMastergo.entites.*;
import tn.soft.SchoolMastergo.repository.ClassesRepository;
import tn.soft.SchoolMastergo.repository.ExamenRepository;
import tn.soft.SchoolMastergo.repository.MatiereRepository;
import tn.soft.SchoolMastergo.security.repository.ProfesseurRepository;
import tn.soft.SchoolMastergo.services.ExamenService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ExamenServiceImpl implements ExamenService {
    private final ExamenRepository examenRepository;
    private final ProfesseurRepository professeurRepository;
    private final ClassesRepository classesRepository;
    private final MatiereRepository matiereRepository;

    @Override
    public List<ListExamenDto> findAllExamen() {
        return examenRepository.findAll().stream()
                .map(ListExamenDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public ExamenDto findExamenById(Long id) {
        Optional<Examen> optionalExamen = examenRepository.findById(id);
        optionalExamen.orElseThrow(() -> new RuntimeException("Examen not found with id: " + id));
        return ExamenDto.fromEntity(optionalExamen.get());
    }



    @Override
    public ExamenDto createExamen(ExamenDto examenDto, Authentication connectedUser) {
        Professeur professeur = ((Professeur) connectedUser.getPrincipal());
        Matiere matiere = matiereRepository.findById(examenDto.getMatiereId())
                .orElseThrow(() -> new EntityNotFoundException("No Matiere found with ID:: " + examenDto.getMatiereId()));

        List<Classes> classes= new ArrayList<>();
        if (examenDto.getClassesIds().isEmpty()) {
            throw new IllegalArgumentException("you need atleast on classes");
        } else {
            for (Long classeId : examenDto.getClassesIds()) {
                Optional<Classes> classes1 = classesRepository.findById(classeId);
                classes1.ifPresent(classes::add);
            }
        }

        Examen examen = ExamenDto.toEntity(examenDto);
        examen.setClasses(classes);
        examen.setMatiere(matiere);
        examen.setProfesseur(professeur);
        return ExamenDto.fromEntity(examenRepository.save(examen));

    }
    @Override
    public List<Labelvalueclasse> listeclasse() {
        return classesRepository.findAll()
                .stream()
                .map(Labelvalueclasse::fromEntity)
                .collect(Collectors.toList());
    }
    @Override
    public void deleteExamenById(Long examenId) {
        examenRepository.deleteById(examenId);
    }

    @Override
    public List<ListExamenDto> findAllExamensByclasseAndmatiere(Long classId, Long matiereId) {

        return examenRepository.findExamByClasses_IdAndMatiere_IdMatiere(classId,matiereId).stream()
                .map(ListExamenDto::fromEntity)
                .collect(Collectors.toList());
    }

}

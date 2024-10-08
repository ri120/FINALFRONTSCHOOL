package tn.soft.SchoolMastergo.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.soft.SchoolMastergo.dto.Professeurdto;
import tn.soft.SchoolMastergo.entites.Professeur;
import tn.soft.SchoolMastergo.security.repository.ProfesseurRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProfesseurService {
    private final ProfesseurRepository professeurRepository;
    public List<Professeurdto> findAll() {
        return professeurRepository.findAll()
                .stream()
                .map(Professeurdto::fromEntity)
                .collect(Collectors.toList());

    }
    public Professeurdto findProfById(Long id) {
        Optional<Professeur> optionalprof = professeurRepository.findById(id);
        optionalprof.orElseThrow(() -> new RuntimeException("prf not found with id: " + id));
        return Professeurdto.fromEntity(optionalprof.get());
    }
    public void deleteProfById(Long idprof) {
    	professeurRepository.deleteById(idprof);
    }

//    public List<Professeurdto> findAllByProfesseur() {
//        return professeurRepository.findAll()
//                .stream()
//                .map(Professeurdto::fromEntity)
//                .collect(Collectors.toList());
//
//    }
}

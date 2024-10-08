package tn.soft.SchoolMastergo.services.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import tn.soft.SchoolMastergo.dto.ClassesDto;
import tn.soft.SchoolMastergo.dto.Labelvalueclasse;
import tn.soft.SchoolMastergo.dto.Listeleve;
import tn.soft.SchoolMastergo.entites.Agentadministratif;
import tn.soft.SchoolMastergo.entites.Classes;
import tn.soft.SchoolMastergo.entites.Eleve;
import tn.soft.SchoolMastergo.entites.NiveauScolaire;
import tn.soft.SchoolMastergo.repository.ClassesRepository;
import tn.soft.SchoolMastergo.security.repository.EleveRepository;
import tn.soft.SchoolMastergo.services.ClassesService;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ClassesServiceImpl implements ClassesService {
    private final ClassesRepository classesRepository;
    private final EleveRepository  eleveRepository;


    @Override
    public ClassesDto save(ClassesDto classesDto, Authentication connectedUser) {

        Agentadministratif user = ((Agentadministratif) connectedUser.getPrincipal());
        Classes classes = ClassesDto.toEntity(classesDto);
        classes.setAgentadministratif(user);
        return ClassesDto.fromEntity(classesRepository.save(classes));
    }

    @Override
    public ClassesDto update(ClassesDto classesDto, Authentication connectedUser) {
    	
    	Optional<Classes>clssoptional =classesRepository.findById(classesDto.getId());
    	if(clssoptional.isPresent())
    	 {
        Agentadministratif user = ((Agentadministratif) connectedUser.getPrincipal());
        Classes classes = ClassesDto.toEntity(classesDto);
        clssoptional.get().setTitre(classes.getTitre());
        clssoptional.get().setTitre(classes.getAnnescolair());
        clssoptional.get().setAgentadministratif(user);
        return ClassesDto.fromEntity(classesRepository.save(clssoptional.get()));
    	 }
    	else
    		throw new RuntimeException("invalid classes");
    }

    @Override
    public List<ClassesDto> findAll() {
        return classesRepository.findAll().stream()
                .map(ClassesDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public List<Listeleve> findAllEleve() {
        return eleveRepository.findAll().stream()
                .map(Listeleve::fromEntity)
                .collect(Collectors.toList());
    }
    @Override
    public ClassesDto findById(Long id) {
        Optional<Classes> optionalClasses = classesRepository.findById(id);
         optionalClasses.orElseThrow(() -> new RuntimeException("Classes not found with id: " + id));
         return ClassesDto.fromEntity(optionalClasses.get());
    }



    @Override
    public void deleteById(Long id) {

        classesRepository.deleteById(id);
    }
    @Override
    public List<Labelvalueclasse> listeclasse() {
        return classesRepository.findAll()
                .stream()
                .map(Labelvalueclasse::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public void Ajoutereleveauclasse(Long idclasse, Long ideleve) {
        Optional<Classes> clssoptional = classesRepository.findById(idclasse);
        Optional<Eleve> eleveOptional = eleveRepository.findById(ideleve);

        if (eleveOptional.isPresent()) {

            eleveOptional.get().setClasses(clssoptional.get());
            eleveOptional.get().setStatutAffectation("affecte");
            eleveRepository.save(eleveOptional.get());
          System.err.println(eleveOptional.get().getStatutAffectation());

        }
    }
    @Override
    public List<Listeleve> listAllEleveByNivAndPaye(NiveauScolaire niveauScolaire) {
        return eleveRepository.listAllEleveByNiv(niveauScolaire).stream()

                .map(Listeleve::fromEntity)
                .collect(Collectors.toList());

    }
    @Override
    public List<Listeleve> listAllEleveByClasses(Long idclasse) {
        return eleveRepository.listAllEleveByClasse(idclasse).stream()
                .map(Listeleve::fromEntity)
                .collect(Collectors.toList());

    }


}

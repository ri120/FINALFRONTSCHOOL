package tn.soft.SchoolMastergo.services;

import org.springframework.security.core.Authentication;
import tn.soft.SchoolMastergo.dto.ClassesDto;
import tn.soft.SchoolMastergo.dto.Labelvalueclasse;
import tn.soft.SchoolMastergo.dto.Listeleve;
import tn.soft.SchoolMastergo.entites.NiveauScolaire;

import java.util.List;

public interface ClassesService {
    public List<ClassesDto> findAll();

    List<Listeleve> findAllEleve();

    public ClassesDto findById(Long id);
    ClassesDto save(ClassesDto classesDto, Authentication connectedUser);
    public void deleteById(Long id);
    ClassesDto update(ClassesDto classesDto, Authentication connectedUser);
    List<Labelvalueclasse> listeclasse();
    void Ajoutereleveauclasse (Long idclasse,Long ideleve);

    List<Listeleve> listAllEleveByNivAndPaye(NiveauScolaire niveauScolaire);

    List<Listeleve> listAllEleveByClasses(Long idclasse);
}

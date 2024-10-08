package tn.soft.SchoolMastergo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import tn.soft.SchoolMastergo.entites.Niveau;

import java.util.List;

public interface NiveauRepository extends JpaRepository<Niveau,Long>{
    List<Niveau> findByTypeEnseignement(String typeEnseignement);

}

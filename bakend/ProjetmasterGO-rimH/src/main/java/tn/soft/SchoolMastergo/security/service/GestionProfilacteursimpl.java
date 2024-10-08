package tn.soft.SchoolMastergo.security.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import tn.soft.SchoolMastergo.dto.Elevedto;
import tn.soft.SchoolMastergo.dto.Modprofilelevedto;
import tn.soft.SchoolMastergo.dto.Modprofileparentdto;
import tn.soft.SchoolMastergo.dto.Modprofileprofesseurdto;
import tn.soft.SchoolMastergo.entites.Eleve;
import tn.soft.SchoolMastergo.entites.Parent;
import tn.soft.SchoolMastergo.entites.Professeur;
import tn.soft.SchoolMastergo.security.repository.EleveRepository;
import tn.soft.SchoolMastergo.security.repository.ParentRepository;
import tn.soft.SchoolMastergo.security.repository.ProfesseurRepository;

@Service 
@RequiredArgsConstructor
public class GestionProfilacteursimpl implements  GestionProfilacteurs{
private final EleveRepository eleveRepository;
private final ParentRepository parentRepository;
private final ProfesseurRepository professeurRepository;

@Override
	public Modprofilelevedto findbyid(Long id) {
Eleve sta =eleveRepository.findById(id).get();
		return Modprofilelevedto.fromEntity(sta);
	}

	@Override
	public Modprofilelevedto updatepro(Modprofilelevedto crudprofilStagiaireDTO) {
		Optional<Eleve> eleve =eleveRepository.findById(crudprofilStagiaireDTO.getId());
		System.err.println(eleve);
		System.err.println(crudprofilStagiaireDTO.getId());
		if(eleve.isPresent())
		{
			Eleve statoupdate =eleve.get();
			Eleve sta =Modprofilelevedto.toEntity(crudprofilStagiaireDTO);
			statoupdate.setId(sta.getId());
			statoupdate.setLastName(sta.getLastName());
			statoupdate.setFirstName(sta.getFirstName());
			statoupdate.setEmail(sta.getEmail());
			statoupdate.setPhone(sta.getPhone());
			statoupdate.setAdress(sta.getAdress());;
			//statoupdate.setEmail(sta.getEmail());
			//statoupdate.setTelephone(sta.getTelephone());
			System.err.println("//////////////");
			System.err.println(statoupdate);
			Eleve updatedsta =eleveRepository.save(statoupdate);
			return Modprofilelevedto.fromEntity(updatedsta);
		}
		else
		{
			throw new RuntimeException("no student to update");
		}
		////////////
		
}

	@Override
	public Modprofileparentdto findparentbyid(Long id) {
		Parent sta =parentRepository.findById(id).get();
		return Modprofileparentdto.fromEntity(sta);
	}

	@Override
	public Modprofileparentdto updatepro(Modprofileparentdto crudprofilStagiaireDTO) {
		Optional<Parent> parent =parentRepository.findById(crudprofilStagiaireDTO.getId());
		System.err.println(parent);
		System.err.println(crudprofilStagiaireDTO.getId());
		if(parent.isPresent())
		{
			Parent statoupdate =parent.get();
			Parent sta =Modprofileparentdto.toEntity(crudprofilStagiaireDTO);
			statoupdate.setId(sta.getId());
			statoupdate.setLastName(sta.getLastName());
			statoupdate.setFirstName(sta.getFirstName());
			statoupdate.setEmail(sta.getEmail());
			statoupdate.setPhone(sta.getPhone());
			statoupdate.setAdress(sta.getAdress());;
			//statoupdate.setEmail(sta.getEmail());
			//statoupdate.setTelephone(sta.getTelephone());
			System.err.println("//////////////");
			System.err.println(statoupdate);
			Parent updatedsta =parentRepository.save(statoupdate);
			return Modprofileparentdto.fromEntity(updatedsta);
		}
		else
		{
			throw new RuntimeException("no student to update");
		}
		////////////
	}
	

	@Override
	public List<Elevedto> eleves() {
		return eleveRepository.findAll()
		        .stream()
		        .map(Elevedto::fromEntity)
		        .collect(Collectors.toList());
	}

	@Override
	public Modprofileprofesseurdto findprobyid(Long id) {
		Professeur sta =professeurRepository.findById(id).get();
		return Modprofileprofesseurdto.fromEntity(sta);
	}

	@Override
	public Modprofileprofesseurdto updatepro(Modprofileprofesseurdto crudprofilStagiaireDTO) {
		Optional<Professeur> professeur =professeurRepository.findById(crudprofilStagiaireDTO.getId());
		System.err.println(professeur);
		System.err.println(crudprofilStagiaireDTO.getId());
		if(professeur.isPresent())
		{
			Professeur statoupdate =professeur.get();
			Professeur sta =Modprofileprofesseurdto.toEntity(crudprofilStagiaireDTO);
			statoupdate.setId(sta.getId());
			statoupdate.setLastName(sta.getLastName());
			statoupdate.setFirstName(sta.getFirstName());
			statoupdate.setEmail(sta.getEmail());
			statoupdate.setPhone(sta.getPhone());
			statoupdate.setAdress(sta.getAdress());;
			//statoupdate.setEmail(sta.getEmail());
			//statoupdate.setTelephone(sta.getTelephone());
			System.err.println("//////////////");
			System.err.println(statoupdate);
			Professeur updatedsta =professeurRepository.save(statoupdate);
			return Modprofileprofesseurdto.fromEntity(updatedsta);
		}
		else
		{
			throw new RuntimeException("no student to update");
		}
	}

	@Override
	public Elevedto updateeleve(Elevedto elevedto) {
		// TODO Auto-generated method stub
		return null;
	}
}
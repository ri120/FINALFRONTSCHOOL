package tn.soft.SchoolMastergo.gestionCompte;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import tn.soft.SchoolMastergo.dto.Agentadministratifdto;
import tn.soft.SchoolMastergo.dto.Elevedto;
import tn.soft.SchoolMastergo.dto.Parentdto;
import tn.soft.SchoolMastergo.dto.Professeurdto;
import tn.soft.SchoolMastergo.entites.Agentadministratif;
import tn.soft.SchoolMastergo.entites.Eleve;
import tn.soft.SchoolMastergo.entites.Parent;
import tn.soft.SchoolMastergo.entites.Professeur;
import tn.soft.SchoolMastergo.security.repository.AgentadministratifRrepository;
import tn.soft.SchoolMastergo.security.repository.EleveRepository;
import tn.soft.SchoolMastergo.security.repository.ParentRepository;
import tn.soft.SchoolMastergo.security.repository.ProfesseurRepository;
@Service 
@RequiredArgsConstructor
public class GestionGestionAllProfilsimpl implements  GestionAllProfils{
	private final EleveRepository eleveRepository;
	private final ProfesseurRepository professeurRepository;
	private final ParentRepository parentRepository;
	private final AgentadministratifRrepository agentadministratifRrepository;
	
	
	
	@Override
	public Elevedto findbyideleve(Long id) {
		Optional<Eleve> eleve =eleveRepository.findById(id);
		if (eleve.isPresent())
		{
			Eleve recupeleve=eleve.get();
			return Elevedto.fromEntity(recupeleve);
		}else
			
		throw new RuntimeException("no student");
	}

	@Override
	public Parentdto findbyidparent(Long id) {
		Optional<Parent> parent =parentRepository.findById(id);
		if (parent.isPresent())
		{
			Parent recupeparent=parent.get();
			return Parentdto.fromEntity(recupeparent);
		}else
			
		throw new RuntimeException("no parent");
	}

	@Override
	public Professeurdto findbyidproffeur(Long id) {
		Optional<Professeur> professeur =professeurRepository.findById(id);
		if (professeur.isPresent())
		{
			Professeur recupeprofesseur=professeur.get();
			return Professeurdto.fromEntity(recupeprofesseur);
		}else
			
		throw new RuntimeException("no proffessur");
	}

	@Override
	public Agentadministratifdto findbyidAgentadministratifdto(Long id) {
		Optional<Agentadministratif> agentadministratif =agentadministratifRrepository.findById(id);
		if (agentadministratif.isPresent())
		{
			Agentadministratif recupeprofesseur=agentadministratif.get();
			return Agentadministratifdto.fromEntity(recupeprofesseur);
		}else
			
		throw new RuntimeException("no proffessur");
	}
	

	@Override
	public Elevedto updateeleve(Elevedto elevedto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Parentdto updateproparent(Parentdto elevedto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Professeurdto updateproproffesseur(Professeurdto elevedto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Agentadministratifdto updateproagentadmin(Agentadministratifdto elevedto) {
		// TODO Auto-generated method stub
		return null;
	}

//private final StagiaireRepository stagiaireRepository;
	/*@Override
	public CrudprofilStagiaireDTO findbyid(Long id) {
Stagiaire sta =stagiaireRepository.findById(id).get();
		return CrudprofilStagiaireDTO.fromEntity(sta);
	}

	@Override
	public CrudprofilStagiaireDTO updatepro(CrudprofilStagiaireDTO crudprofilStagiaireDTO) {
		Optional<Stagiaire> stagiaire =stagiaireRepository.findById(crudprofilStagiaireDTO.getId());
		System.err.println(stagiaire);
		System.err.println(crudprofilStagiaireDTO.getId());
		if(stagiaire.isPresent())
		{
			Stagiaire statoupdate =stagiaire.get();
			Stagiaire sta =CrudprofilStagiaireDTO.toEntity(crudprofilStagiaireDTO);
			statoupdate.setId(sta.getId());
			statoupdate.setFullname(sta.getFullname());
			statoupdate.setNiveau(sta.getNiveau());
			statoupdate.setEtablissement(sta.getEtablissement());
			statoupdate.setCv(sta.getCv());
			statoupdate.setCin(sta.getCin());
			statoupdate.setEmail(sta.getEmail());
			statoupdate.setTelephone(sta.getTelephone());
			System.err.println("//////////////");
			System.err.println(statoupdate);
			Stagiaire updatedsta =stagiaireRepository.save(statoupdate);
			return CrudprofilStagiaireDTO.fromEntity(updatedsta);
		}
		else
		{
			throw new RuntimeException("no stagire to update");
		}
		
				
		
	

}*/
}
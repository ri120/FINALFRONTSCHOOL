package tn.soft.SchoolMastergo.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import tn.soft.SchoolMastergo.dto.Elevedto;
import tn.soft.SchoolMastergo.dto.Modprofilelevedto;
import tn.soft.SchoolMastergo.dto.Modprofileparentdto;
import tn.soft.SchoolMastergo.dto.Modprofileprofesseurdto;
import tn.soft.SchoolMastergo.security.service.GestionProfilacteurs;



@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/profil")
public class GestionProfilacteursController {
	private final GestionProfilacteurs gestionProfilacteurs;
	
@GetMapping("/findelevebyid/{id}")
	public Modprofilelevedto findbyid(@PathVariable("id") Long id) {
		return gestionProfilacteurs.findbyid(id);
	}
@PostMapping("/updateEleve")
	public Modprofilelevedto updatepro(@RequestBody Modprofilelevedto crudprofilStagiaireDTO) {
		return gestionProfilacteurs.updatepro(crudprofilStagiaireDTO);
	}
@GetMapping("/findparentbyid/{id}")
public Modprofileparentdto findparentbyid(@PathVariable("id") Long id) {
	return gestionProfilacteurs.findparentbyid(id);
}
@PostMapping("/updatePrent")
public Modprofileparentdto updatepro(@RequestBody Modprofileparentdto crudprofilStagiaireDTO) {
	return gestionProfilacteurs.updatepro(crudprofilStagiaireDTO);
}
@GetMapping("/findProfbyid/{id}")
public Modprofileprofesseurdto findprobyid(@PathVariable("id") Long id) {
	return gestionProfilacteurs.findprobyid(id);
}
@PostMapping("/updateProf")
public Modprofileprofesseurdto updatepro(@RequestBody Modprofileprofesseurdto crudprofilStagiaireDTO) {
	return gestionProfilacteurs.updatepro(crudprofilStagiaireDTO);
}
@GetMapping("/lister-eleve")
public List<Elevedto> eleves() {
	return gestionProfilacteurs.eleves();
}
}




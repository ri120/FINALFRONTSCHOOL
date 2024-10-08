package tn.soft.SchoolMastergo.security.service;

import java.util.List;

import tn.soft.SchoolMastergo.dto.Elevedto;
import tn.soft.SchoolMastergo.dto.Modprofilelevedto;
import tn.soft.SchoolMastergo.dto.Modprofileparentdto;
import tn.soft.SchoolMastergo.dto.Modprofileprofesseurdto;

public interface GestionProfilacteurs {
	// eleve
	Modprofilelevedto findbyid(Long id);

	Modprofilelevedto updatepro(Modprofilelevedto crudprofilStagiaireDTO);

	// parent
	Modprofileparentdto findparentbyid(Long id);

	Modprofileparentdto updatepro(Modprofileparentdto crudprofilStagiaireDTO);

	// prof
	Modprofileprofesseurdto findprobyid(Long id);

	Modprofileprofesseurdto updatepro(Modprofileprofesseurdto crudprofilStagiaireDTO);
	List<Elevedto> eleves();
	Elevedto updateeleve(Elevedto elevedto);

}

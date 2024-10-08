package tn.soft.SchoolMastergo.gestionCompte;

import java.util.List;

import tn.soft.SchoolMastergo.dto.Agentadministratifdto;
import tn.soft.SchoolMastergo.dto.Elevedto;
import tn.soft.SchoolMastergo.dto.Parentdto;
import tn.soft.SchoolMastergo.dto.Professeurdto;

public interface GestionAllProfils {
	Elevedto findbyideleve(Long id );
	Parentdto findbyidparent(Long id );
	Professeurdto findbyidproffeur(Long id );
	Agentadministratifdto findbyidAgentadministratifdto(Long id );
	
	Parentdto updateproparent(Parentdto elevedto);
	Professeurdto updateproproffesseur(Professeurdto elevedto);
	Agentadministratifdto updateproagentadmin(Agentadministratifdto elevedto);
	////
	//List<Elevedto> sleves();
	Elevedto updateeleve(Elevedto elevedto);
	
	
}
 
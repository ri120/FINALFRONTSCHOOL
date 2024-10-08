package tn.soft.SchoolMastergo.services;

import org.springframework.security.core.Authentication;
import tn.soft.SchoolMastergo.dto.ListNoteDto;
import tn.soft.SchoolMastergo.dto.Listeleve;
import tn.soft.SchoolMastergo.dto.Listparent;
import tn.soft.SchoolMastergo.entites.Parent;

import java.util.List;

public interface ParentService {
    List<Listparent> findAllParents();



    void ajouterEleveAuParent(String email, Authentication connectedUser);
   Parent getParentByEleveId(Long eleveId);

   List<Listeleve> findAllEleveByParentId( Authentication connectedUser);


    // Nouvelle méthode pour récupérer les notes par parent et matière
//    List<ListNoteDto> getListNotesByParentAndMatiere(Long idMatiere, Authentication connectedUser);

    List<ListNoteDto> getListNotesByEleveAndMatiere(Long idEleve, Long idMatiere, Authentication connectedUser);
}

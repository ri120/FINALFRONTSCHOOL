package tn.soft.SchoolMastergo.services.impl;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import tn.soft.SchoolMastergo.dto.ListNoteDto;
import tn.soft.SchoolMastergo.dto.Listeleve;
import tn.soft.SchoolMastergo.dto.Listparent;
import tn.soft.SchoolMastergo.entites.Eleve;
import tn.soft.SchoolMastergo.entites.Parent;
import tn.soft.SchoolMastergo.repository.NoteRepository;
import tn.soft.SchoolMastergo.security.repository.EleveRepository;
import tn.soft.SchoolMastergo.security.repository.ParentRepository;
import tn.soft.SchoolMastergo.services.ParentService;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor

public class Parentserviceimp implements ParentService {
    private final ParentRepository parentRepository;
    private final EleveRepository eleveRepository;
    private final NoteRepository noteRepository;
    @Override
    public List<Listparent> findAllParents() {
        return parentRepository.findAll().stream()
                .map(Listparent::fromEntity)
                .collect(Collectors.toList());
    }



    @Override
    public void ajouterEleveAuParent(String email, Authentication connectedUser) {
        Parent parent = ((Parent) connectedUser.getPrincipal());
        Optional<Eleve> optionalEleve = (eleveRepository.findByEmail(email));
        if (optionalEleve.isPresent()) {
            Eleve eleve = optionalEleve.get();

            eleve.setParent(parent);

            eleveRepository.save(eleve);
        }
    }
    public Parent getParentByEleveId(Long eleveId) {
        Eleve eleve = eleveRepository.findById(eleveId)
                .orElseThrow(() -> new EntityNotFoundException("Eleve not found"));
        return eleve.getParent();
    }

    @Override
    public List<Listeleve> findAllEleveByParentId(Authentication connectedUser) {
        Parent parent = ((Parent) connectedUser.getPrincipal());
        return eleveRepository.listEleveByParent(parent.getId()).stream()
                .map(Listeleve::fromEntity)
                .collect(Collectors.toList());

    }
    ///////////get note eleve by parent ////////////


    // Nouvelle méthode pour récupérer les notes par parent et matière
//    @Override
//    public List<ListNoteDto> getListNotesByParentAndMatiere(Long idMatiere, Authentication connectedUser) {
//        Parent parent = (Parent) connectedUser.getPrincipal();
//        List<Eleve> eleves = eleveRepository.listEleveByParent(parent.getId());
//
//        return eleves.stream()
//                .flatMap(eleve -> noteRepository.findByEleve_IdAndExamen_Matiere_IdMatiere(eleve.getId(), idMatiere).stream())
//                .map(ListNoteDto::fromEntity)
//                .collect(Collectors.toList());
//    }
    // Méthode pour récupérer les notes par élève et matière
    @Override
    public List<ListNoteDto> getListNotesByEleveAndMatiere(Long idEleve, Long idMatiere, Authentication connectedUser) {
        Parent parent = (Parent) connectedUser.getPrincipal();

        // Vérification que l'élève appartient bien au parent
        Eleve eleve = eleveRepository.findById(idEleve)
                .orElseThrow(() -> new EntityNotFoundException("Eleve not found"));

        if (!eleve.getParent().getId().equals(parent.getId())) {
            throw new SecurityException("Cet élève n'appartient pas au parent connecté");
        }

        // Récupérer les notes par idEleve et idMatiere
        return noteRepository.findByEleve_IdAndExamen_Matiere_IdMatiere(idEleve, idMatiere).stream()
                .map(ListNoteDto::fromEntity)
                .collect(Collectors.toList());
    }


    }






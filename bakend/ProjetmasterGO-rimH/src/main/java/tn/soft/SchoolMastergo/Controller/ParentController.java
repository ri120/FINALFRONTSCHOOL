package tn.soft.SchoolMastergo.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.soft.SchoolMastergo.dto.Listeleve;
import tn.soft.SchoolMastergo.dto.Listparent;
import tn.soft.SchoolMastergo.entites.Parent;
import tn.soft.SchoolMastergo.services.ParentService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/parent")
@RequiredArgsConstructor
public class ParentController {
    private final ParentService parentService;
@GetMapping("/lister")
    public List<Listparent> findAllParents() {
        return parentService.findAllParents();
    }
@GetMapping("/ajouterEleveparent/{email}")
    public void ajouterEleveAuParent(@PathVariable("email")  String email, Authentication connectedUser) {
        parentService.ajouterEleveAuParent(email,connectedUser);
    }
    @GetMapping("/{id}/parent")
    public ResponseEntity<Parent> getParentByEleveId(@PathVariable Long id) {
        Parent parent = parentService.getParentByEleveId(id);
        return ResponseEntity.ok(parent);
    }
    @GetMapping("/suivi")
    public List<Listeleve> findAllEleveByParentId(Authentication connectedUser) {
        return parentService.findAllEleveByParentId(connectedUser);
    }
}

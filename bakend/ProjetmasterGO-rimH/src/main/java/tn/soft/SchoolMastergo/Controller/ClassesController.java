package tn.soft.SchoolMastergo.Controller;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import tn.soft.SchoolMastergo.dto.ClassesDto;
import tn.soft.SchoolMastergo.dto.Labelvalueclasse;
import tn.soft.SchoolMastergo.dto.Listeleve;
import tn.soft.SchoolMastergo.services.ClassesService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/classes")
@RequiredArgsConstructor
public class ClassesController {

    private final ClassesService classesService;


    @GetMapping
    public List<ClassesDto> getAllClasses() {
        return classesService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ClassesDto> getClassesById(@PathVariable Long id) {
        ClassesDto classesDto = classesService.findById(id);
        return ResponseEntity.ok(classesDto);
    }

    @PostMapping
    public ResponseEntity<ClassesDto> createClasses(@RequestBody ClassesDto classesDto, Authentication connectedUser) {
        ClassesDto savedClasses = classesService.save(classesDto, connectedUser);
        return ResponseEntity.ok(savedClasses);
    }
    @PutMapping("/modifier")
    public ResponseEntity<ClassesDto> modifierClasses(@RequestBody ClassesDto classesDto, Authentication connectedUser) {
        ClassesDto savedClasses = classesService.save(classesDto, connectedUser);
        return ResponseEntity.ok(savedClasses);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteClasses(@PathVariable("id") Long id) {
        classesService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
    @GetMapping("/listerallclasses")
    public List<Labelvalueclasse> listeStagiairDto() {
        // TODO Auto-generated method stub
        return classesService.listeclasse();
    }
    @GetMapping("/listalleleve")
    public List<Listeleve> listeleves() {
        // TODO Auto-generated method stub
        return classesService.findAllEleve();
    }

    @GetMapping("/elevetoclasse/{idclasse}/{ideleve}")
    public void  affectereleveauclasse (@PathVariable("idclasse") Long idclasse,@PathVariable("ideleve") Long ideleve) {
      classesService.Ajoutereleveauclasse(idclasse, ideleve);
    }
    @GetMapping("/listalleleveByClasse/{idclasse}")
    public List<Listeleve> listeleveByClasse (@PathVariable("idclasse") Long idclasse) {
        // TODO Auto-generated method stub
        return classesService.listAllEleveByClasses(idclasse);
    }


}
package tn.soft.SchoolMastergo.Controller;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tn.soft.SchoolMastergo.dto.DevoirDto;
import tn.soft.SchoolMastergo.dto.Professeurdto;
import tn.soft.SchoolMastergo.services.ProfesseurService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/professeurs")
@RequiredArgsConstructor
public class ProfesseurController {
    private final ProfesseurService professeurService;
    @GetMapping("/findall")
    public List<Professeurdto> getAllProfesseurs() {
        return professeurService.findAll();
    }
    @GetMapping("/Getbyidprof/{id}")
    public Professeurdto findDevoirById(@PathVariable Long id) {
        return professeurService.findProfById(id);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteClasses(@PathVariable("id") Long id) {
    	professeurService.deleteProfById(id);
        return ResponseEntity.noContent().build();
    }
}

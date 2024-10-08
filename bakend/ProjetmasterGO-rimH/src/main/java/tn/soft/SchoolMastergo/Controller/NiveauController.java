package tn.soft.SchoolMastergo.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.soft.SchoolMastergo.dto.NiveauDto;
import tn.soft.SchoolMastergo.entites.Niveau;
import tn.soft.SchoolMastergo.services.impl.NiveauServiceImpl;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/niveau")
public class NiveauController {
    private final NiveauServiceImpl niveauService;
    @GetMapping("getAllNiveaux")
    public List<NiveauDto> getAllNiveaux() {
        return niveauService.findAll();
    }

    @GetMapping("getNiveauById/{id}")
    public NiveauDto getNiveauById(@PathVariable Long id) {
        return niveauService.findById(id);
    }

    @GetMapping("getNiveauxByType/{typeEnseignement}")
    public ResponseEntity<List<NiveauDto>> getNiveauxByType(@PathVariable String typeEnseignement) {
        List<NiveauDto> niveaux = niveauService.getNiveausByTypeEnseignement(typeEnseignement);
        return ResponseEntity.ok(niveaux);
    }

    @PostMapping("createNiveau")
    public NiveauDto createNiveau(@RequestBody NiveauDto niveauDTO) {
        return niveauService.create(niveauDTO);
    }

    @PutMapping("updateNiveau/{id}")
    public NiveauDto updateNiveau(@PathVariable Long id, @RequestBody NiveauDto niveauDTO) {
        return niveauService.update(id, niveauDTO);
    }

    @DeleteMapping("deleteNiveau/{id}")
    public void deleteNiveau(@PathVariable Long id) {
        niveauService.delete(id);
    }

}

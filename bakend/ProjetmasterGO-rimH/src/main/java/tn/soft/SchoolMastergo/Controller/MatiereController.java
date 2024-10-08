package tn.soft.SchoolMastergo.Controller;

import io.swagger.v3.oas.annotations.Parameter;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import tn.soft.SchoolMastergo.dto.ClassesDto;
import tn.soft.SchoolMastergo.dto.MatiereDto;
import tn.soft.SchoolMastergo.entites.Niveau;
import tn.soft.SchoolMastergo.repository.NiveauRepository;
import tn.soft.SchoolMastergo.services.MatiereService;

import java.awt.print.Book;
import java.util.List;

@RestController
@RequestMapping("/api/v1/matieres")
@RequiredArgsConstructor
public class MatiereController {


    private final MatiereService matiereService;

    @GetMapping
    public List<MatiereDto> findAllMatieres() {
        return matiereService.findAllMatieres();
    }

    @GetMapping("findAllMatieresByNiveau/{niveauId}")
    public List<MatiereDto> findAllMatieresByNiveau(@PathVariable Long niveauId)
    {
        return matiereService.findAllMatieresByNiveau(niveauId);
    }

    @GetMapping("/{id}")
    public MatiereDto findMatiereById(@PathVariable Long id) {
        return matiereService.findMatiereById(id);
    }

    @PostMapping("/addmatiere")
    public MatiereDto saveMatiere(@RequestBody MatiereDto matiereDto, Authentication connectedUser) {

        return matiereService.saveMatiere(matiereDto, connectedUser);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        matiereService.deleteById(id);
    }
    @PutMapping("/modifier")
    public ResponseEntity<MatiereDto> modifierClasses(@RequestBody MatiereDto matiereDto, Authentication connectedUser) {
        MatiereDto update = matiereService.update(matiereDto, connectedUser);
        return ResponseEntity.ok(update);
    }

   /* @PostMapping(value = "/cover/{matiere-id}", consumes = "multipart/form-data")
    public ResponseEntity<?> uploadMatiereCoverPicture(@PathVariable("matiere-id") Long matiereId, @Parameter() @RequestPart("file") MultipartFile file, Authentication connectedUser) {
        matiereService.uploadMatierCoverPicture(file, connectedUser, matiereId);
        return ResponseEntity.accepted().build();
    }*/
}
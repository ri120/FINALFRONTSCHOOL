package tn.soft.SchoolMastergo.services.impl;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import tn.soft.SchoolMastergo.configfile.ImageStorage;
import tn.soft.SchoolMastergo.dto.DevoirDto;
import tn.soft.SchoolMastergo.dto.ListDevoirDto;
import tn.soft.SchoolMastergo.entites.*;
import tn.soft.SchoolMastergo.repository.ClassesRepository;
import tn.soft.SchoolMastergo.repository.DevoirRepository;
import tn.soft.SchoolMastergo.repository.MatiereRepository;
import tn.soft.SchoolMastergo.security.repository.ProfesseurRepository;
import tn.soft.SchoolMastergo.services.DevoirService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DevoirServiceImpl implements DevoirService {
    private final DevoirRepository devoirRepository;
    private final ProfesseurRepository professeurRepository;
    private final ClassesRepository classesRepository;
    private final MatiereRepository matiereRepository;
    private final ImageStorage imageStorage;

    @Override
    public List<DevoirDto> findAllDevoirs() {
        return devoirRepository.findAll().stream()
                .map(DevoirDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public DevoirDto findDevoirById(Long id) {
        Optional<Devoir> optionalDevoir = devoirRepository.findById(id);
        optionalDevoir.orElseThrow(() -> new RuntimeException("Devoir not found with id: " + id));
        return DevoirDto.fromEntity(optionalDevoir.get());
    }

    @Override
    public DevoirDto createDevoir(DevoirDto devoirDto, Authentication connectedUser) {
        Professeur professeur = ((Professeur) connectedUser.getPrincipal());
       System.err.println(professeur.getId());
        Matiere matiere = matiereRepository.findById(devoirDto.getMatiereId())
                .orElseThrow(() -> new EntityNotFoundException("No Matiere found with ID:: " + devoirDto.getMatiereId()));

        List<Classes> classes= new ArrayList<>();
        if (devoirDto.getClassesId().isEmpty()) {
            throw new IllegalArgumentException("you need atleast on classes");
        } else {
            for (Long classeId : devoirDto.getClassesId()) {
                Optional<Classes> classes1 = classesRepository.findById(classeId);
                classes1.ifPresent(classes::add);
            }
        }
        Devoir devoir = DevoirDto.toEntity(devoirDto);
        devoir.setClasses(classes);
        devoir.setMatiere(matiere);
        devoir.setProfesseur(professeur);
        return DevoirDto.fromEntity(devoirRepository.save(devoir));
    }

    @Override
    public void deleteDevoirById(Long devoirId) {
        devoirRepository.deleteById(devoirId);
    }
    public ResponseEntity<Devoir> findbyId(Long id) {
        if (id == null) {
            //  log.error("student ID is null");
            return null;
        }
        return ResponseEntity.ok(devoirRepository.findById(id).get());

    }
    @Override
    public DevoirDto uploaddevoirfile(Long idDevoir, MultipartFile image) {
        ResponseEntity<Devoir> devoirResponse = this.findbyId(idDevoir);
        String imageName=imageStorage.store(image);
        String fileImageDownloadUrl= ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/v1/devoirs/downloaddevoirFile/").path(imageName).toUriString();
        Devoir devoir = devoirResponse.getBody();

        if (devoir!=null)
            devoir.setTache(fileImageDownloadUrl);
        Devoir devoirsaved = devoirRepository.save(devoir);
        return  DevoirDto.fromEntity(devoirsaved);
    }

    @Override
    public List<ListDevoirDto> findAllDevoirsByProf(Authentication connectedUser) {
        Professeur professeur = ((Professeur) connectedUser.getPrincipal());
        return devoirRepository.listDevoirByProfesseur(professeur.getId()).stream()
                .map(ListDevoirDto::fromEntity)
                .collect(Collectors.toList());
    }
    @Override
    public List<ListDevoirDto> findAllDevoirsByclasseAndmatiere(Long classId, Long matiereId) {

        return devoirRepository.findByClasses_IdAndMatiere_IdMatiere(classId,matiereId).stream()
                .map(ListDevoirDto::fromEntity)
                .collect(Collectors.toList());
    }

}









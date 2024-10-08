package tn.soft.SchoolMastergo.Controller;

import lombok.RequiredArgsConstructor;

import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import jakarta.servlet.http.HttpServletRequest;
import tn.soft.SchoolMastergo.configfile.ImageStorage;
import tn.soft.SchoolMastergo.dto.CoursDto;
import tn.soft.SchoolMastergo.dto.OffreDto;
import tn.soft.SchoolMastergo.services.OffreService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/offres")
@RequiredArgsConstructor
public class OffreController {


    private final OffreService offreService;
    private final ImageStorage imageStorage;

    @PostMapping
    public OffreDto saveOffre(@RequestBody OffreDto offreDto, Authentication connectedUser) {
        return offreService.saveOffre(offreDto, connectedUser);
    }

    @GetMapping
    public List<OffreDto> findAll() {
        return offreService.findAll();
    }

    @GetMapping("/findbyid/{id}")
    public OffreDto findById(@PathVariable("id") Long id) {
        return offreService.findById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteOffreById(@PathVariable Long id) {
        offreService.deleteSeanceById(id);
    }
    @PostMapping("/uploadFile/{IdoffreDto}")
   	public OffreDto uploadImageCoursDto(@PathVariable("IdoffreDto") Long IdoffreDto, @RequestParam MultipartFile image) {
   		return offreService.uploadoffreImg(IdoffreDto, image);
   	}
   	
   	@GetMapping("/downloadimgoffre/{imageName}")
   	public ResponseEntity<Resource> downloadTeacherImage(@PathVariable String imageName, HttpServletRequest request) {
   		return this.imageStorage.downloadUserImage(imageName, request);
   	}
}

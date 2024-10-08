package tn.soft.SchoolMastergo.Controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tn.soft.SchoolMastergo.configfile.ImageStorage;
import tn.soft.SchoolMastergo.dto.DevoirDto;
import tn.soft.SchoolMastergo.dto.ListDevoirDto;
import tn.soft.SchoolMastergo.services.DevoirService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/devoirs")
@RequiredArgsConstructor
public class DevoirController {
    private final ImageStorage imageStorage;


    private final DevoirService devoirService;

    @GetMapping
    public List<DevoirDto> findAllDevoirs() {
        return devoirService.findAllDevoirs();
    }

    @GetMapping("/{id}")
    public DevoirDto findDevoirById(@PathVariable Long id) {
        return devoirService.findDevoirById(id);
    }

    @PostMapping("/save")
    public DevoirDto createDevoir(@RequestBody DevoirDto devoirDto, Authentication connectedUser) {
        return devoirService.createDevoir(devoirDto,connectedUser);
    }

    @DeleteMapping("/{id}")
    public void deleteDevoirById(@PathVariable Long id) {
        devoirService.deleteDevoirById(id);
    }

    @PostMapping("/uploadFile/{IdDevoirDto}")
    public DevoirDto uploadImageDevoirDto(@PathVariable("IdDevoirDto") Long IdDevoirDto, @RequestParam MultipartFile image) {
        return devoirService.uploaddevoirfile(IdDevoirDto, image);
    }

    @GetMapping("/downloaddevoirFile/{imageName}")
    public ResponseEntity<Resource> downloadTeacherImage(@PathVariable String imageName, HttpServletRequest request) {
        return this.imageStorage.downloadUserImage(imageName, request);
    }
    @GetMapping("/listerDevoirByProf")
    public List<ListDevoirDto> findAllDevoirsByProf(Authentication connectedUser) {
        return devoirService.findAllDevoirsByProf(connectedUser);
    }
    @GetMapping("/listalldevoirbyclassandmatiere/{idclasse}/{idmatiere}")
    public List<ListDevoirDto> listeleveByClasse (@PathVariable("idclasse") Long idclasse , @PathVariable("idmatiere") Long idmatiere) {
        // TODO Auto-generated method stub
        return devoirService.findAllDevoirsByclasseAndmatiere(idclasse, idmatiere);
    }


}


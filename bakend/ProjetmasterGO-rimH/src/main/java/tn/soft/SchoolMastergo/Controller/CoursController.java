package tn.soft.SchoolMastergo.Controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tn.soft.SchoolMastergo.configfile.ImageStorage;
import tn.soft.SchoolMastergo.dto.CoursDto;
import tn.soft.SchoolMastergo.dto.ListCour;
import tn.soft.SchoolMastergo.services.CoursService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/cours")
@RequiredArgsConstructor
public class CoursController {


    private final CoursService coursService;
    private final ImageStorage imageStorage;


    @GetMapping("/all")
    public List<CoursDto> findAllCours() {
        return coursService.findAllCours();
    }

    @GetMapping("/{id}")
    public CoursDto findCourById(@PathVariable Long id) {
        return coursService.findCourById(id);
    }

    @PostMapping("/create")
    public CoursDto createCours(@RequestBody CoursDto coursDto, Authentication connectedUser) {
        return coursService.createCours(coursDto, connectedUser);
    }

    @DeleteMapping("/{id}")
    public void deleteCourById(@PathVariable Long id) {
        coursService.deleteCourById(id);
    }
    @PostMapping("/uploadFile/{IdCoursDto}")
	public CoursDto uploadImageCoursDto(@PathVariable("IdCoursDto") Long IdCoursDto, @RequestParam MultipartFile image) {
		return coursService.uploadcoursfile(IdCoursDto, image);
	}
	
	@GetMapping("/downloadcoursFile/{imageName}")
	public ResponseEntity<Resource> downloadTeacherImage(@PathVariable String imageName, HttpServletRequest request) {
		return this.imageStorage.downloadUserImage(imageName, request);
	}
    @GetMapping("/listallcoursbyclassandmatiere/{idclasse}/{idmatiere}")
    public List<ListCour> listecourByClasse (@PathVariable("idclasse") Long idclasse , @PathVariable("idmatiere") Long idmatiere) {
        // TODO Auto-generated method stub
        return coursService.findAllCoursByclasseAndmatiere(idclasse, idmatiere);
    }

}

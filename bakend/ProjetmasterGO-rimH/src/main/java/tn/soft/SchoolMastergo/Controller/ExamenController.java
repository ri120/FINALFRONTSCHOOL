package tn.soft.SchoolMastergo.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import tn.soft.SchoolMastergo.dto.ExamenDto;
import tn.soft.SchoolMastergo.dto.ListExamenDto;
import tn.soft.SchoolMastergo.services.ExamenService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/examens")
@RequiredArgsConstructor
public class ExamenController {


    private final ExamenService examenService;

    @GetMapping("/all")
    public List<ListExamenDto> findAllExamen()  {
        return examenService.findAllExamen();
    }

    @GetMapping("/{id}")
    public ExamenDto findExamenById(@PathVariable Long id) {
        return examenService.findExamenById(id);
    }

    @PostMapping
    public ExamenDto createExamen(@RequestBody ExamenDto examenDto , Authentication connectedUser) {
        return examenService.createExamen(examenDto,connectedUser);
    }

    @DeleteMapping("/{id}")
    public void deleteExamenById(@PathVariable Long id) {
        examenService.deleteExamenById(id);
    }
    //@GetMapping("/listerallclasses")
    //public List<Labelvalueclasse> listeStagiairDto() {
        // TODO Auto-generated method stub
      //  return classesService.listeclasse();
    //}

    @GetMapping("/listallexambyclassandmatiere/{idclasse}/{idmatiere}")
    public List<ListExamenDto> listexamenByClasseAndmatiere (@PathVariable("idclasse") Long idclasse , @PathVariable("idmatiere") Long idmatiere) {
        // TODO Auto-generated method stub
        return examenService.findAllExamensByclasseAndmatiere(idclasse, idmatiere);
    }
}

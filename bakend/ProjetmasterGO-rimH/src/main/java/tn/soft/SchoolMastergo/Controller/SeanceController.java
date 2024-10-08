package tn.soft.SchoolMastergo.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import tn.soft.SchoolMastergo.dto.Labelvalue;
import tn.soft.SchoolMastergo.dto.Listenptemps;
import tn.soft.SchoolMastergo.dto.Listeprof;
import tn.soft.SchoolMastergo.dto.EmpTempsDto;
import tn.soft.SchoolMastergo.services.SeanceService;


import java.util.List;

@RestController
@RequestMapping("/api/v1/seances")
@RequiredArgsConstructor
public class SeanceController {


    private final SeanceService seanceService;

    @PostMapping("/save")
    public EmpTempsDto saveSeance(@RequestBody EmpTempsDto seanceDto) {
        return seanceService.saveSeance(seanceDto);
    }

    @GetMapping("/lister")
    public List<EmpTempsDto> findAll() {
        return seanceService.findAll();
    }

    @GetMapping("/emptempslist")
    public List<Listenptemps> findAllEmptemps() {
        return seanceService.findAllEmp();
    }

    @GetMapping("/findById/{id}")
    public EmpTempsDto findById(@PathVariable("id") Long id) {
        return seanceService.findById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteSeanceById(@PathVariable("id") Long id) {
        seanceService.deleteSeanceById(id);
    }
    @GetMapping("/listerprof")
    public List<Listeprof> findAllprof() {
        return seanceService.findAllprof();
        
    }
    @GetMapping("/listerallslot")
    public List<Labelvalue> listeStagiairDto() {
    	// TODO Auto-generated method stub
    	return seanceService.listeslot();
    }
}

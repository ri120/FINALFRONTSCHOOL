package tn.soft.SchoolMastergo.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import tn.soft.SchoolMastergo.dto.AbsenceDto;
import tn.soft.SchoolMastergo.dto.ListAbsenceDto;
import tn.soft.SchoolMastergo.services.AbsenceService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/absences")
@RequiredArgsConstructor
public class AbsenceController {


    private final AbsenceService absenceService;

    @GetMapping("/lister")
    public List<AbsenceDto> findAllAbsence() {
        return absenceService.findAllAbsence();
    }

    @GetMapping("/getbyid/{id}")
    public AbsenceDto findAbsenceById(@PathVariable Long id) {
        return absenceService.findAbsenceById(id);
    }

    @PostMapping("/save")
    public AbsenceDto createAbsence(@RequestBody AbsenceDto absenceDto , Authentication connectedUser) {
        return absenceService.createAbsence(absenceDto,connectedUser);
    }

    @DeleteMapping("/{id}")
    public void deleteAbsenceById(@PathVariable Long id) {
        absenceService.deleteAbsenceById(id);
    }
    @GetMapping("/getbyByEleve/{id}")
	public List<ListAbsenceDto> findAllListAbsenceByEleve(@PathVariable Long id) {
		return absenceService.findAllListAbsenceByEleve(id);
	}
    
}

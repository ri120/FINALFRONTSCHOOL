package tn.soft.SchoolMastergo.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import tn.soft.SchoolMastergo.dto.SlotEpmloisTempsDto;
import tn.soft.SchoolMastergo.dto.emploiEleve.EmpTempsDto;
import tn.soft.SchoolMastergo.services.EmploiTempsService;
import tn.soft.SchoolMastergo.services.SlotEpmloisTempsService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/slot-emplois-temps")
@RequiredArgsConstructor
public class SlotEpmloisTempsController {


    private final SlotEpmloisTempsService slotEpmloisTempsService;
    private final EmploiTempsService emploiTempsService;

    @GetMapping("/lister")
    public List<SlotEpmloisTempsDto> findAll() {
        return slotEpmloisTempsService.findAll();
    }

    @GetMapping("/findById/{id}")
    public SlotEpmloisTempsDto findById(@PathVariable Long id) {
        return slotEpmloisTempsService.findById(id);
    }

    @PostMapping("/save")
    public SlotEpmloisTempsDto save(@RequestBody SlotEpmloisTempsDto slotEmploisTempsDto) {
        return slotEpmloisTempsService.save(slotEmploisTempsDto);
    }
    @PutMapping("/modifier")
    public ResponseEntity<SlotEpmloisTempsDto> modifierClasses(@RequestBody SlotEpmloisTempsDto classesDto, Authentication connectedUser) {
    	SlotEpmloisTempsDto savedClasses = slotEpmloisTempsService.update(classesDto, connectedUser);
        return ResponseEntity.ok(savedClasses);
    }
    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable Long id) {
        slotEpmloisTempsService.deleteById(id);
    }

    @GetMapping("/findByIdClasse/{classId}")
    List<EmpTempsDto> getEmpTempsByClasseId(@PathVariable("classId") Long classeId) {
       List<EmpTempsDto> empTempsDto = emploiTempsService.getEmpTempsByClasseId(classeId);
        return empTempsDto;

    }





}

package tn.soft.SchoolMastergo.services;


import org.springframework.security.core.Authentication;
import tn.soft.SchoolMastergo.dto.SlotEpmloisTempsDto;

import java.util.List;

public interface SlotEpmloisTempsService {
    List<SlotEpmloisTempsDto> findAll();
    SlotEpmloisTempsDto findById(Long id);
    SlotEpmloisTempsDto save(SlotEpmloisTempsDto slotEmploisTempsDto);
    void deleteById(Long id);
    SlotEpmloisTempsDto update(SlotEpmloisTempsDto slotEmploisTempsDto, Authentication connectedUser);



}

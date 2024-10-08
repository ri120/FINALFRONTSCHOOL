package tn.soft.SchoolMastergo.services.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import tn.soft.SchoolMastergo.dto.SlotEpmloisTempsDto;
import tn.soft.SchoolMastergo.entites.SlotEpmloisTemps;
import tn.soft.SchoolMastergo.repository.SlotEpmloisTempsRepository;
import tn.soft.SchoolMastergo.services.SlotEpmloisTempsService;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SlotEpmloisTempsServiceImpl implements SlotEpmloisTempsService {

    private final SlotEpmloisTempsRepository slotEpmloisTempsRepository;

    @Override
    public List<SlotEpmloisTempsDto> findAll() {
        return slotEpmloisTempsRepository.findAll().stream()
                .map(SlotEpmloisTempsDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public SlotEpmloisTempsDto findById(Long id) {
        SlotEpmloisTemps slotEpmloisTemps = slotEpmloisTempsRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("SlotEpmloisTemps not found with id: " + id));
        return SlotEpmloisTempsDto.fromEntity(slotEpmloisTemps);
    }

    @Override
    public SlotEpmloisTempsDto save(SlotEpmloisTempsDto slotEmploisTempsDto) {
        SlotEpmloisTemps slotEpmloisTemps = SlotEpmloisTempsDto.toEntity(slotEmploisTempsDto);
        SlotEpmloisTemps savedSlotEpmloisTemps = slotEpmloisTempsRepository.save(slotEpmloisTemps);
        return SlotEpmloisTempsDto.fromEntity(savedSlotEpmloisTemps);
    }

    @Override
    public SlotEpmloisTempsDto update(SlotEpmloisTempsDto slotEmploisTempsDto, Authentication connectedUser) {
        SlotEpmloisTemps slotEpmloisTemps = slotEpmloisTempsRepository.findById(slotEmploisTempsDto.getId())
                .orElseThrow(() -> new RuntimeException("SlotEpmloisTemps not found with id: " + slotEmploisTempsDto.getId()));

        // Optionally, you can check if the user has permission to update this slot

        slotEpmloisTemps.setTimestart(slotEmploisTempsDto.getTimestart());
        slotEpmloisTemps.setTimeend(slotEmploisTempsDto.getTimeend());
        slotEpmloisTemps.setJour(slotEmploisTempsDto.getJour());
        // Optionally set other fields based on user info

        SlotEpmloisTemps updatedSlotEpmloisTemps = slotEpmloisTempsRepository.save(slotEpmloisTemps);
        return SlotEpmloisTempsDto.fromEntity(updatedSlotEpmloisTemps);
    }

    @Override
    public void deleteById(Long id) {
        slotEpmloisTempsRepository.deleteById(id);
    }



}



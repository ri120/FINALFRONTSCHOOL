package tn.soft.SchoolMastergo.dto.emploiEleve;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;
import tn.soft.SchoolMastergo.dto.ClassesDto;
import tn.soft.SchoolMastergo.dto.MatiereDto;
import tn.soft.SchoolMastergo.dto.Professeurdto;
import tn.soft.SchoolMastergo.dto.SlotEpmloisTempsDto;
import tn.soft.SchoolMastergo.entites.EmpTemps;

import java.util.List;
import java.util.stream.Collectors;


    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @SuperBuilder
    public class EmpTempsDto {
        private Long id;
        private String salle;
        private String anneescolair;
        private MatiereDto matiere;
        private Professeurdto professeur;
        private ClassesDto classes;
        private List<SlotEpmloisTempsDto> emploisTemps;


        public static EmpTempsDto fromEntity(EmpTemps empTemps) {
            return EmpTempsDto.builder()
                    .id(empTemps.getId())
                    .salle(empTemps.getSalle())
                    .anneescolair(empTemps.getAnneescolair())
                    .matiere(MatiereDto.fromEntity(empTemps.getMatiere()))
                    .professeur(Professeurdto.fromEntity(empTemps.getProfesseur()))
                    .classes(ClassesDto.fromEntity(empTemps.getClasses()))
                    .emploisTemps(empTemps.getEmploisTemps().stream()
                            .map(SlotEpmloisTempsDto::fromEntity)
                            .collect(Collectors.toList()))

                    .build();
        }

        // Conversion de EmpTempsDto à l'entité EmpTemps
        public static EmpTemps toEntity(EmpTempsDto empTempsDto) {
            EmpTemps empTemps = new EmpTemps();
            empTemps.setId(empTempsDto.getId());
            empTemps.setSalle(empTempsDto.getSalle());
            empTemps.setAnneescolair(empTempsDto.getAnneescolair());
            empTemps.setMatiere(MatiereDto.toEntity(empTempsDto.getMatiere()));
            empTemps.setProfesseur(Professeurdto.toEntity(empTempsDto.getProfesseur()));
            empTemps.setClasses(ClassesDto.toEntity(empTempsDto.getClasses()));
            empTemps.setEmploisTemps(empTempsDto.getEmploisTemps().stream()
                    .map(SlotEpmloisTempsDto::toEntity)
                    .collect(Collectors.toList()));


            return empTemps;
        }
    }




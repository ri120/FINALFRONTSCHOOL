package tn.soft.SchoolMastergo.dto;


import lombok.*;
import tn.soft.SchoolMastergo.entites.EmpTemps;
import tn.soft.SchoolMastergo.entites.Matiere;
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Listenptemps {
    private Long id;
    private String salle;
    private String anneescolair;
    private Listeprof prof;
    private MatiereDto matiere;
    private ClassesDto clasee;
    public static Listenptemps fromEntity(EmpTemps request)
    {
        return Listenptemps.builder()
                .id(request.getId())
                .salle(request.getSalle())
                .anneescolair(request.getAnneescolair())
                .prof(Listeprof.fromEntity(request.getProfesseur()))
                .matiere(MatiereDto.fromEntity(request.getMatiere()))
                .clasee(ClassesDto.fromEntity(request.getClasses()))
                .build();

    }
}

package tn.soft.SchoolMastergo.entites;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Absence {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Date date;
    private String matiere;
   
    @ManyToOne(fetch = FetchType.LAZY)
    private Eleve eleve;

    @ManyToMany(fetch = FetchType.LAZY)
    private List<SlotEpmloisTemps> seances;

    @ManyToOne(fetch = FetchType.LAZY)
    private Professeur professeur;



}

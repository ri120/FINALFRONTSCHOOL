package tn.soft.SchoolMastergo.entites;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EmpTemps {
	@Id
	@GeneratedValue(strategy =GenerationType.AUTO )

	private Long id;
	private String salle;
	private String anneescolair;
	@ManyToOne(fetch = FetchType.LAZY)
	private Matiere matiere;
	@ManyToOne(fetch = FetchType.LAZY)
	private Professeur professeur; 
	@ManyToOne(fetch = FetchType.LAZY)
	private Classes classes;

	@ManyToMany(fetch = FetchType.LAZY)
	private List<SlotEpmloisTemps> emploisTemps;
	//mappedBy = "emploisTemps"
//	@ManyToMany(mappedBy = "seances",fetch = FetchType.LAZY)
//	private List<Absence> absences;

}

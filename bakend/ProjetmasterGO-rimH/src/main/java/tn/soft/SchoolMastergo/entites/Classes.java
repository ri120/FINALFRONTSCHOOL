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
public class Classes {
	@Id
	@GeneratedValue(strategy =GenerationType.AUTO )
	private Long id;
	private String titre;
	private String annescolair;
	@OneToMany(fetch = FetchType.LAZY,mappedBy = "classes")
	private List<Eleve> eleves;
	@OneToMany(fetch = FetchType.LAZY , mappedBy = "classes")
	private List<EmpTemps> emploidetemps;
	@ManyToMany(fetch = FetchType.LAZY)
	private List<Devoir> devoirs;
	@ManyToMany(fetch = FetchType.LAZY)
	private List<Cours> cours;
	@ManyToMany(fetch = FetchType.LAZY)
	private List<Examen> examens;
	@ManyToOne(fetch = FetchType.LAZY)
	private Agentadministratif agentadministratif;
}

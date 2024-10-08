package tn.soft.SchoolMastergo.entites;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
public class Matiere {
	@Id
	@GeneratedValue(strategy =GenerationType.AUTO )
	private Long idMatiere;
	private String nomMatiere;
	private String coeficient;
	 private String cover;
	private Integer duree;
	@OneToMany(fetch = FetchType.LAZY)
	private List<EmpTemps> seancs;
	@ManyToMany(fetch = FetchType.LAZY)
	private List<Examen> examen;
	@ManyToMany(fetch = FetchType.LAZY)
	private List<Professeur> professeur; 
	@OneToMany(fetch = FetchType.LAZY)
	private List<Devoir> devoirs;
	@ManyToOne()
	@JoinColumn(name = "niveau_id")
	private Niveau niveau;
	@ManyToOne(fetch = FetchType.LAZY)
	private Agentadministratif agentadministratif;
	@OneToMany(fetch = FetchType.LAZY)
	private List<Cours> cours;

}

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
public class Cours {
	@Id
	@GeneratedValue(strategy =GenerationType.AUTO )
	private Long id;
	private String titre;
	private String urlcours;
	private String filecours;
	@ManyToOne(fetch = FetchType.LAZY)
	private Professeur professeur; 
	@ManyToMany(fetch = FetchType.LAZY)
	private List<Classes> classes;
	@ManyToOne(fetch = FetchType.LAZY)
	private Matiere matiere;
}




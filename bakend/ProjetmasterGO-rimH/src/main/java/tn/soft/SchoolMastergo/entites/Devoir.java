package tn.soft.SchoolMastergo.entites;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

import java.util.Date;
import java.util.List;
@Entity
@Getter()
@Setter
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
public class Devoir {
	@Id
	@GeneratedValue(strategy =GenerationType.AUTO )
    private Long idDevoir;
	private String tache;
	private Date dateDevoir;
	private boolean valide;
	private String titre;
	@ManyToMany(fetch = FetchType.LAZY)
	private List<Classes> classes;
	@ManyToOne(fetch = FetchType.LAZY)
	private Matiere matiere;
	@ManyToOne(fetch = FetchType.LAZY)
	private Professeur professeur;

}

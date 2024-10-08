package tn.soft.SchoolMastergo.entites;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;
import tn.soft.SchoolMastergo.security.models.User;
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
public class Examen {
	@Id
	@GeneratedValue(strategy =GenerationType.AUTO )
    private Long idExamen;
	private String numExamen;
	private Date date;
	private String duree;
	@ManyToMany(fetch = FetchType.LAZY)
	private List<Classes> classes;
	@ManyToOne(fetch = FetchType.LAZY)
	private Professeur professeur;
	@ManyToOne(fetch = FetchType.LAZY)
	private Matiere matiere;
	@OneToMany(mappedBy = "examen", fetch = FetchType.LAZY)
	private List<Note> notes;
	
}

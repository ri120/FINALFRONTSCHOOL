package tn.soft.SchoolMastergo.entites;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;
import tn.soft.SchoolMastergo.security.models.User;


import java.time.LocalDate;
import java.util.List;
@Entity
@Getter()
@Setter()
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@DiscriminatorValue("eleve")
public class Eleve extends User {

	@JsonFormat(pattern="yyyy-MM-dd")
	private LocalDate dob;
	@Enumerated(EnumType.STRING)


	private NiveauScolaire  niveauScolaire;
	private String typePaiement;
	private String statutPaiement;
	private String statutAffectation;
	@OneToMany(mappedBy = "eleve", fetch = FetchType.LAZY)
	private List<Note> notes;
	@ManyToOne(fetch = FetchType.LAZY)
	private Parent parent;
	@OneToMany(fetch = FetchType.LAZY)
	private List<Absence> absences;
	@OneToOne(mappedBy = "eleve")
	private Reglement reglement;
	@ManyToOne(fetch = FetchType.LAZY)
	private Classes classes;

}

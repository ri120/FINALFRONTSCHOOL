package tn.soft.SchoolMastergo.entites;

import java.util.Date;
import java.util.List;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;
import tn.soft.SchoolMastergo.dto.Professeurdto;
import tn.soft.SchoolMastergo.security.auth.RegisterRequest;
import tn.soft.SchoolMastergo.security.models.User;
@Entity
@Getter
@Setter
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@DiscriminatorValue("professeur")
public class Professeur extends User  {
	private String cin;
	private String diplome;
	private Date dateDebutTravail;
	@ManyToMany(fetch = FetchType.LAZY)
	private List<Matiere> matieres ;
}

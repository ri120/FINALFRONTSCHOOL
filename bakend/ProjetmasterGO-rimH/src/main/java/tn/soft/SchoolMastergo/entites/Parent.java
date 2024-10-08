package tn.soft.SchoolMastergo.entites;

import java.util.List;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
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
@DiscriminatorValue("parent")

public class Parent extends User {

private String description;
@OneToMany(mappedBy = "parent", fetch = FetchType.LAZY)
private List<Eleve> eleves;
@OneToMany(mappedBy = "parent", fetch = FetchType.LAZY)
private List<Reglement> reglements;
}

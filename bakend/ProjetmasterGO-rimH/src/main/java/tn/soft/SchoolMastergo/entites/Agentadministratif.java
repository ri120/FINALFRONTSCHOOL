package tn.soft.SchoolMastergo.entites;

import java.util.Date;
import java.util.List;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;
import tn.soft.SchoolMastergo.security.models.User;

@Entity
@Getter()
@Setter
@NoArgsConstructor
@AllArgsConstructor

@SuperBuilder
@DiscriminatorValue("agentadm")
public class Agentadministratif extends User  {

	
    private Date datederecrutement;
    @OneToMany(fetch = FetchType.LAZY)
    private List<Classes> classes;
    @OneToMany(fetch = FetchType.LAZY)
    private List<EmpTemps> seances;
    @OneToMany(fetch = FetchType.LAZY)
    private List<SlotEpmloisTemps> epmloisTemps;
    @OneToMany(fetch = FetchType.LAZY)
    private List<Offre> offres;
}

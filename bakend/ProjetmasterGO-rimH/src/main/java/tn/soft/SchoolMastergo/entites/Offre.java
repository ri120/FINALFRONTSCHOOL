package tn.soft.SchoolMastergo.entites;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
public class Offre {
	@Id
	@GeneratedValue(strategy =GenerationType.AUTO )
    private Long id;
	private String titre;
	private String nbrheuroffre;
	private Date finoffr;
	private String offreimg;
	@ManyToOne(fetch = FetchType.LAZY)
	private Agentadministratif agentadministratif;

}

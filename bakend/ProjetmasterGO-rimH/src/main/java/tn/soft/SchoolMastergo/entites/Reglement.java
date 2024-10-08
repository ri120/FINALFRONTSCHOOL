package tn.soft.SchoolMastergo.entites;

import java.util.Date;
import java.util.List;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Reglement {
	@Id
	@GeneratedValue(strategy =GenerationType.AUTO )
    private Long id;
	private String modepaiement;
	private Date operation;
	private Double montant;
	@ManyToOne()
	private Parent parent;
	@OneToOne()
	private Eleve eleve;
}

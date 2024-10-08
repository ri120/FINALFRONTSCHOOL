package tn.soft.SchoolMastergo.entites;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SlotEpmloisTemps {
	@Id
	@GeneratedValue(strategy =GenerationType.AUTO )
	private Long id;
	private String timestart;
	private String timeend;
	private String jour;
	private String anneescolair;

	@ManyToMany(mappedBy = "emploisTemps",fetch = FetchType.LAZY)
	private List<EmpTemps> seances;

}

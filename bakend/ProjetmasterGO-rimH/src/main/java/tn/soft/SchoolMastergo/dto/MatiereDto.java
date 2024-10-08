package tn.soft.SchoolMastergo.dto;

import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.soft.SchoolMastergo.entites.*;
import tn.soft.SchoolMastergo.file.FileUtils;

import java.util.List;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MatiereDto {
	private Long idMatiere;
	private String nomMatiere;
	private String coeficient;
	 private String cover;
	private Integer duree;
    private Long niveauId;
    private List<Long> seancsIds;
    private List<Long> examenIds;
    private List<Long> professeurIds;
    private List<Long> devoirsIds;

    public static Matiere toEntity(MatiereDto request)
    {
        return Matiere.builder()
                .idMatiere(request.getIdMatiere())
                .nomMatiere(request.getNomMatiere())
                .coeficient(request.getCoeficient())
                .cover(request.getCover())
                .duree(request.getDuree())
                .build();

    }
    public static MatiereDto fromEntity(Matiere request)
    {
        return MatiereDto.builder()
                .idMatiere(request.getIdMatiere())
                .nomMatiere(request.getNomMatiere())
                .coeficient(request.getCoeficient())
                .duree(request.getDuree())
                .cover(request.getCover())
                .build();

    }
}

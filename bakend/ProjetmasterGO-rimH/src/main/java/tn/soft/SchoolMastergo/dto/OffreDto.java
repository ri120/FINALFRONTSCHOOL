package tn.soft.SchoolMastergo.dto;

import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToOne;
import lombok.Builder;
import lombok.Data;
import tn.soft.SchoolMastergo.entites.Agentadministratif;
import tn.soft.SchoolMastergo.entites.Note;
import tn.soft.SchoolMastergo.entites.Offre;

import java.util.Date;

@Builder
@Data
public class OffreDto {
    private Long id;
    private String titre;
    private String nbrheuroffre;
    private Date finoffr;
    private Long agentadministratif;
    private String offreimg;

    public static Offre toEntity(OffreDto request)
    {
        return Offre.builder()
                .id(request.getId())
                .nbrheuroffre(request.getNbrheuroffre())
                .finoffr(request.getFinoffr())
                .titre(request.getTitre())
                .offreimg(request.getOffreimg())
                .build();

    }
    public static OffreDto fromEntity(Offre request)
    {
        return OffreDto.builder()
                .id(request.getId())
                .nbrheuroffre(request.getNbrheuroffre())
                .finoffr(request.getFinoffr())
                .titre(request.getTitre())
                .offreimg(request.getOffreimg())
                .build();

    }
}

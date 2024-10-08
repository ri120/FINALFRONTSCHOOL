package tn.soft.SchoolMastergo.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;
import tn.soft.SchoolMastergo.entites.Eleve;
import tn.soft.SchoolMastergo.entites.NiveauScolaire;
import tn.soft.SchoolMastergo.security.auth.RegisterRequest;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
public class Elevedto extends RegisterRequest {
	@JsonFormat(pattern="yyyy-MM-dd")
	private LocalDate dob;
	private String typePaiement;
	private  NiveauScolaire niveauScolaire;
	private String statutPaiement;
	private String statutAffectation;
	public static Eleve toEntity(Elevedto request)
	{
		return Eleve.builder()
				.id(request.getId())
				.firstName(request.getFirstName())
				.lastName(request.getLastName())
				.email(request.getEmail())
				.password(request.getPassword())
				.dob(request.getDob())
				.adress(request.getAdress())
				.phone(request.getPhone())
				.typePaiement(request.getTypePaiement())
				.niveauScolaire(request.getNiveauScolaire())
				.statutPaiement(request.getStatutPaiement())
				.statutAffectation(request.getStatutAffectation())
				.build();

	}
	public static Elevedto fromEntity(Eleve request)
	{
		return Elevedto.builder()
				.id(request.getId())
				.firstName(request.getFirstName())
				.lastName(request.getLastName())
				.email(request.getEmail())
				.password(request.getPassword())
				.dob(request.getDob())
				.adress(request.getAdress())
				.phone(request.getPhone())
				.typePaiement(request.getTypePaiement())
				.niveauScolaire(request.getNiveauScolaire())
				.statutPaiement(request.getStatutPaiement())
				.statutAffectation(request.getStatutAffectation())
				.build();

	}




}

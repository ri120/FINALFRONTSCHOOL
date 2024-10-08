package tn.soft.SchoolMastergo.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;
import tn.soft.SchoolMastergo.entites.Professeur;
import tn.soft.SchoolMastergo.security.auth.RegisterRequest;
@Getter()
@Setter
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder

public class Professeurdto extends RegisterRequest {
	private String cin;
	private String diplome;
	private Date dateDebutTravail;
	 public static Professeur toEntity(Professeurdto request)
	    {
	        return Professeur.builder()
	                .id(request.getId())
	                .firstName(request.getFirstName())
	                .lastName(request.getLastName())
	                .email(request.getEmail())
	                .password(request.getPassword())
	                .adress(request.getAdress())
	                .phone(request.getPhone())
	                .cin(request.getCin())
	                .diplome(request.getDiplome())
	                .dateDebutTravail(request.getDateDebutTravail())
	                .build();
	    }
	 public static Professeurdto fromEntity(Professeur request)
	    {
	        return Professeurdto.builder()
	                .id(request.getId())
	                .firstName(request.getFirstName())
	                .lastName(request.getLastName())
	                .email(request.getEmail())
	                .adress(request.getAdress())
	                .phone(request.getPhone())
	                .cin(request.getCin())
	                .diplome(request.getDiplome())
	                .dateDebutTravail(request.getDateDebutTravail())
	                .build();
	    }
	 

}

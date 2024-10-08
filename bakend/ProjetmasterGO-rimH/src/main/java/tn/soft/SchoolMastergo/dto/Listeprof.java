package tn.soft.SchoolMastergo.dto;


import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.soft.SchoolMastergo.entites.Eleve;
import tn.soft.SchoolMastergo.entites.Professeur;
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Listeprof {
	 private Long id;
	   private String firstName;
	   private String lastName;
	   private String email;
	   private String phone;
	   public static Professeur toEntity(Listeprof request)
	    {
	        return Professeur.builder()
	                .id(request.getId())
	                .firstName(request.getFirstName())
	                .lastName(request.getLastName())
	                .phone(request.getPhone())
	                .email(request.getEmail())       
	                .build();
	    }
	 public static Listeprof fromEntity(Professeur request)
	    {
	        return Listeprof.builder()
	                .id(request.getId())
	                .firstName(request.getFirstName())
	                .lastName(request.getLastName())
	                .phone(request.getPhone())
	                .email(request.getEmail())           
	                .build();

	    }
}

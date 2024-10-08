package tn.soft.SchoolMastergo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;
import tn.soft.SchoolMastergo.entites.Eleve;
import tn.soft.SchoolMastergo.security.auth.RegisterRequest;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Modprofilelevedto {
	private Long id;
	private String firstName;
	private String lastName;
	private String email;
	private String adress;
	private String phone;
	 public static Eleve toEntity(Modprofilelevedto request)
	    {
	        return Eleve.builder()
	                .id(request.getId())
	                .firstName(request.getFirstName())
	                .lastName(request.getLastName())
	                .email(request.getEmail())
	                .adress(request.getAdress())
	                .phone(request.getPhone())
	                .build();

	    }
	 public static Modprofilelevedto fromEntity(Eleve request)
	    {
	        return Modprofilelevedto.builder()
	                .id(request.getId())
	                .firstName(request.getFirstName())
	                .lastName(request.getLastName())
	                .email(request.getEmail())
	                .adress(request.getAdress())
	                .phone(request.getPhone())               
	                .build();

	    }
	 

}

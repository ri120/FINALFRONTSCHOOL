package tn.soft.SchoolMastergo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tn.soft.SchoolMastergo.entites.Eleve;
import tn.soft.SchoolMastergo.entites.Parent;
import tn.soft.SchoolMastergo.entites.Professeur;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Modprofileparentdto {
	private Long id;
	private String firstName;
	private String lastName;
	private String email;
	private String adress;
	private String phone;
	 public static Parent toEntity(Modprofileparentdto request)
	    {
	        return Parent.builder()
	                .id(request.getId())
	                .firstName(request.getFirstName())
	                .lastName(request.getLastName())
	                .email(request.getEmail())
	                .adress(request.getAdress())
	                .phone(request.getPhone())
	                .build();

	    }
	 public static Modprofileparentdto fromEntity(Parent request)
	    {
	        return Modprofileparentdto.builder()
	                .id(request.getId())
	                .firstName(request.getFirstName())
	                .lastName(request.getLastName())
	                .email(request.getEmail())
	                .adress(request.getAdress())
	                .phone(request.getPhone())               
	                .build();

	    }
	 

}


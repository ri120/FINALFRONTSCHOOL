package tn.soft.SchoolMastergo.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;
import tn.soft.SchoolMastergo.entites.Agentadministratif;
import tn.soft.SchoolMastergo.security.auth.RegisterRequest;



@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder

public class Agentadministratifdto extends RegisterRequest {
	private Date datederecrutement;
    public static Agentadministratif toEntity(Agentadministratifdto request)
    {
        return Agentadministratif.builder()
                .id(request.getId())
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .password(request.getPassword())
                .adress(request.getAdress())
                .phone(request.getPhone())
                .datederecrutement(request.getDatederecrutement())
                .build();
    }
    public static Agentadministratifdto fromEntity(Agentadministratif request)
    {
        return Agentadministratifdto.builder()
                .id(request.getId())
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .password(request.getPassword())
                .adress(request.getAdress())
                .phone(request.getPhone())
                .datederecrutement(request.getDatederecrutement())
                .build();
    }
    
}

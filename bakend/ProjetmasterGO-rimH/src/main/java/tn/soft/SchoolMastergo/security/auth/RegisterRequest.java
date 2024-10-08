package tn.soft.SchoolMastergo.security.auth;

import java.util.Date;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

	private Long id;
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	private String adress;
	private String phone;
	private Set<String> roles;
	/*private String cin;
	private String diplome;
	private Date dateDebutTravail;*/
}

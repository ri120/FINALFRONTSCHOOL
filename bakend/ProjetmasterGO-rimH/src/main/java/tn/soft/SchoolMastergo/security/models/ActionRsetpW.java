package tn.soft.SchoolMastergo.security.models;

import lombok.Builder;
import lombok.Data;
@Data
@Builder
public class ActionRsetpW {
	private Integer otp;
	private String email;
}

package tn.soft.SchoolMastergo.security.service;


import org.springframework.http.ResponseEntity;

import tn.soft.SchoolMastergo.security.models.ActionRsetpW;
import tn.soft.SchoolMastergo.security.models.ChangePasswordResetRequest;
import tn.soft.SchoolMastergo.security.models.Response;








public interface PasswordResetTokenService {
	ResponseEntity<String> verifyEmail(Response rep);


ResponseEntity<String> verifyOtp(ActionRsetpW actionrsetPW);


   ResponseEntity<String> changePasswordHandler(
           ChangePasswordResetRequest changePasswordResetRequest,
           String email
   );


}


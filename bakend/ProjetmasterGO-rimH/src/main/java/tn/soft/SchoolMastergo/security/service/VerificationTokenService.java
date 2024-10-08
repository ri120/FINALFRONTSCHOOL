package tn.soft.SchoolMastergo.security.service;

import org.springframework.http.ResponseEntity;

import tn.soft.SchoolMastergo.security.models.Response;
import tn.soft.SchoolMastergo.security.models.User;
import tn.soft.SchoolMastergo.security.models.VerificationToken;




public interface VerificationTokenService {
	
   void saveUserVerificationToken(User user, String token);
   String validateToken(String token);
   ResponseEntity<Response> verifyEmail(String token);
   VerificationToken generateNewVerificationToken(String oldToken);
}

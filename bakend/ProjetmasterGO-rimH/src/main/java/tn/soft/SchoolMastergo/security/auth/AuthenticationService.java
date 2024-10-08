package tn.soft.SchoolMastergo.security.auth;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import tn.soft.SchoolMastergo.dto.Agentadministratifdto;
import tn.soft.SchoolMastergo.dto.Elevedto;
import tn.soft.SchoolMastergo.dto.Parentdto;
import tn.soft.SchoolMastergo.dto.Professeurdto;
import tn.soft.SchoolMastergo.entites.Agentadministratif;
import tn.soft.SchoolMastergo.entites.Eleve;
import tn.soft.SchoolMastergo.entites.Parent;
import tn.soft.SchoolMastergo.entites.Professeur;
import tn.soft.SchoolMastergo.security.config.JwtService;
import tn.soft.SchoolMastergo.security.listener.RegistrationCompleteEvent;
import tn.soft.SchoolMastergo.security.models.*;
import tn.soft.SchoolMastergo.security.repository.EleveRepository;
import tn.soft.SchoolMastergo.security.repository.RoleRepository;
import tn.soft.SchoolMastergo.security.repository.TokenRepository;
import tn.soft.SchoolMastergo.security.repository.UserRepository;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Set;

import static tn.soft.SchoolMastergo.security.service.UserService.applicationUrl;



@Service
@RequiredArgsConstructor
public class AuthenticationService {
  private final UserRepository repository;
  private final TokenRepository tokenRepository;
  private final PasswordEncoder passwordEncoder;
  private final JwtService jwtService;
  private final AuthenticationManager authenticationManager;
  private final ApplicationEventPublisher publisher;
  private final  RoleRepository roleRepository;
  private final EleveRepository eleveRepository;

  public ResponseEntity<Response>  register(RegisterRequest userRequest,final HttpServletRequest request) {
  
    boolean userExists = repository.findAll()
       .stream()
       .anyMatch(user -> userRequest.getEmail().equalsIgnoreCase(user.getEmail()));

if (userExists) {
   return ResponseEntity.badRequest().body(Response.builder()
           .responseMessage("User with provided email  already exists!")
           .build());
}
//parent
if (userRequest instanceof Parentdto) {
   User user = new Parent();
   user = Parentdto.toEntity((Parentdto) userRequest);
   user.setPassword(passwordEncoder.encode(user.getPassword()));
   Set<String> strRoles = userRequest.getRoles();
   List<Role> roles = new ArrayList<>();

   if (strRoles == null) {
       Role userRole = roleRepository.findByName("Parent")
               .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
       roles.add(userRole);
   } else {
       strRoles.forEach(role -> {

           Role adminRole = roleRepository.findByName(role)
                   .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
           roles.add(adminRole);

       });
   }
   user.setRoles(roles);
   var savedUser = repository.save(user);
   publisher.publishEvent(new RegistrationCompleteEvent(savedUser, applicationUrl(request)));

   return new ResponseEntity<>(
           Response.builder()

                   .responseMessage("Success! Please, check your email to complete your registration")
                   .email(savedUser.getEmail())
                   .build(),
           HttpStatus.CREATED
   );
}
//eleve
if (userRequest instanceof Elevedto) {
	   Eleve user = new Eleve();
	   user = Elevedto.toEntity((Elevedto) userRequest);
	   user.setPassword(passwordEncoder.encode(user.getPassword()));


	   Set<String> strRoles = userRequest.getRoles();
	   List<Role> roles = new ArrayList<>();

	   if (strRoles == null) {
	       Role userRole = roleRepository.findByName("Eleve")
	               .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
	       roles.add(userRole);
	   } else {
	       strRoles.forEach(role -> {

	           Role adminRole = roleRepository.findByName(role)
	                   .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
	           roles.add(adminRole);

	       });
	   }
	   user.setRoles(roles);
       user.setStatutPaiement("non paye");
       user.setStatutAffectation("non affecte");
	   var savedUser = repository.save(user);
	   publisher.publishEvent(new RegistrationCompleteEvent(savedUser, applicationUrl(request)));

	   return new ResponseEntity<>(
	           Response.builder()

	                   .responseMessage("Success! Please, check your email to complete your registration")
	                   .email(savedUser.getEmail())
	                   .build(),
	           HttpStatus.CREATED
	   );
	}
//pro
if (userRequest instanceof Professeurdto) {
	   User user = new Professeur();
	   user = Professeurdto.toEntity((Professeurdto) userRequest);
	   user.setPassword(passwordEncoder.encode(user.getPassword()));
	   Set<String> strRoles = userRequest.getRoles();
	   List<Role> roles = new ArrayList<>();

	   if (strRoles == null) {
	       Role userRole = roleRepository.findByName("professeur")
	               .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
	       roles.add(userRole);
	   } else {
	       strRoles.forEach(role -> {

	           Role adminRole = roleRepository.findByName(role)
	                   .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
	           roles.add(adminRole);

	       });
	   }
	   user.setRoles(roles);
	   var savedUser = repository.save(user);
	   publisher.publishEvent(new RegistrationCompleteEvent(savedUser, applicationUrl(request)));

	   return new ResponseEntity<>(
	           Response.builder()

	                   .responseMessage("Success! Please, check your email to complete your registration")
	                   .email(savedUser.getEmail())
	                   .build(),
	           HttpStatus.CREATED
	   );
	}
//agent
if (userRequest instanceof Agentadministratifdto) {
	   User user = new Professeur();
	   user = Agentadministratifdto.toEntity((Agentadministratifdto) userRequest);
	   user.setPassword(passwordEncoder.encode(user.getPassword()));
	   Set<String> strRoles = userRequest.getRoles();
	   List<Role> roles = new ArrayList<>();

	   if (strRoles == null) {
	       Role userRole = roleRepository.findByName("agentAdministratif")
	               .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
	       roles.add(userRole);
	   } else {
	       strRoles.forEach(role -> {

	           Role adminRole = roleRepository.findByName(role)
	                   .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
	           roles.add(adminRole);

	       });
	   }
	   user.setRoles(roles);
	   var savedUser = repository.save(user);
	   publisher.publishEvent(new RegistrationCompleteEvent(savedUser, applicationUrl(request)));

	   return new ResponseEntity<>(
	           Response.builder()

	                   .responseMessage("Success! Please, check your email to complete your registration")
	                   .email(savedUser.getEmail())
	                   .build(),
	           HttpStatus.CREATED
	   );
	}




    return null;
  }

  public AuthenticationResponse authenticate(AuthenticationRequest request) {
    authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(
            request.getEmail(),
            request.getPassword()
        )
    );
    var user = repository.findByEmail(request.getEmail())
        .orElseThrow();
    var claims = new HashMap<String, Object>();
    claims.put("fullname", user.getFirstName() + " " + user.getLastName());
    claims.put("userId", user.getId());
    var jwtToken = jwtService.generateToken(claims,user);
    //var jwtToken = jwtService.generateToken(user);
   
    var refreshToken = jwtService.generateRefreshToken(user);
    revokeAllUserTokens(user);
    saveUserToken(user, jwtToken);
    return AuthenticationResponse.builder()
        .accessToken(jwtToken)
            .refreshToken(refreshToken)
        .build();
  }

  private void saveUserToken(User user, String jwtToken) {
    var token = Token.builder()
        .user(user)
        .token(jwtToken)
        .tokenType(TokenType.BEARER)
        .expired(false)
        .revoked(false)
        .build();
    tokenRepository.save(token);
  }

  private void revokeAllUserTokens(User user) {
    var validUserTokens = tokenRepository.findAllValidTokenByUser(user.getId());
    if (validUserTokens.isEmpty())
      return;
    validUserTokens.forEach(token -> {
      token.setExpired(true);
      token.setRevoked(true);
    });
    tokenRepository.saveAll(validUserTokens);
  }

  public void refreshToken(
          HttpServletRequest request,
          HttpServletResponse response
  ) throws IOException {
    final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
    final String refreshToken;
    final String userEmail;
    if (authHeader == null ||!authHeader.startsWith("Bearer ")) {
      return;
    }
    refreshToken = authHeader.substring(7);
    userEmail = jwtService.extractUsername(refreshToken);
    if (userEmail != null) {
      var user = this.repository.findByEmail(userEmail)
              .orElseThrow();
      if (jwtService.isTokenValid(refreshToken, user)) {
        var accessToken = jwtService.generateToken(user);
        revokeAllUserTokens(user);
        saveUserToken(user, accessToken);
        var authResponse = AuthenticationResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .build();
        new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
      }
    }
  }

    @PostConstruct
    public void createRoles(){

        if (roleRepository.findByName("AdminSystem").isEmpty()) {
            roleRepository.save(Role.builder().name("AdminSystem").build());
        }
        if (roleRepository.findByName("agentAdministratif").isEmpty()) {
            roleRepository.save(Role.builder().name("agentAdministratif").build());
        }
        if (roleRepository.findByName("professeur").isEmpty()) {
            roleRepository.save(Role.builder().name("professeur").build());
        }
        if (roleRepository.findByName("Parent").isEmpty()) {
            roleRepository.save(Role.builder().name("Parent").build());
        }
        if (roleRepository.findByName("Eleve").isEmpty()) {
            roleRepository.save(Role.builder().name("Eleve").build());
        }
    }


    @PostConstruct
  public void createDefaultAdmin() {

      User user =new Agentadministratif();
      String email = "<div class=\"modal\" tabindex=\"-1\">\r\n"
      		+ "  <div class=\"modal-dialog\">\r\n"
      		+ "    <div class=\"modal-content\">\r\n"
      		+ "      <div class=\"modal-header\">\r\n"
      		+ "        <h5 class=\"modal-title\">Modal title</h5>\r\n"
      		+ "        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\r\n"
      		+ "      </div>\r\n"
      		+ "      <div class=\"modal-body\">\r\n"
      		+ "        <p>Modal body text goes here.</p>\r\n"
      		+ "      </div>\r\n"
      		+ "      <div class=\"modal-footer\">\r\n"
      		+ "        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Close</button>\r\n"
      		+ "        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n"
      		+ "      </div>\r\n"
      		+ "    </div>\r\n"
      		+ "  </div>\r\n"
      		+ "</div>";
     
      String emailadm = "admin@mail.com";
      if (!repository.existsByEmail(emailadm)) {
          user.setEmail("admin@mail.com");
          user.setFirstName("marzouki");
          user.setLastName("hajer");
          user.setEnabled(true);
          user.setPassword(passwordEncoder.encode("admine"));
          List<Role> roles = new ArrayList<>();
          Role userRole = roleRepository.findByName("AdminSystem")
                  .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
          roles.add(userRole);
          user.setRoles(roles);

          repository.save(user);
      }
}

}


package tn.soft.SchoolMastergo.security.controller;

import java.security.Principal;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import tn.soft.SchoolMastergo.security.models.ChangePasswordRequest;
import tn.soft.SchoolMastergo.security.service.UserService;

@RestController
@RequestMapping("/api/v1/changermdp")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class ChangerPasswordController {
	private final UserService service;

    @PatchMapping
    public ResponseEntity<?> changePassword(
          @RequestBody ChangePasswordRequest request,
          Principal connectedUser
    ) {
        service.changePassword(request, connectedUser);
        return ResponseEntity.ok().build();
    }

}

package tn.soft.SchoolMastergo.security.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import tn.soft.SchoolMastergo.security.models.ActionRsetpW;
import tn.soft.SchoolMastergo.security.models.ChangePasswordResetRequest;
import tn.soft.SchoolMastergo.security.models.Response;
import tn.soft.SchoolMastergo.security.models.User;
import tn.soft.SchoolMastergo.security.service.PasswordResetTokenService;
import tn.soft.SchoolMastergo.security.service.UserService;


@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    private final UserService service;
    private final PasswordResetTokenService passwordResetTokenService;



    @GetMapping("/{email}")
    public User fetchUser(@PathVariable String email) {
        return service.fetchUser(email);
    }


    //send mail for email verification
    @PostMapping("/resetrequestpassword")
    public ResponseEntity<String> verifyEmail(@RequestBody Response resp){

        return passwordResetTokenService.verifyEmail(resp);

    }


    @PostMapping("/verifyOtp")
    public ResponseEntity<String> verifyOtp(@RequestBody ActionRsetpW actionRsetpW){
        return passwordResetTokenService.verifyOtp(actionRsetpW);
    }

    //Now User Can change the password

    @PostMapping("/resetPassword")
    public ResponseEntity<String> changePasswordHandler(
            @RequestBody ChangePasswordResetRequest changePassword
    ){
        return passwordResetTokenService.changePasswordHandler(changePassword,changePassword.getEmail());
    }


}


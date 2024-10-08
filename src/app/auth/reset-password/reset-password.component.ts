 import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
 import { Router, ActivatedRoute } from "@angular/router";
import { NgxOtpInputComponent, NgxOtpInputConfig } from 'ngx-otp-input';
import { AuthService } from 'src/app/services/auth/service/auth.service';


 @Component({
   selector: 'app-reset-password',
   templateUrl: './reset-password.component.html',
   styleUrls: ['./reset-password.component.scss']
 })
 export class ResetPasswordComponent implements OnInit {
  @ViewChild('otpPasswordNgForm') otpPasswordNgForm: NgForm;
  @ViewChild('ngxotp') ngxOtp: NgxOtpInputComponent;
otpPasswordForm: UntypedFormGroup;
showAlert: boolean = false;
  otp = null;
  email: string;
  message:string=''
  activateRoute: ActivatedRoute = inject(ActivatedRoute);

  constructor(
    private _authService: AuthService,
    private fb: FormBuilder,
    private _formBuilder: UntypedFormBuilder,
    private router: Router
) { }
otpInputConfig: NgxOtpInputConfig = {
    otpLength: 6,
};

  ngOnInit(): void {

    // Create the form
    this.otpPasswordForm = this._formBuilder.group({
      email: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmationPassword: ['', [Validators.required]],
     
    });
}
resetpw(): void {
    
    this.showAlert = false;
    console.log("ahmed",this.otpPasswordForm.value)
    // Forgot password
    this._authService
        .resetPasswordfinal(this.otpPasswordForm.value)
                  .subscribe({
            next: (response) => {
                console.log(response);
               
            },
            error: (error) => {
                console.log(error);
                // Set the alert
                this.message=""
            },
        });
        setTimeout(() => {
          this.router.navigate(['/auth/login']);
      }, 1000);
}

handleFill($event: string): void {
    this.otp = $event;
}
}

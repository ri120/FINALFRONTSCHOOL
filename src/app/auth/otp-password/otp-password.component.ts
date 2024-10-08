import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { Validators, UntypedFormGroup, FormBuilder, UntypedFormBuilder, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { NgxOtpInputComponent, NgxOtpInputConfig } from 'ngx-otp-input';
import { finalize } from 'rxjs';
import { AuthService } from 'src/app/services/auth/service/auth.service';

@Component({
  selector: 'app-otp-password',
  templateUrl: './otp-password.component.html',
  styleUrls: ['./otp-password.component.scss']
})
export class OtpPasswordComponent implements OnInit {
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
 // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {

      // Create the form
      this.otpPasswordForm = this._formBuilder.group({
        otp: ['', [Validators.required]],
        email: ['', [Validators.required]],
      });
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Send the reset link
   */
  sendResetLink(): void {
      // Return if the form is invalid
      // if (this.otp.length < 6) {
      //     return;
      // }

      // Disable the form
      // this.otpPasswordForm.disable();

      // Hide the alert
      this.showAlert = false;

      // Forgot password
      this._authService
          .otpVerificationgiveotp(this.otpPasswordForm.value)
                    .subscribe({
              next: (response) => {
                  console.log(response);
                  // Set the alert

                  

               
              },
              error: (error) => {
                  console.log(error);
                  // Set the alert
                  this.message=""
              },
          });
          setTimeout(() => {
            this.router.navigate(['/auth/reset-password']);
        }, 1000);
  }

  handleFill($event: string): void {
      this.otp = $event;
  }
}

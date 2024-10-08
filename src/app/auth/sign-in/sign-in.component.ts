import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/service/auth.service';
import { JwtPayload, jwtDecode } from "jwt-decode";

interface CustomJwtPayload extends JwtPayload {
  authorities: { authority: string }[];
}
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  @ViewChild('signInNgForm') signInNgForm: NgForm;
  hide = true;
  showAlert: boolean = false;
  message:string='';
  role:string=''

  loginForm: FormGroup;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthService
  ) {}

  ngOnInit() {

    this._authService.logout();
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }

  // On Forgotpassword link click
  onForgotpassword() {
    this._router.navigate(['forgot-password'], {
      relativeTo: this._activatedRoute.parent,
    });
  }

  // On Signup link click
  onSignup() {
    this._router.navigate(['sign-up'], { relativeTo: this._activatedRoute.parent });
  }

  login() {
    console.log("hh",this.loginForm.value)
    if (this.loginForm.invalid) {
      return this.loginForm.markAllAsTouched();
    } else {
      // Disable the form
      this.loginForm.disable();

      // Hide the alert
      this.showAlert = false;
       // Sign in
       this._authService.signIn(this.loginForm.value).subscribe({
        next: (response) => {
            // Set the redirect url.
            // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
            // to the correct page after a successful sign in. This way, that url can be set via
            // routing file and we don't have to touch here.
        

            const token = response.accessToken;


          
          
            const decodedToken = jwtDecode<CustomJwtPayload>(token);
            const authorities = decodedToken.authorities[0].authority;
            console.log(decodedToken.authorities[0].authority);
            localStorage.setItem("role",authorities)
            this._router.navigateByUrl('dashboard/welcome');
            // Navigate to the redirect url
        },
        error: (error) => {
            console.log(error);
            // Re-enable the form
            this.loginForm.enable();

            // Reset the form
            this.signInNgForm.resetForm();

            // Set the alert
            this.message = "Email ou le mot de passe que vous avez entré est incorrect"

            // Show the alert
            this.showAlert = true;
        },
    });
    }
  }
}

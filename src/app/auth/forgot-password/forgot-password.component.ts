import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { Resetpwemail } from 'src/app/services/auth/model/model/resetpwemail';

import { AuthService } from 'src/app/services/auth/service/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgetForm: FormGroup;
  modelemail: Resetpwemail=new Resetpwemail()
  constructor(private router: Router,private autsev:AuthService, private route: ActivatedRoute) { }

	// On SignIn link click
	onSignIn() {
	  this.router.navigate(['sign-in'], { relativeTo: this.route.parent });
	}


  ngOnInit():void{
    this.forgetForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email])
     // responseMessage: new FormControl("hello")
    })
  }

  


  forgetPassword1() {
    
    if (this.forgetForm.invalid) {
      return this.forgetForm.markAllAsTouched();
      alert("hhh")
    } else {
     
       this.modelemail.email=this.forgetForm.value.email
      
       this.autsev.forgotPasswordgivemaili(this.modelemail).subscribe({
        next: (response) => {
                    console.log("eeeeeeeeeeeee",response)
        
          this.router.navigate(["/auth/otp-password"]);
          alert("rrrr")
            // Navigate to the redirect url
        },
        error: (error) => {
            console.log(error);
            // Re-enable the form
            this.forgetForm.enable();

            alert("rrrr")
        },
    });
    }
  }


  //////////////
  async forgetPassword() {
    this.modelemail.email=this.forgetForm.value.email
      
       this.autsev.forgotPasswordgivemaili(this.modelemail).subscribe({
      next: (data) => {
        
        console.log("eeeeeeeeeeeee",data)
        
        
        alert("rrrr")
       

      },
      error: console.log,
      
    });
    this.router.navigate(["/auth/otp-password"]);
  }

  ////////////////////

}

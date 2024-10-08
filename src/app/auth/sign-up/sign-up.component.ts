import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  hide = true;
  showAlert: boolean = false;
  submitted: boolean = false;
  messageErr:string='';
  messageSuc:string='';
  myForm: FormGroup;
  studentSignupForm: FormGroup;
  parentSignupForm: FormGroup;
  scheduleTypes: string[] = ['Eleve', 'Parent'];
  niveauScolaires:string[]= ['PREMIERE_BASE','DEUXIEME_BASE','TROISIEME_BASE','QUATRIEM_BASE','CINQUIEM_BASE','SIXIEME_BASE']
   loadingSignup = true
   creatingSignup = false
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private datePipe: DatePipe
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.submitted=false
    this.studentSignupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      dob: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      niveauScolaire: new FormControl(null, Validators.required),
    });

    this.parentSignupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
    });
  }

  public buildForm() {
    this.myForm = this._formBuilder.group({
      sType: ['Eleve'],
    });
  }

  public getScheduleType() {
    //Get the value of your stypeControl
    return this.myForm.controls['sType'].value;
  }

  // On Signup link click
  onSignIn() {
    this.router.navigate(['sign-in'], { relativeTo: this.route.parent });
  }

  signUpStudent() {
    this.submitted=true
    if (this.studentSignupForm.invalid) {
      
      return this.studentSignupForm.markAllAsTouched();
    } else {
      const dob = this.studentSignupForm.get('dob').value;
      const formattedDob = this.datePipe.transform(dob, 'yyyy-MM-dd');
      
      const formData = {
        ...this.studentSignupForm.value,
        dob: formattedDob
      };
      this.creatingSignup = true
      this._authService.signUpEleve(formData).subscribe({
       
        next: (response) => {
          console.log(formData)
          // Set the alert
          this.messageSuc = "Inscription avec succès. Veuillez activer votre compte."

          // Show the alert
          this.showAlert = true;
          this.creatingSignup = false
          setTimeout(()=>{
            this.router.navigateByUrl('auth/sign-in');
          },3000)

        },
        error: (error) => {
          console.log(formData)
          console.log(error)
          // Set the alert
          this.messageErr = "Inscription échoué"

          // Show the alert
          this.showAlert = true;
        },
        
      });
      
    }
  }

  signUpParent() {
    this.submitted=true
    if (this.parentSignupForm.invalid) {
      return this.parentSignupForm.markAllAsTouched();
    } else {
      console.log(this.parentSignupForm.value);
      this.creatingSignup = true
      this._authService.signUpParent(this.parentSignupForm.value).subscribe({
        next: (response) => {
          // Set the alert
          this.messageSuc = "Inscription avec succès. Veuillez activer votre compte."

          // Show the alert
          this.showAlert = true;
          this.creatingSignup = false
          setTimeout(()=>{
            this.router.navigateByUrl('auth/sign-in');
          },3000)

        },
        error: (error) => {
          console.log(error)
          // Set the alert
          this.messageErr = "Inscription échoué"

          // Show the alert
          this.showAlert = true;
        },
      });
    }
  }
}

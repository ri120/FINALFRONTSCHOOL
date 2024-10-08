import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ajout-enseignant',
  templateUrl: './ajout-enseignant.component.html',
  styleUrl: './ajout-enseignant.component.scss'
})
export class AjoutEnseignantComponent {
  hide = true;
  myForm: FormGroup;
  studentSignupForm: FormGroup;
  parentSignupForm: FormGroup;
  scheduleTypes: string[] = ['Oui', 'Non'];

 



  constructor(private router: Router, private route: ActivatedRoute,private _formBuilder: FormBuilder) { 
    this.buildForm();
  }

  ngOnInit(): void {


    this.studentSignupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      firstName: new FormControl(null,Validators.required),
      lastName: new FormControl(null,Validators.required),
      dateDebutTravail: new FormControl(null,Validators.required),
      adress: new FormControl(null,Validators.required),
      tel: new FormControl(null,Validators.required),
      cin: new FormControl(null,Validators.required),
      diplome: new FormControl(null,Validators.required),
      
    })


   

  }

 public buildForm() {
  this.myForm = this._formBuilder.group({
    sType: ["Oui"]
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


  
  signUpStudent(){
    if (this.studentSignupForm.invalid) {
      return this.studentSignupForm.markAllAsTouched();
     } else {
      //your api call
     }
  }

  signUpParent(){
    if (this.parentSignupForm.invalid) {
      return this.parentSignupForm.markAllAsTouched();
     } else {
      //your api call
     }
  }

}

import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EleveService } from 'src/app/services/serviceProject/eleve.service';
import { ParentService } from 'src/app/services/serviceProject/parent.service';

@Component({
  selector: 'app-ajout-enfant',
  templateUrl: './ajout-enfant.component.html',
  styleUrl: './ajout-enfant.component.scss'
})
export class AjoutEnfantComponent {



  hide = true;
  myForm: FormGroup;
  studentSignupForm: FormGroup;
  parentSignupForm: FormGroup;
  scheduleTypes: string[] = ['Oui', 'Non'];
  nomParent!:string;

 
  constructor(private router: Router, private route: ActivatedRoute,private _formBuilder: FormBuilder, 
    private _serviceParent:ParentService,private serviceEleve:EleveService) { 
    this.buildForm();
  }

  ngOnInit(): void {


    this.studentSignupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      firstName: new FormControl(null,Validators.required),
      lastName: new FormControl(null,Validators.required),
      dob: new FormControl(null,Validators.required),
      tel: new FormControl(null,Validators.required),
      
    })


    this.parentSignupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
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

 

  
  ajouterEleveParent()
  {
    this._serviceParent.ajouterEleveAuParent(this.parentSignupForm.value.email)
        .subscribe({
          next: (res) => {
            alert("eleve à étè ajouté!")
            console.log(res)
          
          },
        });}

        
        // getEleveByParent() {
        //   this.serviceEleve.findAllElevesByParent().subscribe(
        //     res => {
        //       this.listEleve = res
        //       console.log("ghaithhhhhh",res)
             
        //     } , error => {
        //         console.error(error)
        //     } , ()=> {
          
        //     })
        // }
        
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from 'src/app/services/snackbar/core.service';
import { AjoutEnseignantComponent } from './ajout-enseignant/ajout-enseignant.component';

import { ProfesseurDto } from 'src/app/models/professeur-dto';
import { ProfesseurService } from 'src/app/services/serviceProject/professeur.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/service/auth.service';
import { DatePipe } from '@angular/common';
import { Addprof } from 'src/app/models/addprof';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-enseignant-page',
  templateUrl: './enseignant-page.component.html',
  styleUrl: './enseignant-page.component.scss'
})
export class EnseignantPageComponent implements OnInit {
  hide = true;
  showAlert: boolean = false;
  submitted: boolean = false;
  messageErr:string='';
  messageSuc:string='';
  myForm: FormGroup;
  profSignupForm: FormGroup;
  profSignupFormview: FormGroup;
  classeList:ProfesseurDto []
  viewmodelclass:Addprof=new Addprof()
  constructor(
   
    private _authService: AuthService,
    private datePipe: DatePipe
  ) {
    //this.buildForm();
  }

  ngOnInit(): void {
   this.getListProf()
    this.submitted=false
    this.profSignupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      dateDebutTravail: new FormControl(null, Validators.required),
      diplome: new FormControl(null, Validators.required),
      cin: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      adress: new FormControl(null, Validators.required),

    });

    this.profSignupFormview = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      dateDebutTravail: new FormControl(null, Validators.required),
      diplome: new FormControl(null, Validators.required),
      cin: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      adress: new FormControl(null, Validators.required),

    });
  }

 

 

  // On Signup link click
  
  signUpprof() {
    this.submitted=true
    console.log("datadata",this.profSignupForm.value)
    if (!this.profSignupForm.valid) {
      alert("gggggg")
      return this.profSignupForm.markAllAsTouched();
    } else {
      const dateDebutTravail = this.profSignupForm.get('dateDebutTravail').value;
      const formattedDob = this.datePipe.transform(dateDebutTravail, 'yyyy-MM-dd');
      
      const formData = {
        ...this.profSignupForm.value,
        dateDebutTravail: formattedDob
      };
      console.log(formData)
      this._authService.ajouterprof(formData).subscribe({
        next: (response) => {
          // Set the alert
          this.messageSuc = "Inscription avec succès. Veuillez activer votre compte."

          // Show the alert
          this.showAlert = true;

          setTimeout(()=>{
            // this.router.navigateByUrl('auth/sign-in');
          },3000)
          this.getListProf()
        },
        error: (error) => {
          // Set the alert
          this.messageErr = "Inscription échoué"

          // Show the alert
          this.showAlert = true;
        },
       
      });
      
    }
  }
  getListProf()
  {
    this._authService.getAllprof().subscribe(res => {
      this.classeList = res
      console.log(res)
     
    } , error => {
        console.error(error)
    } , ()=> {

    })
  }
  getProfById(id:number)
  {

    if(id!=undefined && id !=null)
    {
      this._authService.getProfById(id).subscribe(
        res=>{
          console.log(res);
          this.viewmodelclass=res 
      },error=>{
        console.error(error) 
      },()=>{ 
        this.profSignupFormview.get("firstName")?.setValue(this.viewmodelclass.firstName);
        this.profSignupFormview.get("lastName")?.setValue(this.viewmodelclass.lastName);
        this.profSignupFormview.get("email")?.setValue(this.viewmodelclass.email);
        this.profSignupFormview.get("diplome")?.setValue(this.viewmodelclass.diplome);
        this.profSignupFormview.get("cin")?.setValue(this.viewmodelclass.cin);
        this.profSignupFormview.get("phone")?.setValue(this.viewmodelclass.phone);
        this.profSignupFormview.get("dateDebutTravail")?.setValue(this.viewmodelclass.dateDebutTravail);
        this.profSignupFormview.get("adress")?.setValue(this.viewmodelclass.adress);
        this.profSignupFormview.updateValueAndValidity()
      });
    }
  }

  deleteProf(levelId:number)
  {
    if(levelId!=undefined && levelId !=null)
    {
      Swal.fire({
        title: 'Êtes-vous sûr?',
        text: 'Vous ne pourrez pas récupérer entite prof!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui, supprimez-la!',
        cancelButtonText: 'Non, gardez-la'
      }).then((result : any) => {
        if (result.value) {
         // alert(id);
          this._authService.deleteProf(levelId)
          .subscribe(res=>{
         //   this.getListClasse()
          })
        Swal.fire(
          'Supprimé!',
          'Votre prof entite a été supprimée.',
          'success'
        )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulé',
          'Votre niveau est en sécurité 🙂',
          'error'
        )
        }
      })
      this.getListProf()
    }
  }


}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatiereDto } from 'src/app/models/matiere-dto';

import { MatiereService } from 'src/app/services/serviceProject/matiere.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-matiere-list',
  templateUrl: './matiere-list.component.html',
  styleUrls: ['./matiere-list.component.scss']
})
export class MatiereListComponent implements OnInit {
  FormGroupart!:FormGroup
  FormGroupviewupd!:FormGroup
  matiereList:MatiereDto[] = [];
  submitted:boolean = false;
  modelmatiere:MatiereDto=new MatiereDto();
  viewmodelmatiere:MatiereDto=new MatiereDto();
 
  
 

  constructor(private matierervice:MatiereService) { }
  ngOnInit(): void {
    this.getListMatiere()
    this.FormGroupart = new FormGroup({
      //'idarticle' : new FormControl('', Validators.reNumber(localStorage.getItem("userId"))quired),
      'nomMatiere' : new FormControl('', Validators.required),
      'coeficient' : new FormControl('', Validators.required),
     'cover' : new FormControl('', Validators.required),
     'duree' : new FormControl('', Validators.required),
     
    });
    this.FormGroupviewupd = new FormGroup({
      //'idarticle' : new FormControl('', Validators.reNumber(localStorage.getItem("userId"))quired),
      'nomMatiere' : new FormControl('', Validators.required),
      'coeficient' : new FormControl('', Validators.required),
     'cover' : new FormControl('', Validators.required),
     'duree' : new FormControl('', Validators.required),
     
     

     
    });
  }
  addMatiere()
  {
    if(this.FormGroupart.invalid && this.submitted ==true)
    {
      console.log(this.FormGroupart.value);
      return  ;
    }
    this.modelmatiere.nomMatiere = this.FormGroupart.value.nomMatiere;
    this.modelmatiere.coeficient = this.FormGroupart.value.coeficient;
    this.modelmatiere.cover = this.FormGroupart.value.cover;
    this.modelmatiere.duree = this.FormGroupart.value.duree;
    console.log("hajjer",this.modelmatiere)
    this.matierervice.saveMatiere(this.modelmatiere)
        .subscribe({
          next: (res) => {
            alert("matiere a été ajouté!")
           // this.router.navigate(['/vendeur/gerrerenchre']); 
           this.getListMatiere()
            console.log(res)
            this.submitted = true;
            console.log("hhhhhhhhhhhhhhhhhhh")
          },
        });}


        ///modifier
        updateMatiere()
        {
          if(this.FormGroupviewupd.invalid && this.submitted ==true)
          {
            console.log(this.FormGroupviewupd.value);
            return  ;
          }
          this.viewmodelmatiere.nomMatiere = this.FormGroupviewupd.value.nomMatiere;
          this.viewmodelmatiere.coeficient = this.FormGroupviewupd.value.coeficient;
          this.viewmodelmatiere.cover = this.FormGroupviewupd.value.cover;
          this.viewmodelmatiere.duree = this.FormGroupviewupd.value.duree;
          console.log(this.viewmodelmatiere)
          this.matierervice.updateMatiere(this.viewmodelmatiere)
              .subscribe({
                next: (res) => {
                  alert("matiere a été modifie!")
                  this.getListMatiere()
                 // this.router.navigate(['/vendeur/gerrerenchre']); 
                  console.log(res)
                  this.submitted = true;
                  console.log("hhhhhhhhhhhhhhhhhhh")
                },
              });}

        ///////////////////////////
     
    getListMatiere()
      {
        this.matierervice.findAllMatieres().subscribe(res => {
          this.matiereList = res
          console.log(res)
         
        } , error => {
            console.error(error)
        } , ()=> {
    
        })
      }
      getbyid(id:number)
      {
        this.matierervice.findMatiereById(id).subscribe(res => {
          this.viewmodelmatiere = res
          console.log(res)
        } , error => {
            console.error(error)
        } , ()=> {
    
        })
      }
      ////
    
      getmatiere(id:number)
      {
    
        if(id!=undefined && id !=null)
        {
          this.matierervice.findMatiereById(id).subscribe(
            res=>{
              console.log(res);
              this.viewmodelmatiere=res 
          },error=>{
            console.error(error) 
          },()=>{ 
          
         
            this.FormGroupviewupd.get("nomMatiere")?.setValue(this.viewmodelmatiere.nomMatiere);
            this.FormGroupviewupd.get("coeficient")?.setValue(this.viewmodelmatiere.coeficient);
            this.FormGroupviewupd.get("cover")?.setValue(this.viewmodelmatiere.cover);
            this.FormGroupviewupd.get("duree")?.setValue(this.viewmodelmatiere.duree);
            this.FormGroupart.updateValueAndValidity()
          });
        }
      }
      
      ////


      deleteMatiere(levelId:number)
      {
        if(levelId!=undefined && levelId !=null)
        {
          Swal.fire({
            title: 'Êtes-vous sûr?',
            text: 'Vous ne pourrez pas récupérer entite Matiere!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Oui, supprimez-la!',
            cancelButtonText: 'Non, gardez-la'
          }).then((result : any) => {
            if (result.value) {
             // alert(id);
              this.matierervice.deleteMatiereById(levelId)
              .subscribe(res=>{
                this.getListMatiere()
              })
            Swal.fire(
              'Supprimé!',
              'Votre matiere entite a été supprimée.',
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
        }
      }
    

 

 
  
}







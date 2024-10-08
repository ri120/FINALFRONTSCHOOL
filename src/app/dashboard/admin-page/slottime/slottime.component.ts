import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SlotEpmloisTempsDto } from 'src/app/models/SlotEpmloisTempsDto';
import { SlotTimeService } from 'src/app/services/serviceProject/slot-time.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-slottime',
  templateUrl: './slottime.component.html',
  styleUrl: './slottime.component.scss'
})
export class SlottimeComponent implements OnInit{
  FormGroupart!:FormGroup    
  FormGroupviewupd!:FormGroup
  slotList:SlotEpmloisTempsDto[] = [];
  submitted:boolean = false;
  modelslot:SlotEpmloisTempsDto=new SlotEpmloisTempsDto();
  viewmodelslot:SlotEpmloisTempsDto=new SlotEpmloisTempsDto();
 
  


  constructor(private slotervice:SlotTimeService) { }
  ngOnInit(): void {
    this.getListClasse()
    this.FormGroupart = new FormGroup({
      //'idarticle' : new FormControl('', Validators.reNumber(localStorage.getItem("userId"))quired),
      'timestart' : new FormControl('', Validators.required),
      'timeend' : new FormControl('', Validators.required),
      'jour' : new FormControl('', Validators.required),
      'anneescolair' : new FormControl('', Validators.required),
    });
    this.FormGroupviewupd = new FormGroup({
      //'idarticle' : new FormControl('', Validators.reNumber(localStorage.getItem("userId"))quired),
      'timestart' : new FormControl('', Validators.required),
      'timeend' : new FormControl('', Validators.required),
      'jour' : new FormControl('', Validators.required),
      'anneescolair' : new FormControl('', Validators.required),
     

     
    });
  }

  // ChangeDay(e: any) {
  //   this.selectedDay = e.target.value
  // }

  addClasse()
  {
    console.log("firasss",this.FormGroupart.value)
    if(this.FormGroupart.invalid && this.submitted ==true)
    {
      console.log("hhhhhhhhhhhhh",this.FormGroupart.value);
      return  ;
    }
   
    this.modelslot.timestart = this.FormGroupart.value.timestart;
    this.modelslot.timeend = this.FormGroupart.value.timeend;
    this.modelslot.anneescolair = this.FormGroupart.value.anneescolair;
    this.modelslot.jour = this.FormGroupart.value.jour;

    console.log("rita",this.modelslot.anneescolair)
    this.slotervice.createSlotEpmloisTemp(this.modelslot)
        .subscribe({
          next: (res) => {
            alert("slot a été ajouté!")
           // this.router.navigate(['/vendeur/gerrerenchre']); 
           this.getListClasse()
            console.log(res)
            this.submitted = true;
            console.log("hhhhhhhhhhhhhhhhhhh")
          },
        });}


        ///modifier
        updateClasse()
        {
          if(this.FormGroupviewupd.invalid && this.submitted ==true)
          {
            console.log(this.FormGroupviewupd.value);
            return  ;
          }
          this.viewmodelslot.timestart = this.FormGroupviewupd.value.timestart;
          this.viewmodelslot.timeend = this.FormGroupviewupd.value.timeend;
          this.viewmodelslot.anneescolair = this.FormGroupviewupd.value.anneescolair;
          this.viewmodelslot.jour = this.FormGroupviewupd.value.jour;
         
          console.log(this.viewmodelslot)
          this.slotervice.updateSlotEpmloisTemp(this.viewmodelslot)
              .subscribe({
                next: (res) => {
                  alert("slot a été modifie!")
                  this.getListClasse()
                 // this.router.navigate(['/vendeur/gerrerenchre']); 
                  console.log(res)
                  this.submitted = true;
                  console.log("hhhhhhhhhhhhhhhhhhh")
                },
              });}

        ///////////////////////////
     
    getListClasse()
      {
        this.slotervice.getAllSlotEpmloisTemp().subscribe(res => {
          this.slotList = res
          console.log(res)
         
        } , error => {
            console.error(error)
        } , ()=> {
    
        })
      }
      getbyid(id:number)
      {
        this.slotervice.getSlotEpmloisTempById(id).subscribe(res => {
          this.viewmodelslot = res
          console.log(res)
        } , error => {
            console.error(error)
        } , ()=> {
    
        })
      }
      ////
    
      getslot(id:number)
      {
    
        if(id!=undefined && id !=null)
        {
          this.slotervice.getSlotEpmloisTempById(id).subscribe(
            res=>{
              console.log(res);
              this.viewmodelslot=res 
          },error=>{
            console.error(error) 
          },()=>{ 
            this.FormGroupviewupd.get("timestart")?.setValue(this.viewmodelslot.timestart);
            this.FormGroupviewupd.get("timeend")?.setValue(this.viewmodelslot.timeend);
            this.FormGroupviewupd.get("anneescolair")?.setValue(this.viewmodelslot.anneescolair);
            this.FormGroupviewupd.get("jour")?.setValue(this.viewmodelslot.jour);
            this.FormGroupart.updateValueAndValidity()
          });
        }
      }
      
      ////


      deleteSlot(levelId:number)
      {
        if(levelId!=undefined && levelId !=null)
        {
          Swal.fire({
            title: 'Êtes-vous sûr?',
            text: 'Vous ne pourrez pas récupérer entite slot!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Oui, supprimez-la!',
            cancelButtonText: 'Non, gardez-la'
          }).then((result : any) => {
            if (result.value) {
             // alert(id);
              this.slotervice.deleteSlotEpmloisTemp(levelId)
              .subscribe(res=>{
                this.getListClasse()
              })
            Swal.fire(
              'Supprimé!',
              'Votre slot entite a été supprimée.',
              'success'
            )
         
            } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Annulé',
              'Votre slot est en sécurité 🙂',
              'error'
            )
            }
          })
        }
      }
    

 

 
  
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CalendarOptions } from '@fullcalendar/core';
import { ClassesDto } from 'src/app/models/ClassesDto';
import { EmploiEleve } from 'src/app/models/emploi-eleve';
import { EmploiTemps } from 'src/app/models/emploi-temps';
import { LabelValu } from 'src/app/models/label-valu';
import { MatiereDto } from 'src/app/models/matiere-dto';
import { ProfesseurDto } from 'src/app/models/professeur-dto';
import { SeanceDto } from 'src/app/models/seance-dto';
import { SlotEpmloisTempsDto } from 'src/app/models/SlotEpmloisTempsDto';
import { ClassService } from 'src/app/services/serviceProject/class.service';
import { MatiereService } from 'src/app/services/serviceProject/matiere.service';
import { SeanceService } from 'src/app/services/serviceProject/seance.service';
import { SlotTimeService } from 'src/app/services/serviceProject/slot-time.service';
import Swal from 'sweetalert2';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.scss']
})
export class SeanceComponent implements OnInit {
  FormGroupart!:FormGroup
  FormGroupviewupd!:FormGroup
  FormGroupClass!:FormGroup
  classeList:ClassesDto[] = [];
  classeListt:ClassesDto[]=[]
  matiereList:MatiereDto[] = [];
  profList:ProfesseurDto[] = [];
  slotlist:LabelValu[] = [];
  seancelist:SeanceDto[] = [];
  emploiTempsList:EmploiTemps[]= [];
  role:string
  slotTimeList:SlotEpmloisTempsDto[]=[]
  slotList:SlotEpmloisTempsDto[]=[]
  idclasse:number

  submitted:boolean = false;
  modelclass:SeanceDto=new SeanceDto();
  viewmodelclass:SeanceDto=new SeanceDto();
  selectedClass: any | null = null;
  newClass: any = { id: 0, titre: '', annescolair: '' };
  emploiEleve:EmploiEleve[]= []; 
  calendarOptions: CalendarOptions;
  
  constructor(private seanceservice:SeanceService,private matierervice:MatiereService,private classService:ClassService,
    private slotervice:SlotTimeService) { }
  ngOnInit(): void {
  //  this.getListClasse()
  this.role = localStorage.getItem('role')
  this.getListprofeco()
  this.getListMatere()
  this.getListClasses()
  this.getListslot()
this.getListseance()

  // this.loadEmploiDuTemps(this.idclasse)
    this.FormGroupart = new FormGroup({
      'salle' : new FormControl('', Validators.required),
      'anneescolair' : new FormControl('', Validators.required),
      'matiereid' : new FormControl('', Validators.required),
      'professeurid' : new FormControl('', Validators.required),
      'classesid' : new FormControl('', Validators.required),
      'emploisTempsIds' : new FormControl('', Validators.required),
    });

    this.FormGroupviewupd = new FormGroup({
      'salle' : new FormControl('', Validators.required),
      'anneescolair' : new FormControl('', Validators.required),
      'matiereid' : new FormControl('', Validators.required),
      'professeurid' : new FormControl('', Validators.required),
      'classesid' : new FormControl('', Validators.required),
      'emploisTempsIds' : new FormControl('', Validators.required),
    });
    this.FormGroupClass= new FormGroup({
      'idclasse' : new FormControl('', Validators.required),
     
    })
  }

  addSeance()
  {
    if(this.FormGroupart.invalid && this.submitted ==true)
    {
      console.log(this.FormGroupart.value);
      return  ;
    }
   
   

    this.modelclass.salle = this.FormGroupart.value.salle;
    this.modelclass.anneescolair = this.FormGroupart.value.anneescolair;
     this.modelclass.matiereid = this.FormGroupart.value.matiereid;
    this.modelclass.professeurid= this.FormGroupart.value.professeurid;
    this.modelclass.classesid= this.FormGroupart.value.classesid;
    this.modelclass.emploisTempsIds = this.FormGroupart.value.emploisTempsIds;
    
    console.log("bouzidi fi paris",this.modelclass)
    
    
    
    this.seanceservice.saveSeance(this.modelclass)
        .subscribe({
          next: (res) => {
            alert("seance a été ajouté!")
           // this.router.navigate(['/vendeur/gerrerenchre']); 
         //  this.getListClasse()
            console.log('modelclass',res)
            this.submitted = true;
           
          },
        });}


        ///modifier
        updateSeance()
        {
          if(this.FormGroupviewupd.invalid && this.submitted ==true)
          {
            console.log(this.FormGroupviewupd.value);
            return  ;
          }
          this.viewmodelclass.salle = this.FormGroupviewupd.value.salle;
          this.viewmodelclass.anneescolair = this.FormGroupviewupd.value.anneescolair;
           this.viewmodelclass.matiereid= this.FormGroupviewupd.value.matiereid;
          this.viewmodelclass.professeurid= this.FormGroupviewupd.value.professeurid;
          this.viewmodelclass.classesid= this.FormGroupviewupd.value.classesid;
          this.viewmodelclass.emploisTempsIds = this.FormGroupviewupd.value.emploisTempsIds;
          this.seanceservice.saveSeance(this.viewmodelclass)
              .subscribe({
                next: (res) => {
                  alert("seance a été modifie!")
                //  this.getListClasse()
                 // this.router.navigate(['/vendeur/gerrerenchre']); 
                  console.log("seance",res.id)
                  this.submitted = true;
                  console.log("hhhhhhhhhhhhhhhhhhh")
                },
              });}

        ////////////les listes///////////////
     
    getListMatere()
      {
        this.matierervice.findAllMatieres().subscribe(res => {
          this.matiereList = res
          console.log("ghaithhhhhh",res)
         
        } , error => {
            console.error(error)
        } , ()=> {
    
        })
      }


      getListslotTime()
      {
        this.slotervice.getAllSlotEpmloisTemp().subscribe(res => {
          this.slotList = res
          console.log("ghaithhhhhh",res)
         
        } , error => {
            console.error(error)
        } , ()=> {
    
        })
      }
/////////////////////
getListClasses()
{
  this.classService.getAllClasses().subscribe(res => {
    this.classeList = res
    console.log(res)
   
  } , error => {
      console.error(error)
  } , ()=> {

  })
}
///////////////////////
getListslot()


{
  this.seanceservice.findallslot().subscribe(res => {
    this.slotlist = res
    console.log("hhhhhhggfhhhh",res)
   
  } , error => {
      console.error(error)
  } , ()=> {

  })
}
////////
getListprofeco()
{
  this.seanceservice.findAllprof().subscribe(res => {
    this.profList = res
    console.log(res)
   
  } , error => {
      console.error(error)
  } , ()=> {

  })
}
//////
getListseance()
{
  this.seanceservice.findAllEmptemps().subscribe(res => {
    this.emploiTempsList = res
    
    console.log('emploi',res)
   
  } , error => {
      console.error(error)
  } , ()=> {

  })
}
////////////seancelist


      getbyid(id:number)
      {
        this.seanceservice.findById(id).subscribe(res => {
        this.viewmodelclass = res
          console.log(res)
        } , error => {
            console.error(error)
        } , ()=> {
    
        })
      }
      ////
    
      getclass(id:number)
      {
    
        if(id!=undefined && id !=null)
        {
          this.seanceservice.findById(id).subscribe(
            res=>{
              console.log(res);
              this.viewmodelclass=res 
          },error=>{
            console.error(error) 
          },()=>{ 
          
         
          /*   this.FormGroupviewupd.get("titre")?.setValue(this.viewmodelclass.titre);
            this.FormGroupviewupd.get("annescolair")?.setValue(this.viewmodelclass.annescolair);
            this.FormGroupart.updateValueAndValidity() */
          });
        }
      }
      
      ////


      deleteSeance(id:number)
      {
        alert('helooooooooo')
        if(id!=undefined && id !=null)
        {
          Swal.fire({
            title: 'Êtes-vous sûr?',
            text: 'Vous ne pourrez pas récupérer entite seance!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Oui, supprimez-la!',
            cancelButtonText: 'Non, gardez-la'
          }).then((result : any) => {
            if (result.value) {
             // alert(id);
              this.seanceservice.deleteSeanceById(id)
              .subscribe(res=>{
               // this.getListClasse()
              })
            Swal.fire(
              'Supprimé!',
              'Votre seance entite a été supprimée.',
              'success'
            )
         
            } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Annulé',
              'Votre seance est en sécurité 🙂',
              'error'
            )
            }
          })
        }
      }

      getAllSlot(){
        this.slotervice.getAllSlotEpmloisTemp().subscribe(res => {
          this.slotTimeList = res
          
          console.log('emploi',res)
         
        } , error => {
            console.error(error)
        } , ()=> {
      
        })
      }
    
getEmploiByClasse(idclasse:number){
  {
    this.slotervice.getEpmloisTempsByClasse(idclasse).subscribe(res => {
      this.emploiEleve = res
      console.log("ghaithhhhhh",res)
     
    } , error => {
        console.error(error)
    } , ()=> {
  
    })

}
}
getListClasse()
{
  this.classService.getAllClasses().subscribe(res => {
    this.classeListt = res
    console.log('liste de classe',res)
   
  } , error => {
      console.error(error)
  } , ()=> {

  })
}
recupeIdclasse(){

  this.idclasse= this.FormGroupClass.value.idclasse
  console.log('gggg',this.idclasse)
  if (this.idclasse){
    this.getEmploiByClasse(this.idclasse)
  }
}
/////////// CALENDRIER ////////////////

// loadEmploiDuTemps(idclasse: number) {
//   this.slotervice.getEpmloisTempsByClasse(idclasse).subscribe((data) => {
//     console.log('5555',this.idclasse)
//     console.log('data',data)
 
//     const events = [
//       {
//         title: data.matiere.nomMatiere,
//         start: data.emploisTemps.timestart,  
//         end: data.emploisTempsIds.timeend,      
//         description: `Salle: ${data.salle}, Professeur: ${data.professeur.firstName} ${data.professeur.lastName}`
//       }
//     ];

   
//     this.calendarOptions = {
//       plugins: [dayGridPlugin],
//       initialView: 'dayGridMonth',
//       events: events  
//     };
//   }, error => {
//     console.error('Erreur lors de la récupération de l\'emploi du temps', error);
//   });
// }
}

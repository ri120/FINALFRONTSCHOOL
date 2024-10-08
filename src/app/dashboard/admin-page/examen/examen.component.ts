import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClassesDto } from 'src/app/models/ClassesDto';
import { ExamenDto } from 'src/app/models/examen-dto';
import { LabelValu } from 'src/app/models/label-valu';
import { ListDevoirDto } from 'src/app/models/list-devoir-dto';
import { ListExamenDto } from 'src/app/models/list-examen-dto';
import { MatiereDto } from 'src/app/models/matiere-dto';
import { ProfesseurDto } from 'src/app/models/professeur-dto';
import { ClassService } from 'src/app/services/serviceProject/class.service';
import { DevoirsService } from 'src/app/services/serviceProject/devoirs.service';
import { ExamenService } from 'src/app/services/serviceProject/examen.service';
import { MatiereService } from 'src/app/services/serviceProject/matiere.service';
import { SeanceService } from 'src/app/services/serviceProject/seance.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.scss']
})
export class ExamenComponent implements OnInit {
  examens: ExamenDto[];
  examenForm: FormGroup;
  submitted:boolean = false;
  modelexamen:ExamenDto =new ExamenDto();
  editing: boolean = false;
  editedExamenId: number | null = null;
  matiereList:MatiereDto[] = [];
  profList: ProfesseurDto[]=[];
  classeListt:ClassesDto[]=[]
  examensListt:ListExamenDto[]=[]
  FormGroupClassMatiere!:FormGroup
  examensList: ListExamenDto[]=[];
  file!: File;
  // classeList:ClassesDto[]=[]
  classeList: LabelValu[];
  imgUrl: string | ArrayBuffer = 'assets/img/about-2.jpg'
  role:string;
  selectedClasseId: number | null = null;
  selectedMatiereId: number | null = null;
  examenList: ListExamenDto[]=[]
  idmatiere:number
  idclasse:number
  devoirsListt:ListDevoirDto[]=[]

  displayedColumns: string[] = ['idExamen', 'numExamen', 'date', 'duree', 'classesIds', 'professeurId', 'matiereId'];
  constructor(
    private examenService: ExamenService,private matierervice: MatiereService,
   private seanceservice:SeanceService, private classservice:ClassService, private devoirService:DevoirsService
  ) {}

  ngOnInit(): void {
    this.role = localStorage.getItem('role')
    this.examenForm = new FormGroup({
      numExamen: new FormControl('',Validators.required),
      date:  new FormControl ('',Validators.required),
      duree: new FormControl('',Validators.required),
      classesIds: new FormControl('',Validators.required),
      matiereId : new FormControl('',Validators.required),
    });
    
   this.getListClasse()
   this.getListMatiere()
   this.getListprof()
   this.getListExamens()
   this.getListclasses()
   this.FormGroupClassMatiere= new FormGroup({
    'idclasse' : new FormControl('', Validators.required),
    'idMatiere' : new FormControl('', Validators.required),
  })
  }
  saveExamen() {
    if(this.examenForm.invalid && this.submitted ==true)
      {
        console.log(this.examenForm.value);
        return  ;
      }
 
    this.modelexamen.numExamen =this.examenForm.value.numExamen
    this.modelexamen.date =this.examenForm.value.date
    this.modelexamen.duree =this.examenForm.value.duree
    this.modelexamen.classesIds =this.examenForm.value.classesIds
    this.modelexamen.matiereId =this.examenForm.value.matiereId
   console.log('kkkk',this.modelexamen)

this.examenService.createExamen(this.modelexamen)
     .subscribe({
      next:(res) => {
        alert("examen a été ajouté!")
      
        this.submitted = true
        this.getListExamens()
      }
     })
     
      console.log('Ajout d\'un nouveau examen:', this.examenForm.value);
    

    // Réinitialisation des valeurs du formulaire
    this.examenForm.reset();
    this.editing = false;
    this.editedExamenId = null;
  }
  getListExamens(){
    this.examenService.findAllExamens().subscribe(res => {
      this.examensList = res
      console.log('liste de examens',res)
     
    } , error => {
        console.error(error)
    } , ()=> {
  
    })
   }
   getListClasse()
   {
     this.classservice.findallclasses().subscribe(res => {
       this.classeList = res
       console.log(res)
      
     } , error => {
         console.error(error)
     } , ()=> {
 
     })
   }


   deleteExamen(id: number) {
    if(id!=undefined && id !=null)
      {
        Swal.fire({
          title: 'Êtes-vous sûr?',
          text: 'Vous ne pourrez pas récupérer entite examen!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Oui, supprimez-la!',
          cancelButtonText: 'Non, gardez-la'
        }).then((result : any) => {
          if (result.value) {
           // alert(id);
            this.examenService.deleteExamenById(id)
            .subscribe(res=>{
              this.getListExamens()
            })
          Swal.fire(
            'Supprimé!',
            'Votre examen entite a été supprimée.',
            'success'
          )
       
          } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Annulé',
            'Votre examen est en sécurité 🙂',
            'error'
          )
          }
        })

    }

    // Suppression d'un devoir avec le service
    // Implémentez la logique pour supprimer le devoir avec le service
    console.log('Suppression du examen avec ID:', id);
  }






  editExamen(examen: ExamenDto): void {
    // Remplir le formulaire avec les données de l'examen sélectionné pour la modification
    this.examenForm.patchValue({
      idExamen: examen.idExamen,
      numExamen: examen.numExamen,
      date: examen.date,
      duree: examen.duree,
      classesIds: examen.classesIds,
     
      matiereId: examen.matiereId
    });
  }
  //////////////////////   
  getListMatiere()
  {
    this.matierervice.findAllMatieres().subscribe(res => {
      this.matiereList = res
      
      console.log("ghaithhhhhh",res)
     
    } , error => {
        console.error(error)
    } , ()=> {

    })
  }
  /////////////////
 

//////

//////////////////
getListprof()
{
  this.seanceservice.findAllprof().subscribe(res => {
    this.profList = res
    console.log(res)
   
  } , error => {
      console.error(error)
  } , ()=> {

  })
}

onFileInput(files: FileList | null): void {
  // alert("1" + JSON.stringify(files))
  if (files) {
    //  alert("2" + JSON.stringify(files))
    this.file = files.item(0) as File;
    if (this.file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(this.file);
      fileReader.onload = (event) => {
        if (fileReader.result) {
          this.imgUrl = fileReader.result;
        }
      };
    }
  }
}
changeSource(event: any) {
  event.target.src = "assets/img/about-2.jpg";
}
getListExamenByClassAndMatiere()
{
  this.examenService.findAllExamByclasseAndmatiere(this.selectedClasseId,this.selectedMatiereId).subscribe(res => {
    this.examensListt = res
    console.log("ghaithhhhhh",res)
   
  } , error => {
      console.error(error)
  } , ()=> {

  })
}
onClassChange(event: Event): void {
  
  const selectElement = event.target as HTMLSelectElement;
  this.selectedClasseId = Number(selectElement.value);
  console.log ('heloooo',this.selectedClasseId)
  if (this.selectedClasseId !== null && !isNaN(this.selectedClasseId)) {

    this.classservice.getAllClasses().subscribe((data) => {
     console.log('hii',data)
    this.classeListt = data;
    this.getListExamenByClassAndMatiere()
    });
  }
} 
onMatiereChange(event: Event): void {
  const selectElement = event.target as HTMLSelectElement;
  this.selectedMatiereId = Number(selectElement.value);
  console.log ('rim',this.selectedMatiereId)
  if (this.selectedMatiereId !== null && !isNaN(this.selectedMatiereId)) {

    this.matierervice.findAllMatieres().subscribe((data) => {
     console.log('hii',data)
    this.matiereList = data;
    this.getListExamenByClassAndMatiere()
  
    });
  }
}

getListclasses(){
  this.classservice.getAllClasses().subscribe(res => {
    this.classeListt = res
    
    console.log("ghaithhhhhh",res)
   
  } , error => {
      console.error(error)
  } , ()=> {

  })
}
getListExamenByclasseAndMatiere(idclasse:number, idMatiere: number)
{
  this.examenService.findAllExamByclasseAndmatiere(idclasse,idMatiere).subscribe(res => {
    this.examenList = res
    console.log("ghaithhhhhh",res)
   
  } , error => {
      console.error(error)
  } , ()=> {

  })
}

recupeIdclasseIdmatiere(){

  this.idmatiere =this.FormGroupClassMatiere.value.idMatiere
  this.idclasse= this.FormGroupClassMatiere.value.idclasse
  if (this.idmatiere && this.idclasse){
    this.getListExamenByclasseAndMatiere(this.idmatiere, this.idclasse)
  }
}

}
 


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; // Importez FormBuilder et FormGroup
import { ClassesDto } from 'src/app/models/ClassesDto';
import { DevoirDto } from 'src/app/models/devoir-dto';
import { LabelValu } from 'src/app/models/label-valu';
import { ListDevoirDto } from 'src/app/models/list-devoir-dto';
import { MatiereDto } from 'src/app/models/matiere-dto';
import { ProfesseurDto } from 'src/app/models/professeur-dto';
import { ClassService } from 'src/app/services/serviceProject/class.service';
import { DevoirsService } from 'src/app/services/serviceProject/devoirs.service';
import { MatiereService } from 'src/app/services/serviceProject/matiere.service';
import { SeanceService } from 'src/app/services/serviceProject/seance.service';
import { ChangeDetectorRef } from '@angular/core';
import Swal from 'sweetalert2';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';
@Component({
  selector: 'app-devoirs',
  templateUrl: './devoirs.component.html',
  styleUrls: ['./devoirs.component.scss']
})
export class DevoirsComponent implements OnInit {
  devoirs: DevoirDto[] = [];
  devoirForm: FormGroup; // Déclarez le formulaire réactif FormGroup
  editing: boolean = false;
  editedDevoirId: number | null = null;
  role:string;
  FormGroupviewupd!:FormGroup
  FormGroupClassMatiere!:FormGroup
  modeldevoir:DevoirDto =new DevoirDto();
  submitted:boolean = false;
 
  matiereList:MatiereDto[] = [];
  profList:ProfesseurDto[]= [];
  file!: File;
    imgUrl: string | ArrayBuffer = 'assets/img/blog-3.jpg'
    classeList: LabelValu[];
    devoirsList:ListDevoirDto[]=[]
    devoirsListt:ListDevoirDto[]=[]
    idmatiere:number
    idclasse:number
    selectedClasseId: number | null = null;
    selectedMatiereId: number | null = null;
    urldoc! :string

    classeListt:ClassesDto[]=[]
  constructor(private devoirsService: DevoirsService,
    private classService:ClassService,
    private matierervice:MatiereService,
    private seanceservice:SeanceService,
  private devoirservices:DevoirsService,
  private cdr: ChangeDetectorRef
) {}
isPdfLoaded = false;
private pdf: PDFDocumentProxy;

onLoaded(pdf: PDFDocumentProxy) {
  this.pdf = pdf;
  this.isPdfLoaded = true;
}
  ngOnInit(): void {
    // this.loadDevoirs();
    this.role = localStorage.getItem('role')
    this.devoirForm = new FormGroup({
      'tache' : new FormControl('',Validators.required),
      'dateDevoir' : new FormControl('',Validators.required),
      'classesId' : new FormControl('', Validators.required),
      'matiereId' : new FormControl('', Validators.required),
     
      
    });
    this.FormGroupviewupd = new FormGroup({
      'tache' : new FormControl('', Validators.required),
      'dateDevoir' : new FormControl('', Validators.required),
      'classesId' : new FormControl('', Validators.required),
      'matiereId' : new FormControl('', Validators.required),
      'professeurId' : new FormControl('', Validators.required),
    });
    this.FormGroupClassMatiere= new FormGroup({
      'idclasse' : new FormControl('', Validators.required),
      'idMatiere' : new FormControl('', Validators.required),
    
    });
    this. getListClasses()
    this.getListMatiere()
    this.getListprof()
    // this.getListDevoirs()
    // this.getListDevoirByProf()
    this.getListclasse()

  }
 
  
////////// ADD DEVOIR ////////
  saveDevoir() {
    console.log('fom',this.devoirForm.value)
    if(this.devoirForm.invalid && this.submitted ==true)
      {
        console.log(this.devoirForm.value);
        return  ;
      }
    this.modeldevoir.tache =this.devoirForm.value.tache
    this.modeldevoir.dateDevoir =this.devoirForm.value.dateDevoir
    this.modeldevoir.classesId =this.devoirForm.value.classesId
    this.modeldevoir.matiereId =this.devoirForm.value.matiereId
    this.modeldevoir.titre =this.devoirForm.value.titre
   

this.devoirsService.createDevoir(this.modeldevoir)
     .subscribe({
      next:(res)=>{
        console.log('hhhhhh',res.idDevoir)
        console.log('hhhhhh',this.file)
        this.devoirsService.uploadDevoirDtoFile(res.idDevoir, this.file).subscribe(
          val =>  {} , error => { alert('oups')} , () => {
            this.submitted = true ; 
            console.log('akka mouna',this.file)
          alert("devoir a été ajouté!")
          // this.router.navigate(['/vendeur/gererarticle']); 
           // this.FormGroupart.reset();
         //   this.toastrService.success('Success!', 'produit a été ajouté!');
          });
        alert("devoir a été ajouté!")
       
       this.submitted = true
       this.getListDevoirByProf()
      }
      
     })
   
      console.log('Ajout d\'un nouveau devoir:', this.devoirForm.value);
  
    this.devoirForm.reset();
    this.editing = false;
    this.editedDevoirId = null;
  }

  ///// GET LIST DEVOIRS //////////
  // getListDevoirs(){
  //   this.devoirservices.findAllDevoirs().subscribe(res => {
  //     this.devoirsList = res
  //     console.log('liste de devoirs',res)
     
  //   } , error => {
  //       console.error(error)
  //   } , ()=> {
  
  //   })
  //  }
///////// UPDATE DEVOIR /////////
   updateDevoir()
        {
          if(this.FormGroupviewupd.invalid && this.submitted ==true)
          {
            console.log(this.FormGroupviewupd.value);
            return  ;
          }
          this.modeldevoir.tache = this.FormGroupviewupd.value.tache;
          this.modeldevoir.dateDevoir = this.FormGroupviewupd.value.dateDevoir;
           this.modeldevoir.classesId = this.FormGroupviewupd.value.classesId;
          this.modeldevoir.matiereId = this.FormGroupviewupd.value.matiereId;
       
          this.devoirsService.updateDevoir(this.modeldevoir)
              .subscribe({
                next: (res) => {
                  alert("devoir a été modifie!")
                  console.log(res)
                  this.submitted = true;
                  console.log("hhhhhhhhhhhhhhhhhhh")
                },
              });}
             
              
//////////// DELETE DEVOIR /////////
  deleteDevoir(id: number) {
    if(id!=undefined && id !=null)
      {
        Swal.fire({
          title: 'Êtes-vous sûr?',
          text: 'Vous ne pourrez pas récupérer entite devoir!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Oui, supprimez-la!',
          cancelButtonText: 'Non, gardez-la'
        }).then((result : any) => {
          if (result.value) {
           // alert(id);
            this.devoirsService.deleteDevoirById(id)
            .subscribe(res=>{
              this.getListDevoirByProf()
            })
          Swal.fire(
            'Supprimé!',
            'Votre devoir entite a été supprimée.',
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

    // Suppression d'un devoir avec le service
    // Implémentez la logique pour supprimer le devoir avec le service
    console.log('Suppression du devoir avec ID:', id);
  }

  cancelEdit() {
    // Annulation de l'édition ou de l'ajout d'un nouveau devoir
    this.devoirForm.reset();
    this.editing = false;
    this.editedDevoirId = null;
  }
/////////// GET LIST CLASSES ////////////
  getListClasses() {
    this.classService.findallclasses().subscribe(res => {
      this.classeList = res
      console.log(res)
    }, error => {
      console.error(error)
    }, () => {
    })
  }
/////////////// GET LIST MATIERE ///////
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
//////// GET LIST PROFS ////////
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
///// ON FILE INPUT //////////
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
  event.target.src = "assets/img/blog-3.jpg";
}
//////////get devoir by prof ///////
getListDevoirByProf()
{
  this.devoirservices.findAllDevoirsByProf().subscribe(res => {
    this.devoirsList = res
    console.log("ghaithhhhhh",res)
   
  } , error => {
      console.error(error)
  } , ()=> {

  })
} 

getListDevoirByclasseAndMatiere(idclasse:number, idMatiere: number)
{
  this.devoirservices.findAllDevoirsByclasseAndmatiere(idclasse,idMatiere).subscribe(res => {
    this.devoirsListt = res
    console.log("ghaithhhhhh",res)
   
  } , error => {
      console.error(error)
  } , ()=> {

  })
}


// onClassChange(event: Event): void {
//   const selectElement = event.target as HTMLSelectElement;
//   this.selectedClasseId = Number(selectElement.value);
//   console.log ('heloooo',this.selectedClasseId)
//   if (this.selectedClasseId !== null && !isNaN(this.selectedClasseId)) {
//     this.devoirservices.findAllDevoirsByclasseAndmatiere(this.selectedClasseId).subscribe((data) => {
//      console.log('hii',data)
//     this.devoirsList = data;
//     });
//   }
// }

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

// onClassChange(event: Event): void {
  
//   const selectElement = event.target as HTMLSelectElement;
//   this.selectedClasseId = Number(selectElement.value);
//   console.log ('heloooo',this.selectedClasseId)
//   if (this.selectedClasseId !== null && !isNaN(this.selectedClasseId)) {
   
//     this.classService.getAllClasses().subscribe((data) => {
//      console.log('hii',data)
//     this.classeListt = data;
//     if(this.selectedMatiereId && this.selectedClasseId){
//       this.getListDevoirByclasseAndMatiere()
//     }
    
//     });
//   }
// } 
// onMatiereChange(event: Event): void {
//   const selectElement = event.target as HTMLSelectElement;
//   this.selectedMatiereId = Number(selectElement.value);
//   console.log ('rim',this.selectedMatiereId)
//   if (this.selectedMatiereId !== null && !isNaN(this.selectedMatiereId)) {

//     this.matierervice.findAllMatieres().subscribe((data) => {
//      console.log('hii',data)
//     this.matiereList = data;
//     if(this.selectedMatiereId && this.selectedClasseId){
//       this.getListDevoirByclasseAndMatiere()
//     }
    
//     });
//   }
// }
getListclasse() {
  this.classService.getAllClasses().subscribe(res => {
    this.classeListt = res
    console.log(res)
  }, error => {
    console.error(error)
  }, () => {
  })
}

recupeIdclasseIdmatiere(){

  this.idmatiere =this.FormGroupClassMatiere.value.idclasse
  this.idclasse= this.FormGroupClassMatiere.value.idMatiere
  if (this.idmatiere && this.idclasse){
    this.getListDevoirByclasseAndMatiere(this.idmatiere, this.idclasse)
  }
}
getbyidviewpdf(id: number) {
 
  this.devoirservices.findDevoirById(id).subscribe(res => {
    this.modeldevoir = res
    console.log(res)
    this.urldoc = res.tache
    console.log(this.urldoc)
    // this.cdr.detectChanges();
  }, error => {
    console.error(error)
  }, () => {

  })
}

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SlotEpmloisTempsDto } from 'src/app/models/SlotEpmloisTempsDto';
import { SlotEmploisTempsService } from 'src/app/services/serviceProject/slot-emplois-temps.service';
import { EleveService } from 'src/app/services/serviceProject/eleve.service';
import { Eleve } from 'src/app/models/eleve';
import { NiveauScolaire } from 'src/app/models/niveau-scolaire';
import { ParentService } from 'src/app/services/serviceProject/parent.service';
import { ParentDto } from 'src/app/models/parent-dto';
import { ReglementDto } from 'src/app/models/reglement-dto';
import { ReglementService } from 'src/app/services/serviceProject/reglement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-eleves',
  templateUrl: './gestion-eleves.component.html',
  styleUrls: ['./gestion-eleves.component.scss']
})
export class GestionElevesComponent implements OnInit {
  paiementEffectue: { [key: number]: boolean } = {};


  niveauScolaires = Object.values(NiveauScolaire);
  selectedSchoolLevel: NiveauScolaire | null = null;
 
  ElevesClasses:Eleve[] =[]
  parentList:ParentDto[]=[]
  modelreglement:ReglementDto= new ReglementDto()
  submitted !:boolean 
  searchTerm: string = '';
  eleves: Eleve[] = [];
  filteredEleves: Eleve[] = [];
  recherche:string=""
  FormGroupviewupd!:FormGroup
  ideleve:number
  nomParent!:string
  idParent : number
  recNiveau : NiveauScolaire
  selected : Event
  constructor(
    private serviceEleve:EleveService,
    private _serviceParent:ParentService,
    private _serviceReglement:ReglementService
  ) {}
  idDevoir?: number;
  tache: string; // file serie
  dateDevoir: Date;
  classesId?: number[];
  matiereId?: number;
  professeurId?: number;
  ngOnInit(): void {
    this.FormGroupviewupd = new FormGroup({
      'modepaiement' : new FormControl('', Validators.required),
      'operation' : new FormControl('', Validators.required),
      'montant' : new FormControl('', Validators.required),
      'parentId' : new FormControl('', Validators.required),
      'eleveId' : new FormControl('', Validators.required),
    }); 
    this.getListarent()
    this.getStudentByNiv(this.selected)
}
addReglemet()
{
  if(this.FormGroupviewupd.invalid && this.submitted ==true)
  {
    console.log(this.FormGroupviewupd.value);
    return  ;
  }
  
  this.modelreglement.modepaiement = this.FormGroupviewupd.value.modepaiement;
  this.modelreglement.operation= this.FormGroupviewupd.value.operation;
  this.modelreglement.montant = this.FormGroupviewupd.value.montant;
  this.modelreglement.parentId = this.idParent;
  this.modelreglement.eleveId= this.ideleve
 console.log("hhhh", this.modelreglement)
  this._serviceReglement.saveReglement(this.modelreglement)
      .subscribe({
        next: (res) => {
          alert("Reglement a été ajouté!")
         
          console.log("hhhh",res)
          this.submitted = true;
          console.log("hhhhhhhhhhhhhhhhhhh")
        },
      });
      this.paiementEffectue[this.ideleve] = true;
    }




getListarent()
{
  this._serviceParent.getAllParents().subscribe(res => {
    this.parentList = res
    console.log("ahmed",res)
   
  } , error => {
      console.error(error)
  } , ()=> {

  })
}

getStudentByNiv(event: Event): void{
  
  const selectElement = event.target as HTMLSelectElement;

  const selectedSchoolLevel = selectElement.value as NiveauScolaire;
console.log(selectedSchoolLevel)

    this.serviceEleve.findAllElevesByNiveau(selectedSchoolLevel).subscribe(data => {
      this.recNiveau=selectedSchoolLevel
      this.ElevesClasses = data;
      this.filteredEleves = this.ElevesClasses;
     
    });
  }
  getStudenttByNiv(): void{
  
 
      this.serviceEleve.findAllElevesByNiveau(this.recNiveau).subscribe(data => {
        
        this.ElevesClasses = data;
        this.filteredEleves = this.ElevesClasses;
       
      });
    }
  
  
    getId(id:number){
this.ideleve=id
this. findParentByIdEleve(id)
    }
    findParentByIdEleve(id:number)
    {
      this._serviceParent.findParentById(id).subscribe(res => {

        this.nomParent  = res.firstName 
        this.idParent =res.id
        console.log('allala',res.id)
      } , error => {
          console.error(error)
      } , ()=> {
  
      })
    }
    deleteEleve(Id:number)
    {
      if(Id!=undefined && Id !=null)
      {
        Swal.fire({
          title: 'Êtes-vous sûr?',
          text: 'Vous ne pourrez pas récupérer entite classe!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Oui, supprimez-la!',
          cancelButtonText: 'Non, gardez-la'
        }).then((result : any) => {
          if (result.value) {
           // alert(id);
            this.serviceEleve.deleteEleveById(Id)
            .subscribe(res=>{
            
              this.getStudenttByNiv()
            })
          Swal.fire(
            'Supprimé!',
            'Votre classe entite a été supprimée.',
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
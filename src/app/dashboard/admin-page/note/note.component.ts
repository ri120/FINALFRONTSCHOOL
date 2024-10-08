import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClassesDto } from 'src/app/models/ClassesDto';
import { Eleve } from 'src/app/models/eleve';
import { ExamenDto } from 'src/app/models/examen-dto';
import { LabelValu } from 'src/app/models/label-valu';
import { ListExamenDto } from 'src/app/models/list-examen-dto';
import { ListNoteDto } from 'src/app/models/list-note-dto';
import { MatiereDto } from 'src/app/models/matiere-dto';
import { NoteDto } from 'src/app/models/note-dto';
import { ClassService } from 'src/app/services/serviceProject/class.service';
import { EleveService } from 'src/app/services/serviceProject/eleve.service';
import { ExamenService } from 'src/app/services/serviceProject/examen.service';
import { MatiereService } from 'src/app/services/serviceProject/matiere.service';
import { NoteService } from 'src/app/services/serviceProject/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'] // Assurez-vous d'avoir un fichier CSS pour les styles spécifiques si nécessaire
})
export class NoteComponent implements OnInit {
  notes: NoteDto[];
  noteForm: FormGroup;
  FormGroupMatiere:FormGroup
  showForm: boolean = false;
  isEditMode: boolean = false;
  editNoteId: number | null = null;
  submitted:boolean = false;
  modeldnote:NoteDto =new NoteDto();
  editing: boolean = false;
  editedNoteId: number | null = null;
  matiereList:MatiereDto[] = [];
  listEleve:Eleve[]=[]
  EleveList:Eleve[]=[]
  classes: ClassesDto[] = [];
  idEleve:number
  idExamen:number
  NoteList:NoteDto[]=[]
  NoteListt:ListNoteDto[]=[]
  NoteListByExam:ListNoteDto[]=[]

  selectedExamenId: number | null = null;
  examens: ListExamenDto[] = [];
  ClasseExams:ClassesDto[]=[];
  role:string
  idmatiere!:number
 
  constructor(
    private formBuilder: FormBuilder,
    private noteService: NoteService,
    private matierervice: MatiereService,
    private classService:ClassService,
    private examenService:ExamenService,
    private eleveService: EleveService
  ) {}

  ngOnInit(): void {

    this.noteForm = new FormGroup({
      'noteExam': new FormControl('', Validators.required),
      'remarque': new FormControl ('', Validators.required),
      'elevesId': new FormControl('', Validators.required),
      'examensId': new FormControl('', Validators.required),
    });
    this.FormGroupMatiere= new FormGroup({
      'idMatiere' : new FormControl('', Validators.required),
    })
    this. getListExamen()
    this.getListMatiere()
   this.role = localStorage.getItem('role')
  }

  getListExamen()
      {
        this.examenService.findAllExamens().subscribe(res => {
          this.examens = res
          console.log('rim',res)
         
        } , error => {
            console.error(error)
        } , ()=> {
    
        })
      }

    getElevByClasse(id:number){
      this.eleveService.findAllElevesAffecteByClasse(id).subscribe(res => {
        console.log('***',id)
        this.listEleve = res
        console.log("ghaithhhhhh",res)
       
      } , error => {
          console.error(error)
      } , ()=> {
    
      })
    } 
  saveNote() {
    console.log('fom',this.noteForm.value)
    if(this.noteForm.invalid && this.submitted ==true)
      {
        console.log(this.noteForm.value);
        return  ;
      }
    this.modeldnote.noteExam =this.noteForm.value.noteExam
    this.modeldnote.remarque =this.noteForm.value.remarque
    this.modeldnote.elevesId =this.idEleve
    this.modeldnote.examensId =this.selectedExamenId 
   console.log("thismodel",this.modeldnote)

this.noteService.createNote(this.modeldnote)
     .subscribe({
      next:(res)=>{
        alert("devoir a été ajouté!")
       
       this.submitted = true
   
      }
      
     })
   
      console.log('Ajout d\'un nouveau devoir:', this.noteForm.value);
    
    this.noteForm.reset();
    this.editing = false;
    this.editedNoteId = null;
  }

  getListNote()
  {
    this.noteService.findAllNotesByExamen(this.selectedExamenId).subscribe(res => {
      this.NoteListByExam = res
      console.log("ghaithhhhhh",res)
     
    } , error => {
        console.error(error)
    } , ()=> {
  
    })
  }
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
  getListElvByEx(id:number)
  {
    this.noteService.findAllElevesByExamens(id).subscribe(res => {
      this.EleveList = res
      console.log("ghaithhhhhh",res)
     
    } , error => {
        console.error(error)
    } , ()=> {
  
    })
  }
  onClassChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedExamenId = Number(selectElement.value);
    console.log ('heloooo',this.selectedExamenId)
    if (this.selectedExamenId !== null && !isNaN(this.selectedExamenId)) {

      this.noteService.findAllClassByExamen(this.selectedExamenId).subscribe((data) => {
       console.log('hii',data)
      this.ClasseExams = data;
      });
    }
  }
  RecuperationIdEleve(id:number){
  this.idEleve = id
  }


  // getExamenByProf(event: Event): void{
  
  //   const selectElement = event.target as HTMLSelectElement;
  
  //   const selectedSchoolLevel = selectElement.value as NiveauScolaire;
  // console.log(selectedSchoolLevel)
  
  //     this.serviceEleve.findAllElevesByNiveau(selectedSchoolLevel).subscribe(data => {
  //       this.recNiveau=selectedSchoolLevel
  //       this.ElevesClasses = data;
  //       this.filteredEleves = this.ElevesClasses;
       
  //     });
  //   }

  getListNoteByElvMat(idMatiere: number)
  {
  
    this.noteService.findAllNotesByEleveMatiere(idMatiere).subscribe(res => {
      this.NoteListt = res
      console.log("ghaithhhhhh",res)
     
    } , error => {
        console.error(error)
    } , ()=> {
  
    })
  }

  recupeIdmatiere(){

    this.idmatiere =this.FormGroupMatiere.value.idMatiere
   console.log("id",this.idmatiere)
    if (this.idmatiere ){
      this.getListNoteByElvMat(this.idmatiere)
    }
  }

 


 
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Eleve } from 'src/app/models/eleve';
import { ListNoteDto } from 'src/app/models/list-note-dto';
import { MatiereDto } from 'src/app/models/matiere-dto';
import { EleveService } from 'src/app/services/serviceProject/eleve.service';
import { MatiereService } from 'src/app/services/serviceProject/matiere.service';
import { NoteService } from 'src/app/services/serviceProject/note.service';

@Component({
  selector: 'app-suivit-note',
  templateUrl: './suivit-note.component.html',
  styleUrl: './suivit-note.component.scss'
})
export class SuivitNoteComponent {

  constructor(
    private noteService: NoteService,
    private matierervice: MatiereService,
    // private classService:ClassService,
    // private examenService:ExamenService,
    private eleveService: EleveService
  ) {}
  role!:string
  NoteListt:ListNoteDto[]=[]
  matiereList:MatiereDto[] = [];
  FormGroupEleveMatiere:FormGroup
  idmatiere:number
  ideleve:number
  listEleve: Eleve[]=[]
  ngOnInit(): void {
    
    this.getListMatiere()
    this.getEleveByParent()
    this.FormGroupEleveMatiere= new FormGroup({
      'idMatiere' : new FormControl('', Validators.required),
      'idEleve' : new FormControl('', Validators.required),
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

  
  getListNoteElvByParentMat(idEleve:number,idMatiere:number)
  {
   console.log('heeeey',idEleve,idMatiere)
    this.noteService.findAllNotesEleveBypararentMatiere(idEleve,idMatiere).subscribe(res => {
      this.NoteListt = res
      console.log("note",res)
     
    } , error => {
        console.error(error)
    } , ()=> {
  
    })
  }
  recupeIdeleveIdmatiere(){

    this.idmatiere =this.FormGroupEleveMatiere.value.idMatiere
    this.ideleve =this.FormGroupEleveMatiere.value.idEleve
    console.log('heeeey',this.FormGroupEleveMatiere.value.idMatiere,)

    if (this.ideleve && this.idmatiere ){
      this.getListNoteElvByParentMat(this.ideleve,this.idmatiere)
    }
  }
  getEleveByParent() {

    this.eleveService.findAllElevesByParent().subscribe(
      
      res => {
       
        this.listEleve = res
       
        console.log("rimaaaaa",res)
       
      } , error => {
          console.error(error)
      } , ()=> {
    
      })
  }


}

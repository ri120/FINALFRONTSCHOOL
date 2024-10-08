import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListNoteDto } from 'src/app/models/list-note-dto';
import { MatiereDto } from 'src/app/models/matiere-dto';
import { EleveService } from 'src/app/services/serviceProject/eleve.service';
import { MatiereService } from 'src/app/services/serviceProject/matiere.service';
import { NoteService } from 'src/app/services/serviceProject/note.service';

@Component({
  selector: 'app-note-eleve',
  templateUrl: './note-eleve.component.html',
  styleUrl: './note-eleve.component.scss'
})

export class NoteEleveComponent implements OnInit{

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
  FormGroupMatiere:FormGroup
  idmatiere:number
  ngOnInit(): void {
    this.role = localStorage.getItem('role')
    this.getListMatiere()
    this.FormGroupMatiere= new FormGroup({
      'idMatiere' : new FormControl('', Validators.required),
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


  getListNoteByElvMat(idMatiere: number)
  {
  
    this.noteService.findAllNotesByEleveMatiere(idMatiere).subscribe(res => {
      this.NoteListt = res
      console.log("note",res)
     
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

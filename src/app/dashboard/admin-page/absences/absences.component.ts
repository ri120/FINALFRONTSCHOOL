import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AbsenceDto } from 'src/app/models/absence-dto'; // Assuming AbsenceDto model is defined
import { ClassesDto } from 'src/app/models/ClassesDto';
import { Eleve } from 'src/app/models/eleve';
import { LabelValu } from 'src/app/models/label-valu';
import { AbsenceService } from 'src/app/services/serviceProject/absence.service';
import { ClassService } from 'src/app/services/serviceProject/class.service';
import { EleveService } from 'src/app/services/serviceProject/eleve.service';
import { SeanceService } from 'src/app/services/serviceProject/seance.service';

@Component({
  selector: 'app-absence',
  templateUrl: './absences.component.html',
  styleUrls: ['./absences.component.scss']
})
export class AbsencesComponent implements OnInit {
  absenceForm: FormGroup;
  idClasseForm: FormGroup;
  submitted: boolean
  modelabsence: AbsenceDto= new AbsenceDto()
  slotlist:LabelValu[] = [];
  eleveListClasse:Eleve[] = [];
    classeList:ClassesDto[] = [];
    classesid:number
  constructor(private absenceService :AbsenceService,
    
    private seanceservice:SeanceService ,private serviceEleve:EleveService, private classService:ClassService) {
    
  }

  ngOnInit(): void {
    this.absenceForm = new FormGroup({
      'date': new FormControl('', Validators.required),
      'matiere': new FormControl('', Validators.required),
      'eleveID': new FormControl('', Validators.required),
      'slotEmploiTempsId': new FormControl('', Validators.required),
    });
    this.idClasseForm = new FormGroup({
      'classesid': new FormControl('', Validators.required),
    
    });
    this. getListslot()
    this. getListClasses()
   
  }

  saveAnsence() {
    if (this.absenceForm.invalid && this.submitted == true) {
      console.log(this.absenceForm.value);
      return;
    }
    this.modelabsence.date = this.absenceForm.value.date
    this.modelabsence.matiere = this.absenceForm.value.matiere
    this.modelabsence.eleveID = this.absenceForm.value.eleveID
    this.modelabsence.slotEmploiTempsId = this.absenceForm.value.slotEmploiTempsId
     console.log("hhhhhh",this.modelabsence)
    this.absenceService.createAbsence(this.modelabsence)
        .subscribe({
          next: (res) => {
            alert("Absence a été ajouté!")
            console.log(res)
           
            this.submitted = true;
          },
        });}

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
        getListEleveByClasse()
        {  if(this.idClasseForm.valid){
          this.serviceEleve.findAllElevesAffecteByClasse(this.idClasseForm.value.classesid).subscribe(res => {
            this.eleveListClasse = res
           
           
          } , error => {
              console.error(error)
          } , ()=> {
      
          })
        }
        }
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
      


  }


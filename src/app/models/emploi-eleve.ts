import { AbsenceDto } from "./absence-dto";
import { ClassesDto } from "./ClassesDto";
import { EmploiTemps } from "./emploi-temps";
import { MatiereDto } from "./matiere-dto";
import { ProfesseurDto } from "./professeur-dto";
import { SlotEpmloisTempsDto } from "./SlotEpmloisTempsDto";

export class EmploiEleve {
  
    id: number;
    salle: string;
    anneescolair: string;
    matiere:MatiereDto
    professeur:ProfesseurDto
    classes:ClassesDto;
    emploisTemps!: SlotEpmloisTempsDto[]

    absences?:AbsenceDto
}





// 'salle' : new FormControl('', Validators.required),
// 'anneescolair' : new FormControl('', Validators.required),
// 'matiereid' : new FormControl('', Validators.required),
// 'professeurid' : new FormControl('', Validators.required),
// 'classesid' : new FormControl('', Validators.required),
// 'emploisTempsIds' : new FormControl('', Validators.required),


import { ClassesDto } from "./ClassesDto";
import { MatiereDto } from "./matiere-dto";
import { ProfesseurDto } from "./professeur-dto";

export class EmploiTemps {

    id!: number;
    salle!: string;
    anneescolair!: string;
    prof:ProfesseurDto;
    matiere:MatiereDto;
    clasee:ClassesDto;
}


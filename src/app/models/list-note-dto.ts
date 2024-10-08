import { Eleve } from "./eleve";
import { ExamenDto } from "./examen-dto";

export class ListNoteDto {
    idNote?: number;
    noteExam: string;
    remarque: string;
    eleve:Eleve;
    examen:ExamenDto

}


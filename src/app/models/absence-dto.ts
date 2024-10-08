import { SlotEpmloisTempsDto } from "./SlotEpmloisTempsDto";

export class AbsenceDto {
    id?: number;
    date: Date;
    matiere:string;
    eleveID: number;
    slotEmploiTempsId:SlotEpmloisTempsDto[];
    professeurId:number
   
   
}



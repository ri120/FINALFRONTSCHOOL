import { MatiereDto } from "./matiere-dto";

export class ListExamenDto {

    idExamen?: number;
    numExamen: string;
    date: Date;
    duree: string;
    classesIds?: number[];
    matiereDto: MatiereDto

}


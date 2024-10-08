import { MatiereDto } from "./matiere-dto";

export class ListDevoirDto {
   
        idDevoir?: number;
        tache: string; 
        dateDevoir: Date;
        classesId?: number[];
        matiereDto: MatiereDto
        
       
    
}

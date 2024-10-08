export class ClassesDto {
        id!: number; // L'ID peut être optionnel lors de la création d'une nouvelle classe
        titre!: string;
        annescolair!: string;
        elevesIds!: number[]; // Liste d'IDs des élèves associés à cette classe
        seancesIds!: number[]; // Liste d'IDs des séances associées à cette classe
        devoirsIds!: number[]; // Liste d'IDs des devoirs associés à cette classe
        coursIds!: number[]; // Liste d'IDs des cours associés à cette classe
        examensIds!: number[]; // Liste d'IDs des examens associés à cette classe
      }
      


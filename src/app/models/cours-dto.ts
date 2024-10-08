export class CoursDto {
    id?: number;
    titre: string;
    urlcours: string;
    filecours: string;
    classesIds?: number[]; 
    professeurId?: number;
    matiereId: number
}

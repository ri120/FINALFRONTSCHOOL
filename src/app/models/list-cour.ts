import { MatiereDto } from "./matiere-dto";

export class ListCour {
    id?: number;
    titre: string;
    urlcours: string;
    filecours: string;
    classesId?: number[];
    matiereDto: MatiereDto
}



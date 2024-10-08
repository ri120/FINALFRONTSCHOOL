import { Eleve } from "./eleve";

export class Listeeglement {
    id?: number;
    modePaiement: string;
    operation: Date;
    montant: number;
    eleve: Eleve;
}

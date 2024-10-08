import { Component } from '@angular/core';





@Component({
  selector: 'app-calendrierscolaire',
  templateUrl: './calendrierscolaire.component.html',
  styleUrl: './calendrierscolaire.component.scss'
})
export class CalendrierscolaireComponent {
  displayedColumns = [
    'vancance',
    'position',
 
  ];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  name: string;
  position: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: '27-septembre 2023', name: 'Fête du Mouled'},
  {position: 'Dimanche15 octobre 2023', name: "Fête de L'évacuation"},
  {position: 'Du 30 Octobre à Dimanche 5 Novembre 2023', name: 'Vacances mi-trimestrielles'},
  {position: 'Dimanche 01 janvier 2024', name: 'Nouvel an'},
  {position: 'Du 17 décembre 2023 au 01 janvier 2024', name: "Vacances d’hiver "},
  {position: "Du Lundi 05 Février au Dimanche 11 Février 2024", name: 'Vacances 2ème trimestre'},
  {position: '1 jour – Dimanche 17 Décembre 2024', name: 'Fête de la révolution'},
  {position: "Du Lundi 18 Mars au Dimanche 31 Avril 2024", name: 'Vacances printemps'},
  {position: "Vendredi 21 Avril ou Samedi 22 Avril 2024(2 jours) (à confirmer)", name: 'Aid E lfitir'},
  {position: "– Jeudi 29 juin ou Vendredi 30 Juin 2024 (2 jours) (à confirmer)", name: 'Aid Elkbir'},
  {position: "Mardi 25 juillet 2024", name: 'Fête de la république'},
  {position: "Dimanche 13 Aout 2024", name: 'Fête de la femme'},
];



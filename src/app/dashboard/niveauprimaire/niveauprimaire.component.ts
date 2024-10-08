import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatModule } from 'src/app/appModules/mat.module';

import { MatiereService } from 'src/app/services/auth/service/matiere.service';
import { NiveauService } from 'src/app/services/auth/service/niveau.service';



@Component({
  selector: 'app-niveauprimaire',
  standalone: true,
  imports: [CommonModule, MatModule],
  templateUrl: './niveauprimaire.component.html',
  styleUrl: './niveauprimaire.component.scss'
})
export class NiveauprimaireComponent {
  longText = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`;
/* 
  niveaux: NiveauDto[];
  matieres: MatiereDto[];
 */
  selectedNiveauId: number;

  constructor(private niveauService: NiveauService,private matiereService: MatiereService) {}

  ngOnInit() {
   // this.loadNiveaux();
  }
  
/* 
  loadNiveaux() {
    this.niveauService.getNiveauxByType("Primaire").subscribe({
      next: (response) => {
        this.niveaux = response;
      },
      error: (error) => {
        console.error('Error loading niveaux:', error);
      },
    });
  } */

  loadMatieres(id:number) {
    console.log(id);
    this.selectedNiveauId=id
    this.matiereService.findAllMatieresByNiveau(this.selectedNiveauId).subscribe(
      (response) => {
       // this.matieres = response;
      },
      (error) => {
        console.error('Error loading matieres:', error);
      }
    );
  }
}

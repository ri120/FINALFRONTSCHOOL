import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatModule } from 'src/app/appModules/mat.module';

import { NiveauService } from 'src/app/services/auth/service/niveau.service';


@Component({
  selector: 'app-niveausecondaire',
  standalone: true,
  imports: [CommonModule, MatModule],
  templateUrl: './niveausecondaire.component.html',
  styleUrl: './niveausecondaire.component.scss'
})
export class NiveausecondaireComponent {
  longText = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`;
/* 
  niveaux: NiveauDto[]; */

  constructor(private niveauService: NiveauService) {}

  ngOnInit() {
  //  this.loadNiveaux();
  }

 /*  loadNiveaux() {
    this.niveauService.getNiveauxByType("Secondaire").subscribe({
      next: (response) => {
        console.log(response);
        this.niveaux = response;
        console.log(this.niveaux);
      },
      error: (error) => {
        console.error('Error loading niveaux:', error);
      },
    }); */
  }
/* } */

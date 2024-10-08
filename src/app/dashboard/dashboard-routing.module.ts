import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParentPageComponent } from './parent-page/parent-page.component';
import { MatiereComponent } from './admin-page/matiere/matiere.component';
import { MatiereFormComponent } from './admin-page/matiere-form/matiere-form.component';
import { GestionOffresComponent } from './admin-page/gestion-offres/gestion-offres.component';
import { MatiereListComponent } from './admin-page/matiere-list/matiere-list.component';

import { ClassesComponent } from './admin-page/classes/classes.component';
import { DevoirsComponent } from './admin-page/devoirs/devoirs.component';
import { AbsencesComponent } from './admin-page/absences/absences.component';
import { UploadCoursComponent } from './admin-page/upload-cours/upload-cours.component';

import { NoteComponent } from './admin-page/note/note.component';
import { ExamenComponent } from './admin-page/examen/examen.component';
import { SeanceComponent } from './admin-page/seance/seance.component';
import { NiveaubaseComponent } from './niveaubase/niveaubase.component';
import { NiveauprimaireComponent } from './niveauprimaire/niveauprimaire.component';
import { NiveausecondaireComponent } from './niveausecondaire/niveausecondaire.component';
import { EnseignantPageComponent } from './list-enseignant-page/enseignant-page.component';
import { CalendrierscolaireComponent } from './calendrierscolaire/calendrierscolaire.component';
import { AddMatiereComponent } from './admin-page/matiere/add-matiere/add-matiere.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SlottimeComponent } from './admin-page/slottime/slottime.component';
import { GestionElevesComponent } from './admin-page/gestion-eleves/gestion-eleves.component';
import { NoteEleveComponent } from './enfant-page/note-eleve/note-eleve.component';
import { SuivitNoteComponent } from './parent-page/suivit-note/suivit-note.component';

const routes: Routes = [
  {
    path: '',
    children: [
    
     
      {
        path: 'parent',
        component: ParentPageComponent,
        data: {
          title: 'Espace Parent',
        },
      },
      // {
      //   path: 'admin',
      //   children: [
      //     {
      //       path: 'matiere',
      //       component: MatiereComponent,
      //     },
      //   ],
      // },
      {
        path: 'matiere',
        component: AddMatiereComponent,
        data: {
          title: 'Espace admin',
        },
      },
      {
        path: 'matierelist',
        component: MatiereListComponent,
        data: {
          title: 'Espace admin',
        },
      },
     
      {
        path: 'offres',
        component: GestionOffresComponent,
        data: {
          title: 'Espace admin',
        },
      },
    
      {
        path: 'classes',
        component: ClassesComponent,
        data: {
          title: 'Espace admin',
        },
      },
      {
        path: 'devoirs',
        component: DevoirsComponent,
        data: {
          title: 'Espace admin',
        },
      },
      {
        path: 'absences',
        component: AbsencesComponent,
        data: {
          title: 'Espace admin',
        },
      },
      {
        path: 'uploadCours',
        component: UploadCoursComponent,
        data: {
          title: 'Espace admin',
        },
      },
     

      {
        path: 'slottime',
        component: SlottimeComponent,
        data: {
          title: 'Espace admin',
        },
      },
        {
        path: 'notes',
        component: NoteComponent,
        data: {
          title: 'Espace admin',
        },
      },
        {
          path: 'notEleve',
          component: NoteEleveComponent,
          data: {
            title: 'Espace admin',
          },
      },
      {
        path: 'suivitNote',
        component: SuivitNoteComponent,
        data: {
          title: 'Espace admin',
        },
    },
      {
        path: 'elev',
        component: GestionElevesComponent,
        data: {
          title: 'Espace admin',
        },
      },
      {
        path: 'exam',
        component: ExamenComponent,
        data: {
          title: 'Espace admin',
        },
      },
      {
        path: 'seance',
        component: SeanceComponent,
        data: {
          title: 'Espace admin',
        },
      }, {
        path: 'niveau-primaire',
        component: NiveauprimaireComponent,
        data: {
          title: 'Niveau Primaire',
        },
      },
      {
        path: 'niveau-base',
        component: NiveaubaseComponent,
        data: {
          title: 'Niveau Base',
        },
      },
      {
        path: 'niveau-secondaire',
        component: NiveausecondaireComponent,
        data: {
          title: 'Niveau Secondaire',
        },
      },
      {
        path: 'calendrier',
        component: CalendrierscolaireComponent,
        data: {
          title: 'Calendrier',
        },
      },
      {
        path: 'addmatiere',
        component: AddMatiereComponent,
        data: {
          title: 'Ajout Matiere',
        },
      },
      {
        path: 'listenseignant',
        component: EnseignantPageComponent,
        data: {
          title: 'List All Professeurs',
        },
      },
      {
        path: 'welcome',
        component: WelcomePageComponent,
        data: {
          title: 'Welcome',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

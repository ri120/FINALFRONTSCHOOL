import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';


import { MatModule } from '../appModules/mat.module';
import { ParentPageComponent } from './parent-page/parent-page.component';
import { AjoutEnfantComponent } from './parent-page/ajout-enfant/ajout-enfant.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { EnfantPageComponent } from './enfant-page/enfant-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { MatiereComponent } from './admin-page/matiere/matiere.component';
import { MatiereFormComponent } from './admin-page/matiere-form/matiere-form.component';
import { GestionOffresComponent } from './admin-page/gestion-offres/gestion-offres.component';
import { MatiereListComponent } from './admin-page/matiere-list/matiere-list.component';

import { ClassesComponent } from './admin-page/classes/classes.component';
import { DevoirsComponent } from './admin-page/devoirs/devoirs.component';
import { FormsModule } from '../forms/forms.module';
import { AbsencesComponent } from './admin-page/absences/absences.component';
import { UploadCoursComponent } from './admin-page/upload-cours/upload-cours.component';

import { NoteComponent } from './admin-page/note/note.component';
import { ExamenComponent } from './admin-page/examen/examen.component';
import { SeanceComponent } from './admin-page/seance/seance.component';
import { AjoutEnseignantComponent } from './list-enseignant-page/ajout-enseignant/ajout-enseignant.component';
import { CalendrierscolaireComponent } from './calendrierscolaire/calendrierscolaire.component';
import { AddMatiereComponent } from './admin-page/matiere/add-matiere/add-matiere.component';
import { EnseignantPageComponent } from './list-enseignant-page/enseignant-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SlottimeComponent } from './admin-page/slottime/slottime.component';
import {  MultiSelectModule } from 'primeng/multiselect';
import { GestionElevesComponent } from './admin-page/gestion-eleves/gestion-eleves.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NoteEleveComponent } from './enfant-page/note-eleve/note-eleve.component'; // Importer FullCalendar
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { SuivitNoteComponent } from './parent-page/suivit-note/suivit-note.component';




@NgModule({
  declarations: [
  
    ParentPageComponent,
    AjoutEnfantComponent,
    EnfantPageComponent,
    AdminPageComponent,
    MatiereComponent,
    MatiereFormComponent,
    GestionOffresComponent,
    MatiereListComponent,
 
    ClassesComponent,
    DevoirsComponent,
    AbsencesComponent,
    UploadCoursComponent,
    
    NoteComponent,
    ExamenComponent,
    SeanceComponent,
    AjoutEnseignantComponent,
    CalendrierscolaireComponent,
    AddMatiereComponent,
    EnseignantPageComponent,
    WelcomePageComponent,
    SlottimeComponent,
    GestionElevesComponent,
    NoteEleveComponent,
    SuivitNoteComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule,
    MultiSelectModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    MatCardModule,
    MatToolbarModule,
    FullCalendarModule,
    PdfViewerModule,
   
    // NgxExtendedPdfViewerModule
   
  
   
   
  ],
})
export class DashboardModule {}

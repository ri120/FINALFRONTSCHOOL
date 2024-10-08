import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";

import { Full_ROUTES } from "./shared/routes/full-layout.routes";
import { CONTENT_ROUTES } from "./shared/routes/content-layout.routes";
import { HomeComponent } from './pages/home/home.component';
import { MatiereComponent } from './dashboard/admin-page/matiere/matiere.component';
import { MatiereFormComponent } from './dashboard/admin-page/matiere-form/matiere-form.component';
import { GestionOffresComponent } from './dashboard/admin-page/gestion-offres/gestion-offres.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages', // Redirige par défaut vers 'home'
    pathMatch: 'full',
  },
  // {
  //   path: '',
  //   redirectTo: 'dashboard/e-commerce',
  //   pathMatch: 'full',
  // },
  { path: '', component: FullLayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES },
  { path: '', component: ContentLayoutComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES },
   //{ path: '**', redirectTo: 'auth/sign-in' },
  { path: 'matiere', component: MatiereFormComponent },
  { path: 'offres', component: GestionOffresComponent },
    { path: 'sign-in', component: SignInComponent },
    { path: 'sign-up', component: SignUpComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Eleve } from 'src/app/models/eleve';
import { NiveauScolaire } from 'src/app/models/niveau-scolaire';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EleveService {
  private apiUrl: string = environment.baseUrl ;
  constructor(private http: HttpClient) {}
  ////////// FIND ALL ELEVES ////////
  findAllEleves(): Observable<Eleve[]> {
    return this.http.get<Eleve[]>(`${this.apiUrl}/listalleleve`);
  }
  /////////// FIND ALL ELEVES BY NIVEAU //////////
  findAllElevesByNiveau(niveauScolaire:NiveauScolaire):Observable<Eleve[]> {
  
    return this.http.get<Eleve[]>(`${this.apiUrl}/reglements/findallEleveByniveau/${niveauScolaire}`)
  }
  deleteEleveByNiv(id: number,niveauScolaire:NiveauScolaire): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/reglements/findallEleveByniveau/${niveauScolaire}/${id}`);
  }
 
  deleteEleveById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/reglements/deleteEleve/${id}`);
  }
  findAllElevesByNiveauPaye(niveauScolaire:NiveauScolaire):Observable<Eleve[]> {
  
    return this.http.get<Eleve[]>(`${this.apiUrl}/reglements/findallEleveByniveaupayeAffecte/${niveauScolaire}`)
  }
  //////////////// a determiner /////////////
  findAllElevesAffecteByClasse(id:number):Observable<Eleve[]> {
  
    return this.http.get<Eleve[]>(`${this.apiUrl}/classes/listalleleveByClasse/${id}`)
  }
  findAllElevesByParent():Observable<Eleve[]> {
    return this.http.get<Eleve[]>(`${this.apiUrl}/parent/suivi`)
    
  }
 
}



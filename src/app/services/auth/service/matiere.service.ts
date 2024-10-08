import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatiereDto } from 'src/app/models/matiere-dto';


import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MatiereService {
  baseUrl = environment.baseUrll
  private apiUrl = this.baseUrl + 'matieres';

  constructor(private http: HttpClient) {}

  getAllMatieres(): Observable<MatiereDto[]> {
    return this.http.get<MatiereDto[]>(`${this.apiUrl}/getAllNiveaux`);
  }

  findAllMatieresByNiveau(niveauId:number): Observable<MatiereDto[]> {
    return this.http.get<MatiereDto[]>(`${this.apiUrl}/findAllMatieresByNiveau/${niveauId}`);
  }

/*  getNiveauById(id: number): Observable<NiveauDto> {
    return this.http.get<NiveauDto>(`${this.apiUrl}/getNiveauById/${id}`);
  }*/

 /* getNiveauxByType(typeEnseignement: string): Observable<NiveauDto[]> {
    return this.http.get<NiveauDto[]>(`${this.apiUrl}/getNiveauxByType/${typeEnseignement}`);
  }*/

  /*createNiveau(niveauDto: NiveauDto): Observable<NiveauDto> {
    return this.http.post<NiveauDto>(`${this.apiUrl}/createNiveau`, niveauDto);
  }*/

 /* updateNiveau(id: number, niveauDto: NiveauDto): Observable<NiveauDto> {
    return this.http.put<NiveauDto>(`${this.apiUrl}/updateNiveau/${id}`, niveauDto);
  }
*/
  deleteNiveau(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteNiveau/${id}`);
  }
}
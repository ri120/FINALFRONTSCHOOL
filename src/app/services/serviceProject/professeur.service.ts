import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

import { ProfesseurDto } from 'src/app/models/professeur-dto';

@Injectable({
  providedIn: 'root'
})
export class ProfesseurService {

  baseUrl = environment.baseUrll
  private apiUrl = this.baseUrl + 'professeurs';

  constructor(private http: HttpClient) {}

  getAllProfesseurs(): Observable<ProfesseurDto[]> {
    return this.http.get<ProfesseurDto[]>(`${this.apiUrl}/findall`);
  }

 /*  getNiveauById(id: number): Observable<NiveauDto> {
    return this.http.get<NiveauDto>(`${this.apiUrl}/getNiveauById/${id}`);
  } */

 /*  getNiveauxByType(typeEnseignement: string): Observable<NiveauDto[]> {
    return this.http.get<NiveauDto[]>(`${this.apiUrl}/getNiveauxByType/${typeEnseignement}`);
  } */

/*   createNiveau(niveauDto: NiveauDto): Observable<NiveauDto> {
    return this.http.post<NiveauDto>(`${this.apiUrl}/createNiveau`, niveauDto);
  }
 */
 /*  updateNiveau(id: number, niveauDto: NiveauDto): Observable<NiveauDto> {
    return this.http.put<NiveauDto>(`${this.apiUrl}/updateNiveau/${id}`, niveauDto);
  }
 */
  deleteNiveau(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteNiveau/${id}`);
  }
}

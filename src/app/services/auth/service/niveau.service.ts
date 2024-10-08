import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class NiveauService {
  baseUrl = environment.baseUrll
  private apiUrl = this.baseUrl + 'niveau';

  constructor(private http: HttpClient) {}

/*  getAllNiveaux(): Observable<NiveauDto[]> {
    return this.http.get<NiveauDto[]>(`${this.apiUrl}/getAllNiveaux`);
  }

  getNiveauById(id: number): Observable<NiveauDto> {
    return this.http.get<NiveauDto>(`${this.apiUrl}/getNiveauById/${id}`);
  }

  getNiveauxByType(typeEnseignement: string): Observable<NiveauDto[]> {
    return this.http.get<NiveauDto[]>(`${this.apiUrl}/getNiveauxByType/${typeEnseignement}`);
  }

  createNiveau(niveauDto: NiveauDto): Observable<NiveauDto> {
    return this.http.post<NiveauDto>(`${this.apiUrl}/createNiveau`, niveauDto);
  }

  updateNiveau(id: number, niveauDto: NiveauDto): Observable<NiveauDto> {
    return this.http.put<NiveauDto>(`${this.apiUrl}/updateNiveau/${id}`, niveauDto);
  }

  deleteNiveau(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteNiveau/${id}`);
  }*/
}
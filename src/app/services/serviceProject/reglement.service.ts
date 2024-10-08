// reglement.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Listeeglement } from 'src/app/models/listeeglement';
import { ReglementDto } from 'src/app/models/reglement-dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReglementService {
  private apiUrl = `${environment.baseUrll}/reglements`; // Assurez-vous que l'URL de votre API est correcte
  constructor(private http: HttpClient) {}

  // Simulons des règlements statiques pour cet exemple
 
  saveReglement(reglementDto: ReglementDto): Observable<ReglementDto> {
    return this.http.post<ReglementDto>(`${this.apiUrl}/save`, reglementDto);
  }

  // Récupérer toutes les séances
  findAllReglement(): Observable<ReglementDto[]> {
    return this.http.get<ReglementDto[]>(`${this.apiUrl}/lister`);
  }
  
  // Récupérer une séance par son ID
  ReglementById(id: number): Observable<ReglementDto> {
    return this.http.get<ReglementDto>(`${this.apiUrl}/findById/${id}`);
  }

  ReglementByIdeleve(id: number): Observable<Listeeglement[]> {
    return this.http.get<Listeeglement[]>(`${this.apiUrl}/findallreglementbyeleve/${id}`);
  }


  updateReglement(reglementDto: ReglementDto): Observable<ReglementDto> {
    const url = `${this.apiUrl}/${reglementDto.id}`;
    return this.http.put<ReglementDto>(url, reglementDto);
  }
  // Supprimer une séance par son ID
  deleteReglemetById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

}

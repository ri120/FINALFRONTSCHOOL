import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatiereDto } from 'src/app/models/matiere-dto';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  private apiUrl: string = environment.baseUrl + '/matieres';

  constructor(private http: HttpClient) {}

  // Récupérer toutes les matières
  findAllMatieres(): Observable<MatiereDto[]> {
    return this.http.get<MatiereDto[]>(`${this.apiUrl}`);
  }

  // Récupérer une matière par son ID
  findMatiereById(id: number): Observable<MatiereDto> {
    return this.http.get<MatiereDto>(`${this.apiUrl}/${id}`);
  }

  // Créer ou mettre à jour une matière
  saveMatiere(matiereDto: MatiereDto): Observable<MatiereDto> {
    
    return this.http.post<MatiereDto>(`${this.apiUrl}/addmatiere`, matiereDto);
  }
  updateMatiere(matiereDto: MatiereDto): Observable<MatiereDto> {
    return this.http.put<MatiereDto>(`${this.apiUrl}/modifier`, matiereDto);
  }
  // Supprimer une matière par son ID
  deleteMatiereById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }}

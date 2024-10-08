import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbsenceDto } from 'src/app/models/absence-dto';
import { Listeabsencedto } from 'src/app/models/listeabsencedto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {
  private apiUrl: string = environment.baseUrl + '/absences';  

  constructor(private http: HttpClient) {}

  // Récupérer toutes les absences/observabal
  findAllAbsence(): Observable<AbsenceDto[]> {
    return this.http.get<AbsenceDto[]>(`${this.apiUrl}/lister`);
  }

  // Récupérer une absence par son ID
  findAbsenceById(id: number): Observable<AbsenceDto> {
    return this.http.get<AbsenceDto>(`${this.apiUrl}/getbyid/${id}`);
  }
  findAbsenceByeleveId(id: number): Observable<Listeabsencedto[]> {
    return this.http.get<Listeabsencedto[]>(`${this.apiUrl}/getbyByEleve/${id}`);
  }
  // Créer une nouvelle absence
  createAbsence(absenceDto: AbsenceDto): Observable<AbsenceDto> {
    return this.http.post<AbsenceDto>(`${this.apiUrl}/save`, absenceDto);
  }

  // Supprimer une absence par son ID
  deleteAbsenceById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  
}

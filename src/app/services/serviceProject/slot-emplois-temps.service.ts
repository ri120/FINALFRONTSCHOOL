import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SlotEpmloisTempsDto } from 'src/app/models/SlotEpmloisTempsDto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SlotEmploisTempsService {
  private apiUrl: string = environment.baseUrl + '/slot-emplois-temps';

  constructor(private http: HttpClient) {}

  // Créer ou mettre à jour un slot d'emplois du temps
  save(slotEmploisTempsDto: SlotEpmloisTempsDto): Observable<SlotEpmloisTempsDto> {
    return this.http.post<SlotEpmloisTempsDto>(`${this.apiUrl}`, slotEmploisTempsDto);
  }

  // Récupérer tous les slots d'emplois du temps
  findAll(): Observable<SlotEpmloisTempsDto[]> {
    return this.http.get<SlotEpmloisTempsDto[]>(`${this.apiUrl}`);
  }

  // Récupérer un slot d'emplois du temps par son ID
  findById(id: number): Observable<SlotEpmloisTempsDto> {
    return this.http.get<SlotEpmloisTempsDto>(`${this.apiUrl}/${id}`);
  }

  // Supprimer un slot d'emplois du temps par son ID
  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

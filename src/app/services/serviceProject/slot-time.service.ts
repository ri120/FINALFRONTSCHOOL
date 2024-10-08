import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmploiEleve } from 'src/app/models/emploi-eleve';
import { EmploiTemps } from 'src/app/models/emploi-temps';
import { SeanceDto } from 'src/app/models/seance-dto';
import { SlotEpmloisTempsDto } from 'src/app/models/SlotEpmloisTempsDto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SlotTimeService {

  private apiUrl: string = environment.baseUrl + '/slot-emplois-temps';

  constructor(private http: HttpClient) {}

  // Récupérer toutes les SlotEpmloisTemp
  getAllSlotEpmloisTemp(): Observable<SlotEpmloisTempsDto[]> {
    return this.http.get<SlotEpmloisTempsDto[]>(`${this.apiUrl}/lister`);
  }
  getAllSlotEpmloisTemps(): Observable<SlotEpmloisTempsDto[]> {
    return this.http.get<SlotEpmloisTempsDto[]>(`${this.apiUrl}/lister`);
  }
  // Récupérer une classe par son ID
  getSlotEpmloisTempById(id: number): Observable<SlotEpmloisTempsDto> {
    return this.http.get<SlotEpmloisTempsDto>(`${this.apiUrl}/findById/${id}`);
  }

  // Créer une nouvelle classe
  createSlotEpmloisTemp(SlotEpmloisTempsDto: SlotEpmloisTempsDto): Observable<SlotEpmloisTempsDto> {
    return this.http.post<SlotEpmloisTempsDto>(`${this.apiUrl}/save`, SlotEpmloisTempsDto);
  }

  // Mettre à jour une classe existante
  updateSlotEpmloisTemp(SlotEpmloisTempsDto: SlotEpmloisTempsDto): Observable<SlotEpmloisTempsDto> {
    return this.http.put<SlotEpmloisTempsDto>(`${this.apiUrl}/modifier`, SlotEpmloisTempsDto);
  }

  // Supprimer une classe par son ID
  deleteSlotEpmloisTemp(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteById/${id}`);
  }
  getEpmloisTempsByClasse(id:number): Observable<EmploiEleve[]> {
    return this.http.get<EmploiEleve[]>(`${this.apiUrl}/findByIdClasse/${id}`);
  }
}

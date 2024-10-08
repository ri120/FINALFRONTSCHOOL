import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmploiTemps } from 'src/app/models/emploi-temps';
import { LabelValu } from 'src/app/models/label-valu';
import { ProfesseurDto } from 'src/app/models/professeur-dto';
import { SeanceDto } from 'src/app/models/seance-dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {
  private apiUrl: string = environment.baseUrl + '/seances';

  constructor(private http: HttpClient) {}

  // Créer ou mettre à jour une séance
  saveSeance(seanceDto: SeanceDto): Observable<SeanceDto> {
    return this.http.post<SeanceDto>(`${this.apiUrl}/save`, seanceDto);
  }

  // Récupérer toutes les séances
  findAll(): Observable<SeanceDto[]> {
    return this.http.get<SeanceDto[]>(`${this.apiUrl}/lister`);
  }
  

  findAllEmptemps(): Observable<EmploiTemps[]> {
    return this.http.get<EmploiTemps[]>(`${this.apiUrl}/emptempslist`);
  }





  findAllprof(): Observable<ProfesseurDto[]> {
    return this.http.get<ProfesseurDto[]>(`${this.apiUrl}/listerprof`);
  }
  findallslot(): Observable<LabelValu[]> {
    return this.http.get<LabelValu[]>(`${this.apiUrl}/listerallslot`);
  }
  
  // Récupérer une séance par son ID
  findById(id: number): Observable<SeanceDto> {
    return this.http.get<SeanceDto>(`${this.apiUrl}/findById/${id}`);
  }
  updateSeance(seance: SeanceDto): Observable<SeanceDto> {
    const url = `${this.apiUrl}/${seance.id}`;
    return this.http.put<SeanceDto>(url, seance);
  }
  // Supprimer une séance par son ID
  deleteSeanceById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}

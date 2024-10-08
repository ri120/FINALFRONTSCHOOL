import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExamenDto } from 'src/app/models/examen-dto';
import { ListDevoirDto } from 'src/app/models/list-devoir-dto';
import { ListExamenDto } from 'src/app/models/list-examen-dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  private apiUrl: string = environment.baseUrl + '/examens';

  constructor(private http: HttpClient) {}

  // Récupérer tous les examens
  findAllExamens(): Observable<ListExamenDto[]> {
    return this.http.get<ListExamenDto[]>(`${this.apiUrl}/all`);
  }

  // Récupérer un examen par son ID
  findExamenById(id: number): Observable<ExamenDto> {
    return this.http.get<ExamenDto>(`${this.apiUrl}/${id}`);
  }

  // Créer un nouvel examen
  createExamen(examenDto: ExamenDto): Observable<ExamenDto> {
    return this.http.post<ExamenDto>(`${this.apiUrl}`, examenDto);
  }

  // Mettre à jour un examen par son ID
  updateExamen(id: number, examenDto: ExamenDto): Observable<ExamenDto> {
    return this.http.put<ExamenDto>(`${this.apiUrl}/${id}`, examenDto);
  }

  // Supprimer un examen par son ID
  deleteExamenById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  uploadExamenDtoFile(id: number, file: File): Observable<ExamenDto> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<ExamenDto>(`${this.apiUrl}/uploadFile/${id}`, formData);
  }
  
  findAllExamByclasseAndmatiere(idclasse:number,idmatiere:number): Observable<ListExamenDto[]> {
    return this.http.get<ListExamenDto[]>(`${this.apiUrl}/listallexambyclassandmatiere/${idclasse}/${idmatiere}`);
  }
}

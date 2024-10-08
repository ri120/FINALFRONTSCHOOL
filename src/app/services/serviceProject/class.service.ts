import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassesDto } from 'src/app/models/ClassesDto';
import { Eleve } from 'src/app/models/eleve';
import { LabelValu } from 'src/app/models/label-valu';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private apiUrl: string = environment.baseUrl + '/classes';

  constructor(private http: HttpClient) {}

  // Récupérer toutes les classes
  getAllClasses(): Observable<ClassesDto[]> {
    return this.http.get<ClassesDto[]>(`${this.apiUrl}`);
  }

  // Récupérer une classe par son ID
  getClassesById(id: number): Observable<ClassesDto> {
    return this.http.get<ClassesDto>(`${this.apiUrl}/${id}`);
  }

  // Créer une nouvelle classe
  createClasses(classesDto: ClassesDto): Observable<ClassesDto> {
    return this.http.post<ClassesDto>(`${this.apiUrl}`, classesDto);
  }

  // Mettre à jour une classe existante
  updateClasses(classesDto: ClassesDto): Observable<ClassesDto> {
    return this.http.put<ClassesDto>(`${this.apiUrl}/modifier`, classesDto);
  }

  // Supprimer une classe par son ID
  deleteClasses(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
  findallclasses(): Observable<LabelValu[]> {
    return this.http.get<LabelValu[]>(`${this.apiUrl}/listerallclasses`);
  }
  
  getAllEleve(): Observable<Eleve[]> {
    return this.http.get<Eleve[]>(`${this.apiUrl}/listalleleve`);
  }
  AffecterEleve(idclasse: number,ideleve: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/elevetoclasse/${idclasse}/${ideleve}`);
  }

}

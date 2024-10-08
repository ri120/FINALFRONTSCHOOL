import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DevoirDto } from 'src/app/models/devoir-dto';
import { ListDevoirDto } from 'src/app/models/list-devoir-dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DevoirsService {
  private apiUrl: string = environment.baseUrl + '/devoirs';
  
  constructor(private http: HttpClient) {}

  // Récupérer tous les devoirs
  findAllDevoirs(): Observable<DevoirDto[]> {
    return this.http.get<DevoirDto[]>(`${this.apiUrl}`);
  }

  // Récupérer un devoir par son ID
  findDevoirById(id: number): Observable<DevoirDto> {
    return this.http.get<DevoirDto>(`${this.apiUrl}/${id}`);
  }

  // Créer un nouveau devoir
  createDevoir(devoirDto: DevoirDto): Observable<DevoirDto> {
    return this.http.post<DevoirDto>(`${this.apiUrl}/save`, devoirDto);
  }

  // Supprimer un devoir par son ID
  deleteDevoirById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  uploadDevoirDtoFile(id: number,image: File): Observable<DevoirDto> {
    const formData: FormData = new FormData();
    formData.append('image', image);
   // Ajout du titre dans FormData
    return this.http.post<DevoirDto>(`${this.apiUrl}/uploadFile/${id}`, formData);
  }
  updateDevoir(devoir: DevoirDto): Observable<DevoirDto> {
    const url = `${this.apiUrl}/${devoir.idDevoir}`;
    return this.http.put<DevoirDto>(url, devoir);
  }
  
  findAllDevoirsByProf(): Observable<ListDevoirDto[]> {
    return this.http.get<ListDevoirDto[]>(`${this.apiUrl}/listerDevoirByProf`);
  }


  findAllDevoirsByclasseAndmatiere(idclasse:number,idmatiere:number): Observable<ListDevoirDto[]> {
    return this.http.get<ListDevoirDto[]>(`${this.apiUrl}/listalldevoirbyclassandmatiere/${idclasse}/${idmatiere}`);
  }
}

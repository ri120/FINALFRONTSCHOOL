import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OffreDto } from 'src/app/models/offre-dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OffresService {
  private apiUrl: string = environment.baseUrl + '/offres';

  constructor(private http: HttpClient) {}

  saveOffre(offreDto: OffreDto): Observable<OffreDto> {
    return this.http.post<OffreDto>(`${this.apiUrl}`, offreDto);
  }

  findAll(): Observable<OffreDto[]> {
    return this.http.get<OffreDto[]>(`${this.apiUrl}`);
  }

  findById(id: number): Observable<OffreDto> {
    return this.http.get<OffreDto>(`${this.apiUrl}/findbyid/${id}`);
  }

  deleteOffreById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  uploadImage(id: number, image: File): Observable<OffreDto> {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post<OffreDto>(`${this.apiUrl}/uploadFile/${id}`, formData);
  }

  downloadImage(imageName: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/downloadimgoffre/${imageName}`, { responseType: 'blob' });
  }
   // Mettre à jour une classe existante
   updateOffre(offreDto: OffreDto): Observable<OffreDto> {
    return this.http.put<OffreDto>(`${this.apiUrl}/modifier`, offreDto);
  }
}

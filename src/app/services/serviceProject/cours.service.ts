import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoursDto } from 'src/app/models/cours-dto';
import { ListCour } from 'src/app/models/list-cour';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursDtoService {
  private apiUrl: string = environment.baseUrl + '/cours';

  constructor(private http: HttpClient) { }

  findAllCoursDto(): Observable<CoursDto[]> {
    return this.http.get<CoursDto[]>(`${this.apiUrl}/all`);
  }

  findCoursDtoById(id: number): Observable<CoursDto> {
    return this.http.get<CoursDto>(`${this.apiUrl}/id/${id}`);
  }

  createCoursDto(CoursDto: CoursDto): Observable<CoursDto> {
    return this.http.post<CoursDto>(`${this.apiUrl}/create`, CoursDto);
  }

  deleteCoursDto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  // Méthode pour uploader un fichier de cours
  uploadCoursDtoFile(id: number, image: File): Observable<CoursDto> {
    const formData: FormData = new FormData();
    formData.append('image', image);
    return this.http.post<CoursDto>(`${this.apiUrl}/uploadFile/${id}`, formData);
  }
 
  findAllCoursByclasseAndmatiere(idclasse:number,idmatiere:number): Observable<ListCour[]> {
    return this.http.get<ListCour[]>(`${this.apiUrl}/listallcoursbyclassandmatiere/${idclasse}/${idmatiere}`);
  }
  

}

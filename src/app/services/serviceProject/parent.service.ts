import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParentDto } from 'src/app/models/parent-dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  baseUrl = environment.baseUrll
  private apiUrl = this.baseUrl + '/parent';
  constructor(private http: HttpClient) { }

  getAllParents(): Observable<ParentDto[]> {
    return this.http.get<ParentDto[]>(`${this.apiUrl}/lister`);
  }
  ajouterEleveAuParent(email:string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/ajouterEleveparent/${email}`);
  }
  findParentById(id:number): Observable<ParentDto> {
    return this.http.get<ParentDto>(`${this.apiUrl}/${id}/parent`);
  }
  



}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassesDto } from 'src/app/models/ClassesDto';
import { Eleve } from 'src/app/models/eleve';
import { ListNoteDto } from 'src/app/models/list-note-dto';
import { NoteDto } from 'src/app/models/note-dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private apiUrl: string = environment.baseUrl + '/notes';

  constructor(private http: HttpClient) {}

  // Récupérer toutes les notes
  findAllNotes(): Observable<NoteDto[]> {
    return this.http.get<NoteDto[]>(`${this.apiUrl}/listeNote`);
  }

  // Récupérer une note par son ID
  findNoteById(id: number): Observable<NoteDto> {
    return this.http.get<NoteDto>(`${this.apiUrl}/getNotebyid/${id}`);
  }
// ajout  dans back !!!!!!!!!!!!!
  updateNote(noteDto: NoteDto): Observable<NoteDto> {
  return this.http.put<NoteDto>(`${this.apiUrl}/${noteDto.idNote}`, noteDto);
}
  // Créer ou mettre à jour une note
  createNote(noteDto: NoteDto): Observable<NoteDto> {
    return this.http.post<NoteDto>(`${this.apiUrl}/save`, noteDto);
  }

  // Supprimer une note par son ID
   deleteNoteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
   findAllElevesByExamens(id:number): Observable<Eleve[]> {
    return this.http.get<Eleve[]>(`${this.apiUrl}/eleve/${id}`);
  }
   findAllClassByExamen(id:number):Observable<ClassesDto[]>{
    return this.http.get<ClassesDto[]>(`${this.apiUrl}/classe/${id}`)
   }
   findAllNotesByExamen(id:number): Observable<ListNoteDto[]> {
    return this.http.get<ListNoteDto[]>(`${this.apiUrl}/listeNoteByExamen/${id}`);
  }
  findAllNotesByEleveMatiere(id:number): Observable<ListNoteDto[]> {
    return this.http.get<ListNoteDto[]>(`${this.apiUrl}/listeNoteByEleve/${id}`);
  }
  findAllNotesEleveBypararentMatiere(idEleve:number,idMatiere:number): Observable<ListNoteDto[]> {
    return this.http.get<ListNoteDto[]>(`${this.apiUrl}/ListNoteEleveByParentMatiere/${idEleve}/${idMatiere}`);
  }
 
}

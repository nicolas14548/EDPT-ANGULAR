import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aula } from '../models/Aula';
import { AulaInsert } from '../models/AulaInsert';

@Injectable({
  providedIn: 'root',
})
export class Aulaservice {
  private apiURL = `${environment.base}/api/aulas`;

  constructor(private http: HttpClient) {}

  getAulas(): Observable<Aula[]> {
    return this.http.get<Aula[]>(this.apiURL);
  }

  deleteAula(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }

  insertAula(aula: AulaInsert): Observable<AulaInsert> {
    return this.http.post<AulaInsert>(this.apiURL, aula);
  }
}

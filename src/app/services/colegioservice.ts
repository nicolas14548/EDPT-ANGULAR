import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Colegio } from '../models/Colegio';
import { ColegioInsert } from '../models/ColegioInsert';

@Injectable({
  providedIn: 'root',
})
export class Colegioservice {
  private apiURL = `${environment.base}/api/colegios`;

  constructor(private http: HttpClient) {}

  getColegios(): Observable<Colegio[]> {
    return this.http.get<Colegio[]>(this.apiURL);
  }

  deleteColegio(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }

  insertColegio(colegio: ColegioInsert): Observable<ColegioInsert> {
    return this.http.post<ColegioInsert>(this.apiURL, colegio);
  }
}

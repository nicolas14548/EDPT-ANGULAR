import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rol } from '../models/Rol';
import { RolInsert } from '../models/RolInsert';

@Injectable({
  providedIn: 'root',
})
export class Rolservice {
  private apiURL = `${environment.base}/api/roles`;

  constructor(private http: HttpClient) {}

  getRoles(): Observable<Rol[]> {
    return this.http.get<Rol[]>(this.apiURL);
  }

  deleteRol(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }

  insertRol(rol: RolInsert): Observable<RolInsert> {
    return this.http.post<RolInsert>(this.apiURL, rol);
  }
}

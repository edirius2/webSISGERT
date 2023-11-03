import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iEspecialidad } from './especialidad';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  api_url = this.base_url + "api/Especialidades";

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private base_url: string) { }

  getEspecialidades(): Observable<iEspecialidad[]> {
    return this.httpClient.get<iEspecialidad[]>(this.api_url);
  }

  getEspecialidad(id: string): Observable<iEspecialidad> {
    return this.httpClient.get<iEspecialidad>(this.api_url + "/" + id);
  }

  insertEspecialidad(especialidad: iEspecialidad): Observable<iEspecialidad> {
    return this.httpClient.post<iEspecialidad>(this.api_url, especialidad);
  }

  editEspecialidad(especialidad: iEspecialidad): Observable<iEspecialidad> {
    return this.httpClient.put<iEspecialidad>(this.api_url + "/" + especialidad.id, especialidad);
  }
}

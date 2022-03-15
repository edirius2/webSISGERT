import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITarea } from './tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private apiURL = this.baseUrl + "api/tareas";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getTareas(): Observable<ITarea[]> {
    return this.http.get<ITarea[]>(this.apiURL);
  }

  getTarea(id: string): Observable<ITarea> {
    return this.http.get<ITarea>(this.apiURL + "/" + id);
  }

  createTarea(tarea: ITarea): Observable<ITarea> {
    return this.http.post<ITarea>(this.apiURL, tarea);
  }

  updateTarea(tarea: ITarea): Observable<ITarea> {
    return this.http.put<ITarea>(this.apiURL + "/" + tarea.id, tarea);
  }
}

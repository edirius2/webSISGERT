import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iOrdenTrabajo } from './ordenTrabajo';



@Injectable({
  providedIn: 'root'
})
export class OrdenesTrabajoService {

  private apiURL = this.baseUrl + "api/OrdenesTrabajo";


  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getOrdenesTrabajo(): Observable<iOrdenTrabajo[]> {
    return this.httpClient.get<iOrdenTrabajo[]>(this.apiURL);
  }

  getOrdenesTrabajoConFiltro(filtroIdCliente: string): Observable<iOrdenTrabajo[]> {
    return this.httpClient.get<iOrdenTrabajo[]>(this.apiURL + "/GetFiltroOrdenesTrabajo/" + filtroIdCliente);
  }

  getOrdenTrabajo(idOrdenTrabajo: string): Observable<iOrdenTrabajo> {
    return this.httpClient.get<iOrdenTrabajo>(this.apiURL + "/" + idOrdenTrabajo);
  }

  createOrdenTrabajo(ordenTrabajo: iOrdenTrabajo): Observable<iOrdenTrabajo> {
    return this.httpClient.post<iOrdenTrabajo>(this.apiURL, ordenTrabajo);
  }

  editarOrdenTrabajo(ordenTrabajo: iOrdenTrabajo): Observable<iOrdenTrabajo> {
    return this.httpClient.put<iOrdenTrabajo>(this.apiURL + "/" + ordenTrabajo.id, ordenTrabajo);
  }

}

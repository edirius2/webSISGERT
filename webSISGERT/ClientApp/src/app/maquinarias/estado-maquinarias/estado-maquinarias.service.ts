import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iEstadoMaquinaria } from './estadoMaquinaria';

@Injectable({
  providedIn: 'root'
})
export class EstadoMaquinariasService {

  Api_URL = this.base_url + "api/EstadoMaquinarias";

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private base_url) { }

  getEstadoMaquinarias(): Observable<iEstadoMaquinaria[]> {
    return this.httpClient.get<iEstadoMaquinaria[]>(this.Api_URL);
  }

  getEstadoMaquinaria(idEstadoMaquinaria: string): Observable<iEstadoMaquinaria> {
    return this.httpClient.get<iEstadoMaquinaria>(this.Api_URL + "/" + idEstadoMaquinaria);
  }

  createEstadoMaquinaria(estadoMaquinaria: iEstadoMaquinaria): Observable<iEstadoMaquinaria> {
    return this.httpClient.post<iEstadoMaquinaria>(this.Api_URL, estadoMaquinaria);
  }

  updateEstadoMaquinaria(estadoMaquinaria: iEstadoMaquinaria): Observable<iEstadoMaquinaria> {
    return this.httpClient.put<iEstadoMaquinaria>(this.Api_URL + "/" + estadoMaquinaria.id.toString(), estadoMaquinaria);
  }
}

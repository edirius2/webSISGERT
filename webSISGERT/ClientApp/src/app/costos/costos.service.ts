import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iCosto } from './costo';

@Injectable({
  providedIn: 'root'
})
export class CostosService {

  private api_url = this.base_url + "api/Costos";

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private base_url, ) { }

  getCostos(): Observable<iCosto[]> {
    return this.httpClient.get<iCosto[]>(this.api_url);
  }

  getCosto(costoId: string): Observable<iCosto> {
    return this.httpClient.get<iCosto>(this.api_url + "/" + costoId);
  }

  createCosto(costo: iCosto): Observable<iCosto> {
    return this.httpClient.post<iCosto>(this.api_url, costo);
  }

  editCosto(costo: iCosto): Observable<iCosto> {
    return this.httpClient.put<iCosto>(this.api_url + "/" + costo.id, costo);
  }

  deleteCosto(costoId: string): Observable<iCosto> {
    return this.httpClient.delete<iCosto>(this.api_url + "/" + costoId);
  }
}

import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iCotizacion } from './cotizacion';

@Injectable({
  providedIn: 'root'
})
export class CotizacionesService {

  private apiURL = this.baseUrl + "api/Cotizaciones";

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getCotizaciones(): Observable<iCotizacion[]> {
    return this.httpClient.get<iCotizacion[]>(this.apiURL);
  }

  getCotizacionesFiltro(idCliente: string, idMaquinaria: string, estado: string): Observable<iCotizacion[]> {
    if (estado== "") {
      estado = "vacio";
    }
    return this.httpClient.get<iCotizacion[]>(this.apiURL + "/getCotizacionesFiltro/" + idCliente + "/" + idMaquinaria + "/" + estado);
  }

  getCotizacion(cotizacionId: string): Observable<iCotizacion> {
    return this.httpClient.get<iCotizacion>(this.apiURL + "/" + cotizacionId);
  }

  crearCotizacion(cotizacion: iCotizacion): Observable<iCotizacion> {
    return this.httpClient.post<iCotizacion>(this.apiURL, cotizacion);
  }

  modificarCotizacion(cotizacion: iCotizacion): Observable<iCotizacion> {
    return this.httpClient.put<iCotizacion>(this.apiURL + "/" + cotizacion.id, cotizacion);
  }

  eliminarCotizacion(cotizacionId: string): Observable<iCotizacion> {
    return this.httpClient.delete<iCotizacion>(this.apiURL + "/" + cotizacionId);
  }
}

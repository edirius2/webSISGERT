import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iDetalleTareaCotizacion } from './detalleTareaCotizacion';

@Injectable({
  providedIn: 'root'
})
export class DetalleTareaCService {

  private apiUrl = this.baseUrl + "api/DetalleTareaCotizaciones";

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getDetalleTareaCotizaciones(cotizacionId: string): Observable<iDetalleTareaCotizacion[]> {
    return this.httpClient.get<iDetalleTareaCotizacion[]>(this.apiUrl + "/" + cotizacionId);
  }

  getDetalleTareaCotizacion(detalleId: string): Observable<iDetalleTareaCotizacion> {
    return this.httpClient.get<iDetalleTareaCotizacion>(this.apiUrl + "/getDetalleTareaCotizacion/" + detalleId);
  }

  createDetalleTareaCotizacion(detalle: iDetalleTareaCotizacion): Observable<iDetalleTareaCotizacion> {
    return this.httpClient.post<iDetalleTareaCotizacion>(this.apiUrl, detalle);
  }

  editarDetalleTareaCotizacion(detalle: iDetalleTareaCotizacion): Observable<iDetalleTareaCotizacion> {
    return this.httpClient.put<iDetalleTareaCotizacion>(this.apiUrl + "/" + detalle.id, detalle);
  }

  eliminarDetalleTareaCotizacion(detalleId: string): Observable<iDetalleTareaCotizacion> {
    return this.httpClient.delete<iDetalleTareaCotizacion>(this.apiUrl + "/" + detalleId);
  }
}

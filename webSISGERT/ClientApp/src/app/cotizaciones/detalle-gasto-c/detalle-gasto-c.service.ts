import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iDetalleCostoCotizacion } from './detalleCostoCotizacion';
import { iCosto } from 'src/app/costos/costo';

@Injectable({
  providedIn: 'root'
})
export class DetalleGastoCService {

  private apiUrl = this.baseUrl + "api/DetalleCostoCotizaciones";

  constructor(private httClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getDetalleCostoCotizaciones(CotizacionId: string): Observable<iDetalleCostoCotizacion[]> {
    return this.httClient.get<iDetalleCostoCotizacion[]>(this.apiUrl + "/" + CotizacionId);
  }

  getDetalleCostoCotizacion(detalleId: string): Observable<iDetalleCostoCotizacion> {
    return this.httClient.get<iDetalleCostoCotizacion>(this.apiUrl + "/GetDetalleCostoCotizacion/" + detalleId);
  }

  createDetalleCostoCotizacion(detalle: iDetalleCostoCotizacion): Observable<iDetalleCostoCotizacion> {
    return this.httClient.post<iDetalleCostoCotizacion>(this.apiUrl, detalle);
  }

  editDetalleCostoCotizacion(detalle: iDetalleCostoCotizacion): Observable<iDetalleCostoCotizacion> {
    return this.httClient.put<iDetalleCostoCotizacion>(this.apiUrl + "/" + detalle.id, detalle);
  }

  deleteDetalleCostoCotizacion(detalleId: string): Observable<iDetalleCostoCotizacion> {
    return this.httClient.delete<iDetalleCostoCotizacion>(this.apiUrl + "/" + detalleId)
  }
}

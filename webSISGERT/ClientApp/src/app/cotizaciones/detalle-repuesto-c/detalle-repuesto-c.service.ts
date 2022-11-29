import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iDetalleRepuestoCotizacion } from './detalleRepuestoCotizacion';

@Injectable({
  providedIn: 'root'
})
export class DetalleRepuestoCService {

  private apiUrl = this.baseUrl + "api/DetalleRepuestosCotizaciones";

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getDetalleRepuestosCotizaciones(CotizacionId: string): Observable<iDetalleRepuestoCotizacion[]> {
    return this.httpClient.get<iDetalleRepuestoCotizacion[]>(this.apiUrl + "/" + CotizacionId);
  }

  getDetalleRepuestoCotizacion(detalleId: string): Observable<iDetalleRepuestoCotizacion> {
    return this.httpClient.get<iDetalleRepuestoCotizacion>(this.apiUrl + "/GetDetalleRepuestosCotizacion/" + detalleId);
  }

  createDetalleRepuestoCotizacion(detalle: iDetalleRepuestoCotizacion): Observable<iDetalleRepuestoCotizacion> {
    return this.httpClient.post<iDetalleRepuestoCotizacion>(this.apiUrl, detalle);
  }

  editDetalleRepuestoCotizacion(detalle: iDetalleRepuestoCotizacion): Observable<iDetalleRepuestoCotizacion> {
    return this.httpClient.put<iDetalleRepuestoCotizacion>(this.apiUrl + "/" + detalle.id, detalle);
  }

  deleteDetalleRepuestoCotizacion(detalleId: string): Observable<iDetalleRepuestoCotizacion> {
    return this.httpClient.delete<iDetalleRepuestoCotizacion>(this.apiUrl + "/" + detalleId);
  }
}

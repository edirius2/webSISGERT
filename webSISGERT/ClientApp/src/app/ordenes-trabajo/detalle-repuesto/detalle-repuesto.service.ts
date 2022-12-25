import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDetalleRepuesto } from './detalleRepuesto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalleRepuestoService {
  private apiUrl = this.baseUrl + "api/detalleRepuestes";

  constructor(private httpClient: HttpClient, @Inject("BASE_URL") private baseUrl: string) { }

  getDetallesRepuesto(ordenTrabajoId: string): Observable<IDetalleRepuesto[]>{
    return this.httpClient.get<IDetalleRepuesto[]>(this.apiUrl + "/" + ordenTrabajoId);
  }

  getDetalleRepuesto(detalleId: string): Observable<IDetalleRepuesto> {
    return this.httpClient.get<IDetalleRepuesto>(this.apiUrl + "/getDetalleRepuesto/" + detalleId);
  }

  createDetalleRepuesto(detalleRepuesto: IDetalleRepuesto): Observable<IDetalleRepuesto> {
    return this.httpClient.post<IDetalleRepuesto>(this.apiUrl, detalleRepuesto);
  }

  editarDetalleRepuesto(detalleRepuesto: IDetalleRepuesto): Observable<IDetalleRepuesto> {
    return this.httpClient.put<IDetalleRepuesto>(this.apiUrl + "/" + detalleRepuesto.id, detalleRepuesto);
  }

  deleteDetalleRepuesto(detalleRepuesto: IDetalleRepuesto): Observable<IDetalleRepuesto> {
    return this.httpClient.delete<IDetalleRepuesto>(this.apiUrl + "/" + detalleRepuesto.id);
  }
}

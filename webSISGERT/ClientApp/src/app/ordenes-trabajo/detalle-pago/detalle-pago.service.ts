import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDetallePago } from './detallePago';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetallePagoService {

  Api_URL = this.base_url + "api/DetallePagos";

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private base_url: string
  ) { }


  getPagos(idOrdenTrabajo: string): Observable<IDetallePago[]> {
    return this.httpClient.get<IDetallePago[]>(this.Api_URL + "/" + idOrdenTrabajo);
  }

  getPago(idDetalle: string): Observable<IDetallePago> {
    return this.httpClient.get<IDetallePago>(this.Api_URL + "/GetDetallePago/" + idDetalle);
  }

  createPago(detallePago: IDetallePago): Observable<IDetallePago> {
    return this.httpClient.post<IDetallePago>(this.Api_URL, detallePago);
  }

  editarPago(detallePago: IDetallePago): Observable<IDetallePago> {
    return this.httpClient.put<IDetallePago>(this.Api_URL + "/" + detallePago.id, detallePago);
  }
}

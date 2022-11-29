import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iDetalleCostoTareaCotizacion } from './detalleCostoTareaCotizacion';

@Injectable({
  providedIn: 'root'
})
export class DetalleCostoTareaCotizacionService {

  private apiUrl = this.baseUrl + "api/DetalleCostoTareaCotizaciones";

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getDetalleCostoTareaCotizaciones(DetalleTareaCotizacionId: string): Observable<iDetalleCostoTareaCotizacion[]> {
    return this.httpClient.get<iDetalleCostoTareaCotizacion[]>(this.apiUrl + "/" + DetalleTareaCotizacionId);
  }
}

import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iDetalleCosto } from './detalleCosto';

@Injectable({
  providedIn: 'root'
})
export class DetalleCostoService {

  apiURL = this.baseUrl + "api/detalleCostos";

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getDetalleCostos(idOT: string) {
    return this.httpClient.get<iDetalleCosto[]>(this.apiURL + "/getDetallesCostos/" + idOT);
  }

  getDetalleCosto(id: string) {
    return this.httpClient.get<iDetalleCosto>(this.apiURL + "/" + id);
  }

  createDetalleCosto(detalleCosto: iDetalleCosto) {
    return this.httpClient.post<iDetalleCosto>(this.apiURL, detalleCosto);
  }

  editarDetalleCosto(detalleCosto: iDetalleCosto) {
    return this.httpClient.put<iDetalleCosto>(this.apiURL + "/" + detalleCosto.id.toString(), detalleCosto);
  }

  deleteDetalleCosto(detalleCosto: iDetalleCosto) {
    return this.httpClient.delete<iDetalleCosto>(this.apiURL + "/" + detalleCosto.id.toString());
  }
}

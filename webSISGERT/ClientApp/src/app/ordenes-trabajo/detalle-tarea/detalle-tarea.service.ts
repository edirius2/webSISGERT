import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iDetalleTarea } from './detalleTarea';

@Injectable({
  providedIn: 'root'
})
export class DetalleTareaService {

  
  private apiURLDetalle = this.baseUrl + "api/DetalleTareas"

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }


  //Seccion de detalle

  getDetallesTarea(idOrdenTrabajo: string): Observable<iDetalleTarea[]> {
    return this.httpClient.get<iDetalleTarea[]>(this.apiURLDetalle + "/" + idOrdenTrabajo);
  }

  getDetalleTarea(idDetalleTarea: string): Observable<iDetalleTarea> {
    return this.httpClient.get<iDetalleTarea>(this.apiURLDetalle + "/GetDetalleTarea/" + idDetalleTarea);
  }

  createDetalleTarea(detalleTarea: iDetalleTarea): Observable<iDetalleTarea> {
    return this.httpClient.post<iDetalleTarea>(this.apiURLDetalle, detalleTarea);
  }

  editarDetalleTarea(detalleTarea: iDetalleTarea): Observable<iDetalleTarea> {
    return this.httpClient.put<iDetalleTarea>(this.apiURLDetalle + "/" + detalleTarea.id, detalleTarea);
  }

}

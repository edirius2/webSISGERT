import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iOrdenTrabajo } from './ordenTrabajo';
import { RequestOptions } from '@angular/http';




const httpOptions = {
  headers: new HttpHeaders({ 'Accept': 'application/json' }),
  'responseType': 'text'
}
const headers = new HttpHeaders().append('Content-Disposition', 'multipart/form-data') ;

@Injectable({
  providedIn: 'root'
})
export class OrdenesTrabajoService {

  private apiURL = this.baseUrl + "api/OrdenesTrabajo";



  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getOrdenesTrabajo(): Observable<iOrdenTrabajo[]> {
    console.log("ojo con esto: " + this.apiURL)
    return this.httpClient.get<iOrdenTrabajo[]>(this.apiURL);
  }

  getOrdenesTrabajoConFiltro(filtroIdCliente: string): Observable<iOrdenTrabajo[]> {
    
    return this.httpClient.get<iOrdenTrabajo[]>(this.apiURL + "/GetFiltroOrdenesTrabajo/" + filtroIdCliente);
  }

  getOrdenTrabajo(idOrdenTrabajo: string): Observable<iOrdenTrabajo> {
    return this.httpClient.get<iOrdenTrabajo>(this.apiURL + "/" + idOrdenTrabajo);
  }

  createOrdenTrabajo(ordenTrabajo: iOrdenTrabajo): Observable<iOrdenTrabajo> {
    return this.httpClient.post<iOrdenTrabajo>(this.apiURL, ordenTrabajo);
  }

  editarOrdenTrabajo(ordenTrabajo: iOrdenTrabajo): Observable<iOrdenTrabajo> {
    return this.httpClient.put<iOrdenTrabajo>(this.apiURL + "/" + ordenTrabajo.id, ordenTrabajo);
  }

  crearImagenInformePreliminar(archivo: File): Observable<string> {
    var formData = new FormData();
    formData.append("archivo", archivo, archivo.name)
    var lol = this.httpClient.post(this.apiURL + "/CrearImagenInformePreliminar", formData, { headers: headers, responseType: 'text' } );
    return lol;
  }

  crearImagenRecepcionEquipos(archivo: File): Observable<string> {
    var formData = new FormData();
    formData.append("archivo", archivo, archivo.name)
    var lol = this.httpClient.post(this.apiURL + "/CrearImagenRecepcionEquipos", formData, { headers: headers, responseType: 'text' });
    return lol;
  }

  crearImagenActaConformidad(archivo: File): Observable<string> {
    var formData = new FormData();
    formData.append("archivo", archivo, archivo.name)
    var lol = this.httpClient.post(this.apiURL + "/CrearImagenActaConformidad", formData, { headers: headers, responseType: 'text' });
    return lol;
  }
}

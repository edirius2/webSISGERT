import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iTipoMaquinaria } from './tipo-maquinaria/tipoMaquinaria';


@Injectable({
  providedIn: 'root'
})
export class TipoMaquinariaService {

  private ApiURL = this.base_url + "api/TipoMaquinarias";

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private base_url: string) { }

  getTipoMaquinarias(): Observable<iTipoMaquinaria[]> {
    return this.httpClient.get<iTipoMaquinaria[]>(this.ApiURL);
  }

  getTipoMaquinaria(idTipoMaquinaria: string): Observable<iTipoMaquinaria> {
    return this.httpClient.get<iTipoMaquinaria>(this.ApiURL + "/" + idTipoMaquinaria);
  }

  createTipoMaquinaria(TipoMaquinaria: iTipoMaquinaria): Observable<iTipoMaquinaria> {
    return this.httpClient.post<iTipoMaquinaria>(this.ApiURL, TipoMaquinaria);
  }

  updateTipoMaquinaria(TipoMaquinaria: iTipoMaquinaria): Observable<iTipoMaquinaria> {
    return this.httpClient.put<iTipoMaquinaria>(this.ApiURL + "/" + TipoMaquinaria.id, TipoMaquinaria);
  }
}

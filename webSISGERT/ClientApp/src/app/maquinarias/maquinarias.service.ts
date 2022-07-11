import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iMaquinaria } from './maquinaria';

@Injectable({
  providedIn: 'root'
})
export class MaquinariasService {

  private api_url =this.base_Url + "api/Maquinarias";

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private base_Url: string) { }

  getMaquinariasXCliente(filtroClienteId: string): Observable<iMaquinaria[]> {
    return this.httpClient.get<iMaquinaria[]>(this.api_url + "/GetFiltroMaquinariasXCliente/" + filtroClienteId);
  }

  getMaquinaria(maquinaId: string): Observable<iMaquinaria> {
    return this.httpClient.get<iMaquinaria>(this.api_url + "/" + maquinaId);
  }

  createMaquinaria(maquina: iMaquinaria): Observable<iMaquinaria> {
    return this.httpClient.post<iMaquinaria>(this.api_url, maquina);
  }

  updateMaquinaria(maquina: iMaquinaria): Observable<iMaquinaria> {
    return this.httpClient.put<iMaquinaria>(this.api_url + "/" + maquina.id, maquina);
  }

  deleteMaquinaria(maquinaId: string): Observable<iMaquinaria> {
    return this.httpClient.delete<iMaquinaria>(this.api_url + "/" + maquinaId);
  }
}

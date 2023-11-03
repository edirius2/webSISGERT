import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITipoOT } from './tipoOT';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiposOTService {

  private  apiURL = this.baseurl + "api/TiposOT";

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseurl: string) { }

  getTiposOT(): Observable<ITipoOT[]> {
    return this.httpClient.get<ITipoOT[]>(this.apiURL);
  }

  getTipoOT(tipoOTId: string): Observable<ITipoOT> {
    return this.httpClient.get<ITipoOT>(this.apiURL + "/" + tipoOTId);
  }

  createTipoOT(tipoOT: ITipoOT): Observable<ITipoOT> {
    return this.httpClient.post<ITipoOT>(this.apiURL, tipoOT);
  }

  modificarTipoOT(tipoOT: ITipoOT): Observable<ITipoOT> {
    return this.httpClient.put<ITipoOT>(this.apiURL + "/" + tipoOT.id, tipoOT);
  }

  deleteTipoOT(tipoOT: ITipoOT): Observable<ITipoOT> {
    return this.httpClient.delete<ITipoOT>(this.apiURL + "/" + tipoOT.id);
  }
}

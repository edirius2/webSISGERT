import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iMarcaMaquinaria } from './marcaMaquinaria';

@Injectable({
  providedIn: 'root'
})
export class MarcaMaquinariaService {

  private ApiURL = this.base_url + "api/MarcaMaquinarias";

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private base_url: string) { }

  getMarcasMaquinarias(): Observable<iMarcaMaquinaria[]> {
    return this.httpClient.get<iMarcaMaquinaria[]>(this.ApiURL);
  }

  getMarcaMaquinaria(marcaMaquinariaId: string): Observable<iMarcaMaquinaria> {
    return this.httpClient.get<iMarcaMaquinaria>(this.ApiURL + "/" + marcaMaquinariaId);
  }

  createMarcaMaquinaria(marcaMaquinaria: iMarcaMaquinaria): Observable<iMarcaMaquinaria> {
    return this.httpClient.post<iMarcaMaquinaria>(this.ApiURL, marcaMaquinaria);
  }

  updateMarcaMaquinaria(marcaMaquinaria: iMarcaMaquinaria): Observable<iMarcaMaquinaria> {
    return this.httpClient.put<iMarcaMaquinaria>(this.ApiURL + "/" + marcaMaquinaria.id, marcaMaquinaria);
  }
}

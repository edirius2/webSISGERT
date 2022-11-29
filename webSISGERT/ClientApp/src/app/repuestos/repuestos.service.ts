import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRepuesto } from './repuesto';

@Injectable({
  providedIn: 'root'
})
export class RepuestosService {

  private apiURL = this.base_Url + "api/repuestos";

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private base_Url: string) { }

  getRepuestos(): Observable<IRepuesto[]> {
    return this.httpClient.get<IRepuesto[]>(this.apiURL);
  }

  getRepuesto(idRepuesto: string): Observable<IRepuesto> {
    return this.httpClient.get<IRepuesto>(this.apiURL + '/' + idRepuesto);
  }

  createRepuesto(repuesto: IRepuesto): Observable<IRepuesto> {
    return this.httpClient.post<IRepuesto>(this.apiURL, repuesto);
  }

  editarRepuesto(repuesto: IRepuesto): Observable<IRepuesto> {
    return this.httpClient.put<IRepuesto>(this.apiURL + '/' + repuesto.id, repuesto);
  }
}

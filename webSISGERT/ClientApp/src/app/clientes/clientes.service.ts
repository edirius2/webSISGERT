import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ICliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private apiURL = this.baseUrl + "api/clientes";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

    getClientes(): Observable < ICliente[] > {
      return this.http.get<ICliente[]>(this.apiURL);
  }

  getCliente(clienteId: string): Observable<ICliente> {
    return this.http.get<ICliente>(this.apiURL + "/" + clienteId);
  }

  createCliente(cliente: ICliente): Observable<ICliente> {
    return this.http.post<ICliente>(this.apiURL, cliente);
  }

  updateCliente(cliente: ICliente): Observable<ICliente> {
    return this.http.put<ICliente>(this.apiURL + "/" + cliente.id, cliente);
    
  }
}

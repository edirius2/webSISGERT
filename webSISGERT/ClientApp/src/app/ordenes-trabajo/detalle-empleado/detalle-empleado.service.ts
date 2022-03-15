import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDetalleEmpleado } from './detalleEmpleado';
import { IEmpleado } from 'src/app/empleados/empleado';


@Injectable({
  providedIn: 'root'
})
export class DetalleEmpleadoService {

  apiUrl = this.baseUrl + "api/DetalleEmpleados";

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  getDetallesEmpleado(idOrdenTrabajo: string) {
    return  this.httpClient.get<IDetalleEmpleado[]>(this.apiUrl + "/" + idOrdenTrabajo);
  }

  getDetalleEmpleado(idDetalleEmpleado: string) {
    return this.httpClient.get<IDetalleEmpleado>(this.apiUrl + "/GetDetalleEmpleado/" + idDetalleEmpleado);
  }

  createDetalleEmpleado(detalleEmpleado: IDetalleEmpleado) {
    return this.httpClient.post<IEmpleado>(this.apiUrl, detalleEmpleado);
  }

  editarDetalleEmpleado(detalleEmpleado: IDetalleEmpleado) {
    return this.httpClient.post<IEmpleado>(this.apiUrl + "/" + detalleEmpleado.id, detalleEmpleado);
  }
}

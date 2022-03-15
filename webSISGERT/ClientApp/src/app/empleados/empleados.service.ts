import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmpleado } from './empleado';


@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private apiURL = this.baseUrl + 'api/empleados';
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl:string ) { }

  getEmpleados(): Observable<IEmpleado[]> {
    return this.http.get<IEmpleado[]>(this.apiURL);
  }

  getEmpleado(idEmpleado: string): Observable<IEmpleado> {
    return this.http.get<IEmpleado>(this.apiURL + "/" + idEmpleado);
  }

  createEmpleado(empleado: IEmpleado): Observable<IEmpleado> {
    return this.http.post<IEmpleado>(this.apiURL, empleado);
  }

  updateEmpleado(empleado: IEmpleado): Observable<IEmpleado> {
    return this.http.put<IEmpleado>(this.apiURL + "/" + empleado.id, empleado);
  }
}

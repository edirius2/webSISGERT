import { Component, OnInit } from '@angular/core';
import { IEmpleado } from './empleado';
import { EmpleadosService } from './empleados.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor(private empleadosService: EmpleadosService) { }
  empleados: IEmpleado[];
  
  ngOnInit() {
    this.empleadosService.getEmpleados().subscribe(
      empleadosDesdeWS => this.empleados = empleadosDesdeWS,
      error => console.error(error)
    );
  }

  
  

}

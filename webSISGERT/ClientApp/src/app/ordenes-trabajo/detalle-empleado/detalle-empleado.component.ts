import { Component, OnInit } from '@angular/core';
import { IEmpleado } from 'src/app/empleados/empleado';
import { observable } from 'rxjs';
import { DetalleEmpleadoService } from './detalle-empleado.service';
import { iOrdenTrabajo } from '../ordenTrabajo';
import { ActivatedRoute, Router } from '@angular/router';
import { IDetalleEmpleado } from './detalleEmpleado';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.css']
})
export class DetalleEmpleadoComponent implements OnInit {

  detalleEmpleados: IDetalleEmpleado[];

  detalleOrdenTrabajoEntrante: iOrdenTrabajo;
  ordenTrabajoId: string = '0';

  constructor(private detalleEmpleadoService: DetalleEmpleadoService, private activatedRouter: ActivatedRoute, router: Router) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      if (params['idOT'] == undefined) {
        return;
      }
      this.ordenTrabajoId = params['idOT'];
      console.log(this.ordenTrabajoId);
      this.detalleEmpleadoService.getDetallesEmpleado(this.ordenTrabajoId)
        .subscribe(detalleEmpleadoDesdeWS => this.detalleEmpleados = detalleEmpleadoDesdeWS,
          error => console.error(error));

    });

  }

}

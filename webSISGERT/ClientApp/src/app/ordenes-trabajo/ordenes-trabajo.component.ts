import { Component, OnInit } from '@angular/core';
import { OrdenesTrabajoService } from './ordenes-trabajo.service';
import { iOrdenTrabajo } from './ordenTrabajo';
import { forEach } from '@angular/router/src/utils/collection';
import { contenedorOrdenTrabajoService } from './contenedor-orden-trabajo/contenedor-orden-trabajo.service';

@Component({
  selector: 'app-ordenes-trabajo',
  templateUrl: './ordenes-trabajo.component.html',
  styleUrls: ['./ordenes-trabajo.component.css']
})
export class OrdenesTrabajoComponent implements OnInit {

  ordenesTrabajo: iOrdenTrabajo[];
  sumaPagos: number;

  constructor(private ordenesTrabajosService: OrdenesTrabajoService, private contenedorOrdenTrabajo: contenedorOrdenTrabajoService) { }

  ngOnInit() {
    this.ordenesTrabajosService.getOrdenesTrabajo().
      subscribe(ordenesDesdeWS => this.prueba(ordenesDesdeWS),
      error => console.error(error));
  }

  prueba(ordenes: iOrdenTrabajo[]) {
    this.ordenesTrabajo = ordenes;
    this.ordenesTrabajo.forEach(item => {
      item.detallesPagos.forEach(item2 => {
        this.sumaPagos = item2.pago;
      });
      item.sumaPagos = this.sumaPagos;
      this.sumaPagos = 0;
    });
    console.log(this.ordenesTrabajo[0])
  }

  llenarDetalle(ot: string) {
    this.contenedorOrdenTrabajo.toggle(ot);
  }
}

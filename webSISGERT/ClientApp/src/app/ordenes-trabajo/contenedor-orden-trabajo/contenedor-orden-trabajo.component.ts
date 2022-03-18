import { Component, OnInit } from '@angular/core';
import { iOrdenTrabajo } from '../ordenTrabajo';
import { Router, RouterOutlet } from '@angular/router';
import { OrdenesTrabajoService } from '../ordenes-trabajo.service';
import { contenedorOrdenTrabajoService } from './contenedor-orden-trabajo.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-contenedor-orden-trabajo',
  templateUrl: './contenedor-orden-trabajo.component.html',
  styleUrls: ['./contenedor-orden-trabajo.component.css']
})
export class ContenedorOrdenTrabajoComponent implements OnInit {

  public ordenTrabajoId: string;

  ordenTrabajo: iOrdenTrabajo;
  sumaPagos: number = 0;

  constructor(private ordenTrabajoService: OrdenesTrabajoService, private router: Router, private contenedorOrdenTrabajoService: contenedorOrdenTrabajoService) {
    }

  ngOnInit() {

    this.contenedorOrdenTrabajoService.change
      .subscribe(idOrdenTrabajoDesdeWS => this.llenarDetalleTareas(idOrdenTrabajoDesdeWS),
      error => console.error(error));

    
    
  }

  llenarDetalleTareas(id: string) {

    if (id != "0") {
      this.ordenTrabajoService.getOrdenTrabajo(id)
        .subscribe(ordenTrabajoDesdeWS => this.calcularSumas(ordenTrabajoDesdeWS) ,
        error => console.error(error));

    
    }
    
  }

  calcularSumas(orden: iOrdenTrabajo) {
    this.ordenTrabajo = orden;
    this.ordenTrabajo.detallesPagos.forEach(item2 => {
      this.sumaPagos += item2.pago;
    });
    this.ordenTrabajo.sumaPagos = this.sumaPagos;
    this.sumaPagos = 0;

    this.ordenTrabajo.detallesTareas.forEach(item3 => {
      this.sumaPagos += item3.precio;
    });
    this.ordenTrabajo.sumaTareas = this.sumaPagos;
    this.sumaPagos = 0;
  }
  navegarDetalleTareas() {
    //this.router.navigate(["/contenedorTrabajo", { outlets: { 'detallesTareas': ["1"] }}]);
  }

}

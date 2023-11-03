import { Component, OnInit, Input} from '@angular/core';
import { iDetalleTarea } from './detalleTarea';
import { DetalleTareaService } from './detalle-tarea.service';
import { observable } from 'rxjs';
import { iOrdenTrabajo } from '../ordenTrabajo';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap, mergeMap } from 'rxjs/operators';
//import { getCurrencySymbol } from "@angular/common";

@Component({
  selector: 'app-detalle-tarea',
  templateUrl: './detalle-tarea.component.html',
  styleUrls: ['./detalle-tarea.component.css']
})
export class DetalleTareaComponent implements OnInit {

  detalleTareas: iDetalleTarea[];
  //cheatSymbol = getCurrencySymbol("es-PE", "wide");
  //@Input() ordenTrabajoEntrante: iOrdenTrabajo;
  ordenTrabajoEntrante: iOrdenTrabajo;
  ordenTrabajoId: string = '0';

  totalPreciotareas: number = 0;
  totatNumerotareas: number = 0;

  constructor(private detalleTareasService: DetalleTareaService, private router: Router, private activatedRouter: ActivatedRoute) {
  }

  ngOnInit() {

    this.activatedRouter.params.subscribe(params => {
      if (params['idOT'] == undefined) {
        return;
      }
      this.ordenTrabajoId = params['idOT'];
      this.detalleTareasService.getDetallesTarea(this.ordenTrabajoId)
        .subscribe(detalleTareaDesdeWS => this.cargarTabla(detalleTareaDesdeWS),
          error => console.error(error));

    });

  }

  cargarTabla(detalles: iDetalleTarea[]) {
    this.detalleTareas = detalles;
    this.totalPreciotareas = 0;
    this.totatNumerotareas = 0;

    this.detalleTareas.forEach(det => {
      this.totalPreciotareas += det.precio;
      this.totatNumerotareas += det.cantidad;
    });
  }
}

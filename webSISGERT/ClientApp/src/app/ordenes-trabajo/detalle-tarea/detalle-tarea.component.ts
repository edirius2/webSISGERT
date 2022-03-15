import { Component, OnInit, Input } from '@angular/core';
import { iDetalleTarea } from './detalleTarea';
import { DetalleTareaService } from './detalle-tarea.service';
import { observable } from 'rxjs';
import { iOrdenTrabajo } from '../ordenTrabajo';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-detalle-tarea',
  templateUrl: './detalle-tarea.component.html',
  styleUrls: ['./detalle-tarea.component.css']
})
export class DetalleTareaComponent implements OnInit {

  detalleTareas: iDetalleTarea[];

  //@Input() ordenTrabajoEntrante: iOrdenTrabajo;
  ordenTrabajoEntrante: iOrdenTrabajo;
  ordenTrabajoId: string = '0';
  constructor(private detalleTareasService: DetalleTareaService, private router: Router, private activatedRouter: ActivatedRoute) {
  }

  ngOnInit() {

    //  this.detalleTareasService.getDetallesTarea(this.ordenTrabajoId)
    //    .subscribe(detalleTareaDesdeWS => this.detalleTareas = detalleTareaDesdeWS,
    //    error => console.error(error));
    //console.log(this.detalleTareas);
    //this.activatedRouter.params.subscribe(params => this.cargarFormulario(params['idOT']),
    //  error => console.error(error));
    //this.activatedRouter.paramMap.pipe(
    //  switchMap((params: Params) => {
    //    return this.detalleTareasService.getDetallesTarea(params.get('idOT'))
    //  })
    //).subscribe(detalleTareaDesdeWS => this.detalletareas = detalleTareaDesdeWS,
    //  error => console.error(error));


    this.activatedRouter.params.subscribe(params => {
      if (params['idOT'] == undefined) {
        return;
      }
      this.ordenTrabajoId = params['idOT'];
      this.detalleTareasService.getDetallesTarea(this.ordenTrabajoId)
        .subscribe(detalleTareaDesdeWS => this.detalleTareas = detalleTareaDesdeWS,
          error => console.error(error));

    });



    //cargarFormulario(idOT:string) {
    //    this.detalleTareasService.getDetallesTarea(idOT)
    //      .subscribe(detalleTareaDesdeWS => this.detalleTareas = detalleTareaDesdeWS,
    //    error => console.error(error));
    //  console.log(this.detalleTareas);
    //}
  }
}

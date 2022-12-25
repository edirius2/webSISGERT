import { Component, OnInit } from '@angular/core';
import { iDetalleCosto } from './detalleCosto';
import { DetalleCostoService } from './detalle-costo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-costo',
  templateUrl: './detalle-costo.component.html',
  styleUrls: ['./detalle-costo.component.css']
})
export class DetalleCostoComponent implements OnInit {

  detallesCostos: iDetalleCosto[];
  ordenTrabajoId: string = "0";

  constructor(private activatedRouter: ActivatedRoute, private detalleCostoService: DetalleCostoService) { }

  ngOnInit() {

    this.activatedRouter.params.subscribe(params => {
      if (params["idOT"] == undefined) {
        return
      }

      this.ordenTrabajoId = params["idOT"];
      this.detalleCostoService.getDetalleCostos(this.ordenTrabajoId).
        subscribe(detallesDesdeWS => this.detallesCostos = detallesDesdeWS,
          error => console.error(error));
    });
  }

}

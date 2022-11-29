import { Component, OnInit } from '@angular/core';
import { DetalleTareaCService } from './detalle-tarea-c.service';
import { iDetalleTareaCotizacion } from './detalleTareaCotizacion';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-tarea-c',
  templateUrl: './detalle-tarea-c.component.html',
  styleUrls: ['./detalle-tarea-c.component.css']
})
export class DetalleTareaCComponent implements OnInit {

  detalleTareas: iDetalleTareaCotizacion[];
  cotizacionId: string ='0';

  constructor(private detalleTareasCService: DetalleTareaCService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      if (params['idC'] == undefined) {
        return;
      }
      this.cotizacionId = params['idC'];
      this.detalleTareasCService.getDetalleTareaCotizaciones(this.cotizacionId).
        subscribe(detallesDesdeWS => this.detalleTareas = detallesDesdeWS,
          error => console.error(error));
    });
    
  }

}

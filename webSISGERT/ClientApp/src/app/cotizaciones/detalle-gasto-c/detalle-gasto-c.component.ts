import { Component, OnInit } from '@angular/core';
import { DetalleGastoCService } from './detalle-gasto-c.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CostosService } from 'src/app/costos/costos.service';
import { iDetalleCostoCotizacion } from './detalleCostoCotizacion';


@Component({
  selector: 'app-detalle-gasto-c',
  templateUrl: './detalle-gasto-c.component.html',
  styleUrls: ['./detalle-gasto-c.component.css']
})
export class DetalleGastoCComponent implements OnInit {

  cotizacionId: string='0';
 
  
  detallesCostosC: iDetalleCostoCotizacion[];

  constructor(private detalleGastoCService: DetalleGastoCService, private costosService: CostosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['idC'] == undefined) {
        return;
      }

      this.cotizacionId = params['idC'];
     
      this.detalleGastoCService.getDetalleCostoCotizaciones(this.cotizacionId).
        subscribe(detallesDesdeWS => this.detallesCostosC = detallesDesdeWS,
          error => console.error(error));
    });
  }

}

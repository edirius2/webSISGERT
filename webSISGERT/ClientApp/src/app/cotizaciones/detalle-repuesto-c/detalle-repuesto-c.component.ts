import { Component, OnInit } from '@angular/core';
import { DetalleRepuestoCService } from './detalle-repuesto-c.service';
import { iDetalleRepuestoCotizacion } from './detalleRepuestoCotizacion';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-repuesto-c',
  templateUrl: './detalle-repuesto-c.component.html',
  styleUrls: ['./detalle-repuesto-c.component.css']
})
export class DetalleRepuestoCComponent implements OnInit {

  listaRepuestos: iDetalleRepuestoCotizacion[];
  cotizacionId: string;

  constructor(private detalleRepuestosCService: DetalleRepuestoCService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      if (params['idC'] == undefined) {
        return;
      }
      this.cotizacionId = params['idC'];
      this.detalleRepuestosCService.getDetalleRepuestosCotizaciones(this.cotizacionId).
        subscribe(detallesRepuestosDesdeWS => this.listaRepuestos = detallesRepuestosDesdeWS,
          error => console.error(error));
    });
    
  }

}

import { Component, OnInit } from '@angular/core';
import { IDetalleRepuesto } from './detalleRepuesto';
import { DetalleRepuestoService } from './detalle-repuesto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-repuesto',
  templateUrl: './detalle-repuesto.component.html',
  styleUrls: ['./detalle-repuesto.component.css']
})
export class DetalleRepuestoComponent implements OnInit {

  listaDetallesRepuesto: IDetalleRepuesto[];
  ordenTrabajoId: string;

  constructor(private detalleRepuestoService: DetalleRepuestoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      if (params["idOT"] == undefined) {
        return
      }
      this.ordenTrabajoId = params["idOT"];
      this.detalleRepuestoService.getDetallesRepuesto(this.ordenTrabajoId).
        subscribe(detallesDesdeWS => this.listaDetallesRepuesto = detallesDesdeWS,
          error => console.error(error));
    });
  }

}

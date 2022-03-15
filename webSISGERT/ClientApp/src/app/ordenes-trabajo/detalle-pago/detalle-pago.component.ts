import { Component, OnInit } from '@angular/core';
import { IDetallePago } from './detallePago';
import { DetallePagoService } from './detalle-pago.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-pago',
  templateUrl: './detalle-pago.component.html',
  styleUrls: ['./detalle-pago.component.css']
})
export class DetallePagoComponent implements OnInit {

  detallesPago: IDetallePago[];
  idOT: string = "0";

  constructor(private detallePagosService: DetallePagoService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      if (params['idOT'] == undefined) {
        return;
      }
      this.idOT = params['idOT'];
      this.detallePagosService.getPagos(this.idOT)
        .subscribe(detallePagoDesdeWS => this.detallesPago = detallePagoDesdeWS,
          error => console.error(error));
    });


    
  }

}

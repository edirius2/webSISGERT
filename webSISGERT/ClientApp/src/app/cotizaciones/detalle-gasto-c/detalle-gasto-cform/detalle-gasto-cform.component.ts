import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalleGastoCService } from '../detalle-gasto-c.service';
import { CostosService } from 'src/app/costos/costos.service';
import { iCosto } from 'src/app/costos/costo';
import { iDetalleCostoCotizacion } from '../detalleCostoCotizacion';

@Component({
  selector: 'app-detalle-gasto-cform',
  templateUrl: './detalle-gasto-cform.component.html',
  styleUrls: ['./detalle-gasto-cform.component.css']
})
export class DetalleGastoCFormComponent implements OnInit {

  formGroup: FormGroup;
  cotizacionId: string;
  detalleId: string;
  modoEdicion: boolean;
  listaCostos: iCosto[];
  costoSeleccionado: iCosto;

  constructor(private fb: FormBuilder, private activatedRouter: ActivatedRoute, private router: Router, private costosService: CostosService, private detalleCostoCService: DetalleGastoCService) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      id: '',
      costoId: '',
      costo: this.fb.group({
        id: '',
        codigo: '',
        descripcion: '',
        comentario: ''
      }),
      precio: '',
      cotizacionId: '',
      cotizacion: ''
    });

    this.costosService.getCostos().
      subscribe(costosDesdeWS => this.listaCostos = costosDesdeWS,
        error => console.error(error));

    this.activatedRouter.paramMap.subscribe(params => {
      if (params.get('id') == undefined) {
        this.cotizacionId = params.get("idC");
        this.modoEdicion = false;
        return
      }
      this.modoEdicion = true;
      this.detalleId = params.get('id');
      this.detalleCostoCService.getDetalleCostoCotizacion(this.detalleId).
        subscribe(detalleDesdeWS => this.cargarFormulario(detalleDesdeWS),
          error => console.error(error));
    });
  }

  cargarFormulario(detalle: iDetalleCostoCotizacion) {
    this.formGroup.patchValue({
      id: detalle.id,
      costoId: detalle.costoId,
      costo: detalle.costo,
      precio: detalle.precio,
      cotizacionId: detalle.cotizacionId,
      cotizacion: detalle.cotizacion
    });

    this.cotizacionId = detalle.cotizacionId.toString();
  }

  save() {
    let detalle: iDetalleCostoCotizacion = Object.assign({}, this.formGroup.value);

    
    

    if (this.modoEdicion) {
      detalle.id = Number(this.detalleId);
      detalle.costoId = Number(detalle.costo.id);
      this.detalleCostoCService.editDetalleCostoCotizacion(detalle).
        subscribe(detalleDesdeWS => this.onSaveSucess(),
          error => console.error(error));
    }
    else {
      detalle.id = 0;
      detalle.cotizacionId = Number(this.cotizacionId);
      detalle.costoId = Number(detalle.costo.id);
      this.detalleCostoCService.createDetalleCostoCotizacion(detalle).
        subscribe(detalleDesdeWS => this.onSaveSucess(),
          error => console.error(error));
    }
  }

  setCosto(costo: iCosto, input: any) {
    if (input.isUserInput) {
      this.costoSeleccionado = costo;
      this.formGroup.get('costo').patchValue({
        id: costo.id,
        codigo: costo.codigo,
        descripcion: costo.descripcion,
        comentario: costo.comentario,
      });
    }
  }

  onSaveSucess() {
    this.router.navigate(["/principal/cotizaciones-editar/" + this.cotizacionId + "/detallesGastosC/" + this.cotizacionId]);
  }
}

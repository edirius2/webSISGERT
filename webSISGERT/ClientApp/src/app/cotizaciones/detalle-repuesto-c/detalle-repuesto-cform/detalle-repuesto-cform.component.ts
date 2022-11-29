import { Component, OnInit } from '@angular/core';
import { DetalleRepuestoCService } from '../detalle-repuesto-c.service';
import { RepuestosService } from 'src/app/repuestos/repuestos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IRepuesto } from 'src/app/repuestos/repuesto';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { iDetalleRepuestoCotizacion } from '../detalleRepuestoCotizacion';

@Component({
  selector: 'app-detalle-repuesto-cform',
  templateUrl: './detalle-repuesto-cform.component.html',
  styleUrls: ['./detalle-repuesto-cform.component.css']
})
export class DetalleRepuestoCformComponent implements OnInit {

  modoEdicion: boolean = false;
  cotizacionId: string;
  detalleId: string;
  listaRepuestos: IRepuesto[];
  formGroup: FormGroup;
  stateCtrl = new FormControl();
  constructor(private detalleRepuestosCService: DetalleRepuestoCService, private repuestosService: RepuestosService, private activatedRoute: ActivatedRoute,
    private router: Router, private fb: FormBuilder) { }

  ngOnInit() {

    this.formGroup = this.fb.group({
      id: '',
      repuestoId: '',
      repuesto: this.fb.group({
        id: '',
        nombre: '',
        precioReferencial: ''
      }),
      cotizacionId: '',
      cotizacion: '',
      cantidad: '',
      costoRepuesto: ''
    });

    this.repuestosService.getRepuestos().
      subscribe(repuestosDesdeWS => this.listaRepuestos = repuestosDesdeWS,
        error => console.error(error));

    this.activatedRoute.paramMap.subscribe(params => {
      if (params.get('id') == undefined) {
        this.modoEdicion = false;
        this.cotizacionId = params.get('idC');
        
        this.detalleId = '0';
        return;
      }
      this.modoEdicion = true;
      this.detalleId = params.get('id');
      this.detalleRepuestosCService.getDetalleRepuestoCotizacion(this.detalleId).
        subscribe(detalleDesdeWS => this.cargarFormulario(detalleDesdeWS),
          error => console.error(error));

    });
  }

  cargarFormulario(detalle: iDetalleRepuestoCotizacion) {
    this.formGroup.patchValue({
      id: detalle.id,
      repuestoId: detalle.repuestoId,
      repuesto: detalle.repuesto,
      cotizacionId: detalle.cotizacionId,
      cotizacion: '',
      cantidad: detalle.cantidad,
      costoRepuesto: detalle.costoRepuesto
    });
  }

  setRepuesto(repuesto: IRepuesto, event: any) {
    this.formGroup.get('repuesto').patchValue({
      id: repuesto.id,
      nombre: repuesto.nombre,
      precioReferencial: repuesto.precioReferencial
    });
  }

  save() {
    let detalle: iDetalleRepuestoCotizacion = Object.assign({}, this.formGroup.value);

    if (this.modoEdicion) {
      this.detalleRepuestosCService.editDetalleRepuestoCotizacion(detalle).
        subscribe(detalleDesdeWS => this.saveOnSucess(),
          error => console.error(error));
    }
    else {
      detalle.id = 0;
      detalle.cotizacionId = Number(this.cotizacionId);
      detalle.repuestoId = Number(detalle.repuesto.id);
      this.detalleRepuestosCService.createDetalleRepuestoCotizacion(detalle).
        subscribe(detalleDesdeWS => this.saveOnSucess(),
          error => console.error(error));
    }
  }

  saveOnSucess() {
    this.router.navigate(["/principal/cotizaciones-editar/" + this.cotizacionId + "/detallesRepuestosC/" + this.cotizacionId])
  }
}

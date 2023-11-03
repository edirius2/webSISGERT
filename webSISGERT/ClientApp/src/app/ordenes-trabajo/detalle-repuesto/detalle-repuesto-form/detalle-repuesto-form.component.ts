import { Component, OnInit } from '@angular/core';
import { IRepuesto } from 'src/app/repuestos/repuesto';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DetalleRepuestoService } from '../detalle-repuesto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RepuestosService } from 'src/app/repuestos/repuestos.service';
import { IDetalleRepuesto } from '../detalleRepuesto';

@Component({
  selector: 'app-detalle-repuesto-form',
  templateUrl: './detalle-repuesto-form.component.html',
  styleUrls: ['./detalle-repuesto-form.component.css']
})
export class DetalleRepuestoFormComponent implements OnInit {
  stateCtrl = new FormControl();

  modoEdicion: boolean;
  repuestoSeleccionado: IRepuesto;
  formGroup: FormGroup;
  listaRepuestos: IRepuesto[];
  ordenTrabajoId: string="0";
  detalleRepuestoId: string="0";

  constructor(private detalleRepuestoService: DetalleRepuestoService, private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private repuestosService: RepuestosService) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      id: '',
      cantidad: '',
      precio: '',
      repuestoId: '',
      repuesto: this.fb.group({
        id: '',
        nombre: '',
        precioReferencial: ''
      }),
      ordenTrabajoId: '',
      ordenTrabajo: ''
    });

    this.repuestosService.getRepuestos().
      subscribe(repuestosDesdeWS => this.listaRepuestos = repuestosDesdeWS,
      error => console.error(error));

    this.activatedRoute.paramMap.subscribe(params => {
      if (params.get("id") == undefined) {
        this.modoEdicion = false;
        this.ordenTrabajoId = params.get("idOT");
      }
      else {
        this.modoEdicion = true;
        this.detalleRepuestoId = params.get("id");
        this.detalleRepuestoService.getDetalleRepuesto(this.detalleRepuestoId).
          subscribe(detalleDesdeWS => this.cargarFormulario(detalleDesdeWS),
          error => console.error(error));

      }
    });
  }

  cargarFormulario(detalle: IDetalleRepuesto) {
    this.ordenTrabajoId = detalle.ordenTrabajoId.toString();

    this.formGroup.patchValue({
      id: detalle.id,
      cantidad: detalle.cantidad,
      precio: detalle.precio,
      repuestoId: detalle.repuestoId,
      repuesto: detalle.repuesto,
      ordenTrabajoId: detalle.ordenTrabajoId,
      ordenTrabajo: ''
    });
  }

  save() {
    let detalle: IDetalleRepuesto = Object.assign({}, this.formGroup.value);

    if (this.modoEdicion) {
      this.detalleRepuestoService.editarDetalleRepuesto(detalle).
        subscribe(detalleDesdeWS => this.onSaveSucess(),
          error => console.error(error));
    }
    else {
      detalle.id = 0;
      detalle.ordenTrabajoId = Number(this.ordenTrabajoId);
      detalle.repuestoId = detalle.repuesto.id;
      this.detalleRepuestoService.createDetalleRepuesto(detalle).
        subscribe(detalleDesdeWS => this.onSaveSucess(),
          error => console.error(error));
    }
  }

  setRepuesto(repuesto: IRepuesto, event: any) {
    if (event.isUserInput) {
      this.repuestoSeleccionado = repuesto;
      this.formGroup.get('repuesto').patchValue({
        id: this.repuestoSeleccionado.id,
        nombre: this.repuestoSeleccionado.nombre,
        precioReferencial: this.repuestoSeleccionado.precioReferencial
      });
    }
  }

  onSaveSucess() {
    alert("Datos guardados");
    this.router.navigate(["/principal/menuOrdenes-editar/" + this.ordenTrabajoId + "/detallesRepuestos/" + this.ordenTrabajoId]);
  }
}

import { Component, OnInit } from '@angular/core';
import { iCosto } from 'src/app/costos/costo';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalleCostoService } from '../detalle-costo.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CostosService } from 'src/app/costos/costos.service';
import { iDetalleCosto } from '../detalleCosto';

@Component({
  selector: 'app-detalle-costo-form',
  templateUrl: './detalle-costo-form.component.html',
  styleUrls: ['./detalle-costo-form.component.css']
})
export class DetalleCostoFormComponent implements OnInit {
  stateCtrl = new FormControl();

  listaCostos: iCosto[];
  ordenTrabajoId: string = "0";
  detalleCostoId: string = "0";
  formGroup: FormGroup;
  modoEdicion: boolean = false;
  costoSeleccionado: iCosto;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private detalleCostoService: DetalleCostoService, private costoService: CostosService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      id: '',
      ordenTrabajoId: '',
      ordenTrabajo: '',
      costoId: '',
      costo: this.fb.group({
        id: '',
        codigo: '',
        descripcion: '',
        comentario: ''
      }),
      precio: ''
    });

    this.costoService.getCostos().
      subscribe(costosDesdeWS => this.listaCostos = costosDesdeWS,
        error => console.error(error));

    this.activatedRoute.paramMap.subscribe(params => {
      if (params.get('id') == undefined) {
        this.modoEdicion = false;
        this.ordenTrabajoId = params.get('idOT');
        return
      }
      this.modoEdicion = true;
      this.detalleCostoId = params.get('id');
      this.detalleCostoService.getDetalleCosto(this.detalleCostoId).
        subscribe(costoDesdeWS => this.cargarFormulario(costoDesdeWS),
          error => console.error(error));
    });
  }

  cargarFormulario(costo: iDetalleCosto) {
    this.detalleCostoId = costo.id.toString();
    this.formGroup.patchValue({
      id: costo.id,
      ordenTrabajoId: costo.ordenTrabajoId,
      ordenTrabajo: costo.ordenTrabajo,
      costoId: costo.costoId,
      costo: costo.costo,
      precio: costo.precio
    });
  }

  save() {
    let detalle: iDetalleCosto = Object.assign({}, this.formGroup.value);
    if (this.modoEdicion) {
      this.detalleCostoService.editarDetalleCosto(detalle).
        subscribe(costoDesdeWS => this.saveSucess(),
          error => console.error(error));
    }
    else {
      detalle.id = 0;
      detalle.costoId = detalle.costo.id;
      detalle.ordenTrabajoId = Number(this.ordenTrabajoId);
      this.detalleCostoService.createDetalleCosto(detalle).
        subscribe(costoDesdeWS => this.saveSucess(),
          error => console.error(error));
    }
  }

  saveSucess() {
    alert("Datos Guardados");
    this.router.navigate(["/principal/menuOrdenes-editar/" + this.ordenTrabajoId + "/detallesCostos/" + this.ordenTrabajoId]);
  }

  setCosto(costo: iCosto, event: any) {
    if (event.isUserInput) {
      this.costoSeleccionado = costo;
      this.formGroup.get('costo').patchValue({
        id: this.costoSeleccionado.id,
        codigo: this.costoSeleccionado.codigo,
        descripcion: this.costoSeleccionado.descripcion,
        comentario: this.costoSeleccionado.comentario
      });
    }
    
  }
}

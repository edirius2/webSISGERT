import { Component, OnInit } from '@angular/core';
import { CostosService } from '../costos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { iDetalleCosto } from 'src/app/ordenes-trabajo/detalle-costo/detalleCosto';
import { iCosto } from '../costo';

@Component({
  selector: 'app-costos-form',
  templateUrl: './costos-form.component.html',
  styleUrls: ['./costos-form.component.css']
})
export class CostosFormComponent implements OnInit {

  modoEdicion: boolean;
  costoId: string;
  formGroup: FormGroup;

  constructor(private fb: FormBuilder,  private costosService: CostosService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.formGroup = this.fb.group({
      id: '',
      codigo: '',
      descripcion: '',
      comentario: ''
    });

    this.activatedRoute.paramMap.subscribe(params => {
      if (params.get('id') == undefined) {
        this.modoEdicion = false;
        return;
      }

      this.modoEdicion = true;
      this.costoId = params.get('id');
      this.costosService.getCosto(this.costoId).
        subscribe(costoDesdeWS => this.cargarFormulario(costoDesdeWS),
          error => console.error(error));
    });
  }

  cargarFormulario(costo: iCosto) {
    this.formGroup.patchValue({
      id: costo.id,
      codigo: costo.codigo,
      descripcion: costo.descripcion,
      comentario: costo.comentario
    });
  }

  save() {
    let costo: iCosto = Object.assign({}, this.formGroup.value);

    if (this.modoEdicion) {
      this.costosService.editCosto(costo).
        subscribe(costoDesdeWS => this.onSaveSucess(),
          error => console.error(error));
    }
    else {
      costo.id = 0;
      this.costosService.createCosto(costo).
        subscribe(costoDesdeWS => this.onSaveSucess(),
          error => console.error(error));
    }
  }

  onSaveSucess() {
    this.router.navigate(["/principal/costos"]);
  }
}

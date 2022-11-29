import { Component, OnInit } from '@angular/core';
import { RepuestosService } from '../repuestos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IRepuesto } from '../repuesto';


@Component({
  selector: 'app-repuestos-form',
  templateUrl: './repuestos-form.component.html',
  styleUrls: ['./repuestos-form.component.css']
})
export class RepuestosFormComponent implements OnInit {

  modoEdicion: boolean;
  repuestoId: string;
  formGroup: FormGroup;
  constructor(private repuestosService: RepuestosService, private router: Router, private activatedRoute: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {

    this.formGroup = this.fb.group({
      id: '',
      nombre: '',
      precioReferencial: ''
    });

    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == undefined) {
        this.modoEdicion = false;
        return;
      }
      this.modoEdicion = true;
      this.repuestoId = params['id'];
      this.repuestosService.getRepuesto(this.repuestoId).
        subscribe(repuestoDesdeWS => this.cargarFormulario(repuestoDesdeWS),
          error => console.error(error));
    });

  }

  cargarFormulario(repuesto: IRepuesto) {
    this.formGroup.patchValue({
      id: repuesto.id,
      nombre: repuesto.nombre,
      precioReferencial: repuesto.precioReferencial
    });
  }

  save() {
    let repuesto: IRepuesto = Object.assign({}, this.formGroup.value);
    if (this.modoEdicion) {
      this.repuestosService.editarRepuesto(repuesto).
        subscribe(repuestoDesdeWS => this.onSaveSucess(),
          error => console.error(error));
    }
    else {
      repuesto.id = 0;
      this.repuestosService.createRepuesto(repuesto).
        subscribe(repuestoDesdeWS => this.onSaveSucess(),
          error => console.error(error));
    }
  }

  onSaveSucess() {
    this.router.navigate(["/principal/repuestos"]);
  }
}

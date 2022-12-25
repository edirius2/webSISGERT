import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DetallePagoService } from '../detalle-pago.service';
import { IDetallePago } from '../detallePago';

@Component({
  selector: 'app-detalle-pago-form',
  templateUrl: './detalle-pago-form.component.html',
  styleUrls: ['./detalle-pago-form.component.css']
})
export class DetallePagoFormComponent implements OnInit {

  formGroup: FormGroup;
  ordenID: string = "0";
  modoEdicion: boolean = false;
  detallePagoId: string;

  constructor(private fb: FormBuilder, private activatedRouter: ActivatedRoute, private router: Router, private detallePagoService: DetallePagoService) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      id: '',
      pago: '',
      fecha: ['', Validators.required],
      ordenTrabajoId: '',
    });

    this.activatedRouter.paramMap.subscribe(params => {
      if (params['id'] == undefined) {
        this.modoEdicion = false;
        this.ordenID = params.get('idOT');
        return;
      }
      else {
        this.modoEdicion = true;
        this.detallePagoId = params.get('id');
        this.detallePagoService.getPago(this.detallePagoId)
          .subscribe(detallePago => this.cargarFormulario(detallePago),
            error => console.error(error));
      }
    });


    this.formGroup.setValue({
      id:'',
      fecha: new Date(),
      pago: '',
      ordenTrabajoId:''
    });
  }

  cargarFormulario(detallePago: IDetallePago) {
    this.formGroup.patchValue({
      id: detallePago.id,
      pago: detallePago.pago,
      fecha: detallePago.fecha,
      ordenTrabajoId: detallePago.ordenTrabajoId,
    });
  }

  save() {
    let detallePago: IDetallePago = Object.assign({}, this.formGroup.value);
    
    if (this.modoEdicion) {
      this.detallePagoService.editarPago(detallePago)
        .subscribe(detalle => this.onSaveSucess(),
          error => console.error(error));
    }
    else {
      detallePago.id = 0;
      detallePago.ordenTrabajoId = Number(this.ordenID);
      this.detallePagoService.createPago(detallePago)
        .subscribe(detalle => this.onSaveSucess(),
          error => console.error(error));
    }
  }

  onSaveSucess() {
    if (this.modoEdicion) {
      this.router.navigate(["/principal/ordenesTrabajo-editar/" + this.ordenID +"/detallesPagos/ " + this.ordenID]);
    }
    else {
      this.router.navigate(["/principal/ordenesTrabajo-editar/" + this.ordenID + "/detallesPagos/" + this.ordenID]);
    }
  }
  

}

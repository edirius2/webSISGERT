import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TiposOTService } from '../tipos-ot.service';
import { ITipoOT } from '../tipoOT';

@Component({
  selector: 'app-tipos-otform',
  templateUrl: './tipos-otform.component.html',
  styleUrls: ['./tipos-otform.component.css']
})
export class TiposOTFormComponent implements OnInit {

  formGroup: FormGroup;
  modoEdicion: boolean = false;
  tipoOTID: string ="0";

  constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private tiposOTService: TiposOTService) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      id: '',
      codigo: '',
      descripcion:''
    });

    this.activatedRoute.params.subscribe(params => {
      if (params["id"] == undefined) {
        return
      }
      this.modoEdicion = true;
      this.tipoOTID = params["id"];
      this.tiposOTService.getTipoOT(this.tipoOTID).
        subscribe(tipoOTDesdeWS => this.cargarFormulario(tipoOTDesdeWS),
          error => console.error(error));
    });
  }

  cargarFormulario(tipoOT: ITipoOT) {
    this.formGroup.patchValue({
      id: tipoOT.id.toString(),
      codigo: tipoOT.codigo,
      descripcion: tipoOT.descripcion,
    });
  }

  save() {
    let tipo: ITipoOT = Object.assign({}, this.formGroup.value);
    if (this.modoEdicion) {
      this.tiposOTService.modificarTipoOT(tipo).
        subscribe(tipoDesdeWS => this.onSaveSucess(),
          error => console.error(error));
    }
    else {
      tipo.id = 0;
      this.tiposOTService.createTipoOT(tipo).
        subscribe(tipoDesdeWS => this.onSaveSucess(),
          error => console.error(error));
    }
  }

  onSaveSucess() {
    this.router.navigate(["/principal/tiposOT"]);
  }
}

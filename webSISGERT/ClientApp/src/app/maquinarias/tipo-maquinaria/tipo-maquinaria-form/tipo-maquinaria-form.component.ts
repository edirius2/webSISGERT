import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TipoMaquinariaService } from '../../tipo-maquinaria.service';
import { Router, ActivatedRoute } from '@angular/router';
import { iTipoMaquinaria } from '../tipoMaquinaria';

@Component({
  selector: 'app-tipo-maquinaria-form',
  templateUrl: './tipo-maquinaria-form.component.html',
  styleUrls: ['./tipo-maquinaria-form.component.css']
})
export class TipoMaquinariaFormComponent implements OnInit {

  formGroup: FormGroup;
  modoEdicion: boolean = false;
  tipoMaquinariaId: number;

  constructor(private fb: FormBuilder, private tipoMaquinariaService: TipoMaquinariaService, private router: Router,
            private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      id: '',
      descripcion: ''
    });

    this.activatedRoute.params.subscribe(params => {
      if (params["id"] == undefined) {
        return;
      }
      console.info(this.modoEdicion);
      this.modoEdicion = true;
      this.tipoMaquinariaId = params["id"];
      this.tipoMaquinariaService.getTipoMaquinaria(this.tipoMaquinariaId.toString()).
        subscribe(tipoMaquinariaDesdeWS => this.cargarFormulario(tipoMaquinariaDesdeWS),
          error => console.error(error));
    });
  }

  cargarFormulario(tipoMaquinaria: iTipoMaquinaria) {
    this.formGroup.patchValue({
      id: tipoMaquinaria.id,
      nombre: tipoMaquinaria.descripcion
    });
  }

  save() {
    let tipoMaquinaria: iTipoMaquinaria = Object.assign({}, this.formGroup.value);

    if (this.modoEdicion == true) {
      tipoMaquinaria.id = this.tipoMaquinariaId;
      this.tipoMaquinariaService.updateTipoMaquinaria(tipoMaquinaria).
        subscribe(tipoMaquinariaDesdeWS => this.onSaveSucess(),
          error => console.error(error));
    }
    else {
      tipoMaquinaria.id = 0;
      this.tipoMaquinariaService.createTipoMaquinaria(tipoMaquinaria).
        subscribe(tipoMaquinariaDesdeWS => this.onSaveSucess(),
          error => console.error(error));
    }
  }

  onSaveSucess() {
    this.router.navigate(["/tipo-maquinarias"]);
  }

}

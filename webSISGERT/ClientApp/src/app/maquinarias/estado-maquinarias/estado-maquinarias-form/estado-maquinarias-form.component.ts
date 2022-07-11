import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadoMaquinariasService } from '../estado-maquinarias.service';
import { iEstadoMaquinaria } from '../estadoMaquinaria';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-estado-maquinarias-form',
  templateUrl: './estado-maquinarias-form.component.html',
  styleUrls: ['./estado-maquinarias-form.component.css']
})
export class EstadoMaquinariasFormComponent implements OnInit {

  idEstadoMaquinaria: number;
  modoEdicion: boolean = false;
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private httpClient: HttpClient, private activatedRoute: ActivatedRoute, private estadoMaquinariaService: EstadoMaquinariasService,
        private router: Router) { }

  ngOnInit() {

    this.formGroup = this.fb.group({
      id: '',
      descripcion: ''
    });
    this.activatedRoute.params.subscribe(params => {
      if (params["id"] == undefined) {
        return;
      }
      this.modoEdicion = true;
      this.idEstadoMaquinaria = params["id"];
      this.estadoMaquinariaService.getEstadoMaquinaria(this.idEstadoMaquinaria.toString()).
        subscribe(estadoMaquinariaDesdeWS => this.cargarFormulario(estadoMaquinariaDesdeWS),
          error => console.error(error));
    });
  }

  cargarFormulario(estadoMaquinaria: iEstadoMaquinaria) {
    this.formGroup.patchValue({
      id: estadoMaquinaria.id,
      descripcion: estadoMaquinaria.descripcion
    });
    
  }

  save() {
    let estadoMaquinaria = Object.assign({}, this.formGroup.value);
    if (this.modoEdicion == true) {
      estadoMaquinaria.id = this.idEstadoMaquinaria;
      this.estadoMaquinariaService.updateEstadoMaquinaria(estadoMaquinaria).
        subscribe(estadoMaquinariaDesdeWS => this.onSaveSucess(),
          error => console.error(error));
    }
    else {
      estadoMaquinaria.id = 0;
      this.estadoMaquinariaService.createEstadoMaquinaria(estadoMaquinaria).
        subscribe(estadoMaquinariaDesdeWS => this.onSaveSucess(),
          error => console.error(error));
    }
  }

  onSaveSucess() {
    this.router.navigate(["/estado-maquinarias"]);
  }
}

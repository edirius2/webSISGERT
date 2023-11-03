import { Component, OnInit } from '@angular/core';
import { EspecialidadesService } from '../especialidades.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { iEspecialidad } from '../especialidad';

@Component({
  selector: 'app-especialidades-form',
  templateUrl: './especialidades-form.component.html',
  styleUrls: ['./especialidades-form.component.css']
})
export class EspecialidadesFormComponent implements OnInit {

  EspecialidadID: string;
  modoEdicion: boolean = false;
  formGroup: FormGroup;
  especialidad: iEspecialidad

  constructor(private especialidadesService: EspecialidadesService, private router: Router, private activatedRoute: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      id: '',
      descripcion:''
    });

    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == undefined) {
        this.modoEdicion = false;
        return;
      }
      this.modoEdicion = true;
      this.EspecialidadID = params['id'];

      this.especialidadesService.getEspecialidad(this.EspecialidadID).
        subscribe(especialidadDesdeWS => this.cargarFormulario(especialidadDesdeWS),
          error => console.error(error));
    });
  }

  cargarFormulario(espe: iEspecialidad) {
    this.formGroup.patchValue({
      id: espe.id,
      descripcion: espe.descripcion
    });
  }

  save() {
    let Espe: iEspecialidad = Object.assign({}, this.formGroup.value);
    if (this.modoEdicion) {
      this.especialidadesService.editEspecialidad(Espe).
        subscribe(espeDesdeWS => this.saveOnSucess(espeDesdeWS),
          error => console.error(error));
    }
    else {
      Espe.id = 0;
      this.especialidadesService.insertEspecialidad(Espe).
        subscribe(espeDesdeWS => this.saveOnSucess(espeDesdeWS),
          error => console.error(error));
    }
  }

  saveOnSucess(espe: iEspecialidad) {
    this.router.navigateByUrl('/principal/especialidades');
  }
}

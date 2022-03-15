import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TareasService } from '../tareas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ITarea } from '../tarea';

@Component({
  selector: 'app-tareas-form',
  templateUrl: './tareas-form.component.html',
  styleUrls: ['./tareas-form.component.css']
})
export class TareasFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private tareasService: TareasService, private router: Router,
    private activatedRouter: ActivatedRoute) { }

  formGroup: FormGroup;
  modoEdicion: boolean = false;
  tareaId: number;

  ngOnInit() {
    this.formGroup = this.fb.group({
      id: '',
      nombre: '',
      precioReferencial: ''
    });

    this.activatedRouter.params.subscribe(params => {
      if (params['id'] == undefined) {
        return;
      }
      this.modoEdicion = true;
      this.tareaId = params['id'];

      this.tareasService.getTarea(this.tareaId.toString()).
        subscribe(tarea => this.cargarFormulario(tarea),
          error => console.error(error));
    });
  }

  save() {
    let tarea: ITarea = Object.assign({}, this.formGroup.value);
    if (this.modoEdicion) {
      tarea.id = this.tareaId;
      this.tareasService.updateTarea(tarea).
        subscribe(tarea => this.onSaveSucess(),
          error => console.error(error));
    }
    else {
      tarea.id = 0;
      this.tareasService.createTarea(tarea).
        subscribe(tarea => this.onSaveSucess(),
          error => console.error(error));
    }
  }

  cargarFormulario(tarea: ITarea) {
    this.formGroup.patchValue(
      {
        id: tarea.id,
        nombre: tarea.nombre,
        precioReferencial: tarea.precioReferencial
      });
  }

  onSaveSucess() {
    this.router.navigate(["/tareas"]);
  }
}

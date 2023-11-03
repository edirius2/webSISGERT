import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosService } from '../empleados.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { IEmpleado } from '../empleado';
import { iEspecialidad } from '../especialidades/especialidad';
import { EspecialidadesService } from '../especialidades/especialidades.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-empleados-form',
  templateUrl: './empleados-form.component.html',
  styleUrls: ['./empleados-form.component.css']
})
export class EmpleadosFormComponent implements OnInit {

  


  constructor(private fb: FormBuilder, private activatedRouter: ActivatedRoute, private router: Router, private empleadosService: EmpleadosService,
    private especialidadesService: EspecialidadesService) { }

  modoEdicion: boolean = false;
  formGroup : FormGroup;
  empleadoId: number;
  matcher = new MyErrorStateMatcher();
  especialidadSeleccionada: iEspecialidad;
  especialidades: iEspecialidad[];
  //emailFormControl = new FormControl('', [Validators.required]);

  ngOnInit() {
    this.formGroup = this.fb.group({
      id: '',
      tipoDocumento: '',
      numeroDocumento: ['', [Validators.maxLength(12), Validators.required]],
      nombre: '',
      telefono: ['', [Validators.maxLength(9)]],
      correoElectronico: ['', [Validators.email]],
      especialidadId: '',
      especialidad: this.fb.group({
        id: '',
        descripcion:''
      }),
      costoHora: ['', [Validators.required]]
    });


    this.especialidadesService.getEspecialidades().
      subscribe(espeDesdeWS => this.especialidades = espeDesdeWS,
        error => console.error(error));

    this.activatedRouter.params.subscribe(params => {
      if (params["id"] == undefined) {

        return;
      }
      this.modoEdicion = true;
      this.empleadoId = params["id"];

      this.empleadosService.getEmpleado(this.empleadoId.toString()).
        subscribe(empleado => this.cargarFormulario(empleado),
        error => console.error(error));

    });
  }

  cargarFormulario(empleado: IEmpleado) {
    this.formGroup.patchValue({
      id: empleado.id,
      tipoDocumento: empleado.tipoDocumento,
      numeroDocumento: empleado.numeroDocumento,
      nombre: empleado.nombre,
      telefono: empleado.telefono,
      correoElectronico: empleado.correoElectronico,
      especialidadId: empleado.especialidadId,
      especialidad: empleado.especialidad,
      costoHora: empleado.costoHora

    });
   
  }

  save() {
    let empleado: IEmpleado = Object.assign({}, this.formGroup.value);
    empleado.especialidadId = this.especialidadSeleccionada.id;
    if (this.modoEdicion) {
      empleado.id = this.empleadoId;
     
      this.empleadosService.updateEmpleado(empleado)
        .subscribe(empleadoDesdeWS => this.onSaveSucess(),
          error => console.error(error));
    }
    else {
      empleado.id = 0;
      empleado.tipoDocumento = 0;
     
      this.empleadosService.createEmpleado(empleado)
        .subscribe(empleadosDesdeWS => this.onSaveSucess(),
          error => console.error(error));
    }
  }

  onSaveSucess() {
    this.router.navigate(['/principal/empleados']);
  }

  getEspecialidades(event: any, espe: iEspecialidad) {
    if (event.isUserInput) {
      this.especialidadSeleccionada = espe;
      this.formGroup.get('especialidad').patchValue({
        id: espe.id,
        descripcion: espe.descripcion
      });
    }
    
  }


}



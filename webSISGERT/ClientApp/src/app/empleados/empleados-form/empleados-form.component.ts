import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosService } from '../empleados.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { IEmpleado } from '../empleado';

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

  


  constructor(private fb: FormBuilder, private activatedRouter: ActivatedRoute, private router: Router, private empleadosService: EmpleadosService) { }

  modoEdicion: boolean = false;
  formGroup : FormGroup;
  empleadoId: number;
  matcher = new MyErrorStateMatcher();
  //emailFormControl = new FormControl('', [Validators.required]);

  ngOnInit() {
    this.formGroup = this.fb.group({
      id: '',
      tipoDocumento: '',
      numeroDocumento: ['', [Validators.maxLength(12), Validators.required]],
      nombre: '',
      telefono: ['', [Validators.maxLength(9)]],
      correoElectronico: ['', [Validators.email]]
    });

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
      correoElectronico: empleado.correoElectronico
    });
  }

  save() {
    let empleado: IEmpleado = Object.assign({}, this.formGroup.value);
    empleado.id = this.empleadoId;
    if (this.modoEdicion) {
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
    this.router.navigate(['/empleados']);
  }
}



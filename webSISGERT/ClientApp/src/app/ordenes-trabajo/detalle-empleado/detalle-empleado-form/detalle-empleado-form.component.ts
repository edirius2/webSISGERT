import { Component, OnInit } from '@angular/core';
import { IEmpleado } from 'src/app/empleados/empleado';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { DetalleEmpleadoService } from '../detalle-empleado.service';
import { EmpleadosService } from 'src/app/empleados/empleados.service';
import { ActivatedRoute, Router } from '@angular/router';
import { startWith, map } from 'rxjs/operators';
import { IDetalleEmpleado } from '../detalleEmpleado';

@Component({
  selector: 'app-detalle-empleado-form',
  templateUrl: './detalle-empleado-form.component.html',
  styleUrls: ['./detalle-empleado-form.component.css']
})
export class DetalleEmpleadoFormComponent implements OnInit {
  stateCtrl = new FormControl();
  empleadoSeleccionado: IEmpleado;
  formGroup: FormGroup;
  modoEdicion: boolean = false;
  detalleEmpleadoId: string;
  detalleOTId: string;
  listaEmpleados: IEmpleado[];
  filtroEmpleados: Observable<IEmpleado[]>

  constructor(private fb: FormBuilder, private detalleEmpleadoService: DetalleEmpleadoService, private empleadoService: EmpleadosService,
    private router: Router, private activatedRouter: ActivatedRoute) {

  }



  ngOnInit() {
    this.formGroup = this.fb.group({
      id: '',
      ordenTrabajoId: '',
      empleado: this.fb.group({
        id: '',
        tipoDocumento: '',
        numeroDocumento: '',
        nombre: '',
        telefono: '',
        correoElectronico: ''
      })
    });

        this.filtroEmpleados = this .formGroup.get('empleado').get('nombre').valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterEmpleados(state) : this.listaEmpleados.slice())),
    );

    this.empleadoService.getEmpleados().subscribe(empleadosDesdeWs => this.listaEmpleados = empleadosDesdeWs,
      error => console.error(error));

    this.activatedRouter.paramMap.subscribe(params => {

      if (params.get('id') == undefined) {
        this.modoEdicion = false;
        this.detalleOTId = params.get('idOT');
        console.log(params.get('idOT'));
        return;
      }
      this.modoEdicion = true;
      this.detalleEmpleadoId = params.get('id');
      this.detalleEmpleadoService.getDetalleEmpleado(this.detalleEmpleadoId.toString())
        .subscribe(detalleEmpleadoDesdeWS => this.cargarFormulario(detalleEmpleadoDesdeWS),
          error => console.error(error));
    });
  }



  private _filterEmpleados(value: string): IEmpleado[] {
    const filterValue = value.toLowerCase();

    return this.listaEmpleados.filter(empleado => empleado.nombre.toLowerCase().includes(filterValue));
  }

  cargarFormulario(detalle: IDetalleEmpleado) {
    this.formGroup.patchValue({
      id: detalle.id,
      ordenTrabajoId: detalle.ordenTrabajoId,
      empleado: this.fb.group({
        id: detalle.empleado.id,
        tipoDocumento: detalle.empleado.tipoDocumento,
        numeroDocumento: detalle.empleado.numeroDocumento,
        nombre: detalle.empleado.nombre,
        telefono: detalle.empleado.telefono,
        correoElectronico: detalle.empleado.correoElectronico,
      })
    });
  }

  setEmpleado(option: any) {
    this.empleadoSeleccionado = option;

    this.formGroup.get('empleado').patchValue({
      id: this.empleadoSeleccionado.id,
      tipoDocumento: this.empleadoSeleccionado.tipoDocumento,
      numeroDocumento: this.empleadoSeleccionado.numeroDocumento,
      nombre: this.empleadoSeleccionado.nombre,
      telefono: this.empleadoSeleccionado.telefono,
      correoElectronico: this.empleadoSeleccionado.correoElectronico,
    });

    console.log(this.empleadoSeleccionado);
  }

  save() {
    let empleado: IDetalleEmpleado = Object.assign({}, this.formGroup.value);
    empleado.ordenTrabajoId = Number(this.detalleOTId);
    empleado.empleadoId = empleado.empleado.id;
    if (this.modoEdicion) {
      
      this.detalleEmpleadoService.editarDetalleEmpleado(empleado)
        .subscribe(empleadoDesdeWS => this.onSaveSucess(),
          error => console.error());
    }
    else {

      empleado.id = 0;
      this.detalleEmpleadoService.createDetalleEmpleado(empleado)
        .subscribe(empleadoDesdeWS => this.onSaveSucess(),
          error => console.error());
    }
  }

  onSaveSucess() {
    if (this.modoEdicion) {
      this.router.navigate(["/detalleEmpleado/" + this.detalleOTId]);
    }
    else {
      this.router.navigate(["/detalleEmpleado/" + this.detalleOTId]);
    }
  }
}

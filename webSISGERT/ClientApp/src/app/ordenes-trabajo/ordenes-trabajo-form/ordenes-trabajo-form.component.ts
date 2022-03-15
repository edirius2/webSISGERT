import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { OrdenesTrabajoService } from '../ordenes-trabajo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTab } from '@angular/material';
import { ICliente } from 'src/app/clientes/cliente';
import { ClientesService } from 'src/app/clientes/clientes.service';
import { Observable } from 'rxjs';
import { iOrdenTrabajo } from '../ordenTrabajo';
import { Console } from '@angular/core/src/console';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-ordenes-trabajo-form',
  templateUrl: './ordenes-trabajo-form.component.html',
  styleUrls: ['./ordenes-trabajo-form.component.css']
})
export class OrdenesTrabajoFormComponent implements OnInit {
  stateCtrl = new FormControl();

  constructor(private fb: FormBuilder, private ordenesTrabajoService: OrdenesTrabajoService, private clientesService: ClientesService, private router: Router,
    private activatedRouter: ActivatedRoute) {
    this.filtroClientes = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterClientes(state) : this.listaClientes.slice())),
    );
  }

  date = new FormControl(new Date());

  formGroup: FormGroup;
  modoEdicion: boolean = false;
  OrdenTrabajoId: number;
  listaClientes: ICliente[];
  filtroClientes: Observable<ICliente[]>;
  clienteSeleccionado: ICliente;
  modoSeleccion: boolean = false;
  

  ngOnInit() {
    this.formGroup = this.fb.group({
      id: '',
      codigo: '',
      cliente: this.fb.group({
        id: '',
        tipoDocumento: '',
        numeroDocumento: '',
        nombre: '',
        contacto: '',
        telefono: '',
        correoElectronico: ''}),
      fecha:''
    });

    this.clientesService.getClientes().
      subscribe(clientesDesdeWS => this.listaClientes = clientesDesdeWS,
      error => console.error(error));

    this.activatedRouter.params.subscribe(params => {
      if (params['id'] == undefined) {
        return;
      }
      this.modoEdicion = true;
      this.OrdenTrabajoId = params['id'];
      this.ordenesTrabajoService.getOrdenTrabajo(this.OrdenTrabajoId.toString())
        .subscribe(orden => this.cargarFormulario(orden),
          error => console.error(error));
    });
  }

  private _filterClientes(value: string): ICliente[] {
    const filterValue = value.toLowerCase();

    return this.listaClientes.filter(cliente => cliente.nombre.toLowerCase().includes(filterValue));
  }

  //prueba() {
  //  console.log(this.formGroup.get('id').errors);
  //  console.log(this.formGroup.get('codigo').errors);
  //  console.log(this.formGroup.get('fecha').errors);
  //  console.log(this.formGroup.get('cliente').get('nombre').value);
  //  console.log(this.formGroup.get('cliente').get('id').value);
  //}

  getPosts(option: any) {
    this.clienteSeleccionado = option;
    
    this.formGroup.get('cliente').patchValue({
      id: this.clienteSeleccionado.id,
      tipoDocumento: this.clienteSeleccionado.tipoDocumento,
      numeroDocumento: this.clienteSeleccionado.numeroDocumento,
      nombre: this.clienteSeleccionado.nombre,
      contacto: this.clienteSeleccionado.contacto,
      telefono: this.clienteSeleccionado.telefono,
      correoElectronico: this.clienteSeleccionado.correoElectronico
    });

  }
  //asignarValoresCliente()
  save() {
    let ordenTrabajo: iOrdenTrabajo = Object.assign({}, this.formGroup.value);
    ordenTrabajo.clienteId = ordenTrabajo.cliente.id;
    
    if (this.modoEdicion) {
      this.ordenesTrabajoService.editarOrdenTrabajo(ordenTrabajo).
        subscribe(ordenTrabajo => this.onSaveSucess(),
          error => console.error(error));
    }
    else {
      ordenTrabajo.id = 0;
      this.ordenesTrabajoService.createOrdenTrabajo(ordenTrabajo).
        subscribe(ordenTrabajo => this.onSaveSucess(),
          error => console.error(error));
    }
    console.log(ordenTrabajo);
  }

  onSaveSucess() {

  }

  cargarFormulario(ordenTrabajo: iOrdenTrabajo) {
    console.log(ordenTrabajo);
    this.clienteSeleccionado = ordenTrabajo.cliente;
    this.formGroup.patchValue({
      id: ordenTrabajo.id,
      codigo: ordenTrabajo.codigo,
      cliente: this.clienteSeleccionado,
      fecha: ordenTrabajo.fecha
    });
    
  }
}

import { Component, OnInit, Inject } from '@angular/core';
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
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContenedorImagenComponent } from '../contenedor-imagen/contenedor-imagen.component';

export interface DialogData {
  ruta: string;
}

@Component({
  selector: 'app-ordenes-trabajo-form',
  templateUrl: './ordenes-trabajo-form.component.html',
  styleUrls: ['./ordenes-trabajo-form.component.css']
})
export class OrdenesTrabajoFormComponent implements OnInit {
  stateCtrl = new FormControl();

  formatLabel(value: number) {
    if (value == 0) {
      return 'A';
    }

    if (value == 50) {
      return 'P';
    }

    if (value == 100) {
      return 'C';
    }
    return value;
  }

  constructor(private fb: FormBuilder, private ordenesTrabajoService: OrdenesTrabajoService, private clientesService: ClientesService, private router: Router,
    private activatedRouter: ActivatedRoute, public dialog: MatDialog) {
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

  rutaInformePreliminar: string = "";
  rutaActaRecepcionEquipos: string = "";
  rutaActaConformidad: string = "";

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
      ordenTrabajo.informePreliminar = this.rutaInformePreliminar;
      ordenTrabajo.actaConformidad = this.rutaActaConformidad;
      ordenTrabajo.formatoRecepcionEquipos = this.rutaActaRecepcionEquipos;
      this.ordenesTrabajoService.editarOrdenTrabajo(ordenTrabajo).
        subscribe(ordenTrabajo => this.onSaveSucess(),
          error => console.error(error));
    }
    else {
      ordenTrabajo.id = 0;
      ordenTrabajo.informePreliminar = this.rutaInformePreliminar;
      ordenTrabajo.actaConformidad = this.rutaActaConformidad;
      ordenTrabajo.formatoRecepcionEquipos = this.rutaActaRecepcionEquipos;
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
    this.rutaInformePreliminar = ordenTrabajo.informePreliminar;
    this.rutaActaConformidad = ordenTrabajo.actaConformidad;
    this.rutaActaRecepcionEquipos = ordenTrabajo.formatoRecepcionEquipos;
  }


  InputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
    this.ordenesTrabajoService.crearImagenInformePreliminar(fileInputEvent.target.files[0]).
      subscribe(nombreArchivo => this.prueba(nombreArchivo),
        error => console.error(error));
  }

  InputChangeRecepcion(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
    this.ordenesTrabajoService.crearImagenRecepcionEquipos(fileInputEvent.target.files[0]).
      subscribe(nombreArchivo => this.rutaActaRecepcionEquipos = nombreArchivo,
        error => console.error(error));
  }

  InputChangeConformidad(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
    this.ordenesTrabajoService.crearImagenActaConformidad(fileInputEvent.target.files[0]).
      subscribe(nombreArchivo => this.rutaActaConformidad = nombreArchivo,
        error => console.error(error));
  }


  prueba(archi: string) {
    this.rutaInformePreliminar = archi;
    console.log(this.rutaInformePreliminar);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ContenedorImagenComponent, {
      width: '700px',
      data: { ruta: this.rutaInformePreliminar},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.rutaInformePreliminar = result;
    });
  }

  getSliderTickInterval() {

  }
}


//@Component({
//  selector: 'dialog-overview-example-dialog',
//  templateUrl: 'dialog-overview-example-dialog.html',
//})
//export class DialogOverviewExampleDialog {
//  constructor(
//    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//    @Inject(MAT_DIALOG_DATA) public data: DialogData,
//  ) { }

//  onNoClick(): void {
//    this.dialogRef.close();
//  }
//}

import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { OrdenesTrabajoService } from '../ordenes-trabajo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTab } from '@angular/material';
import { ICliente } from 'src/app/clientes/cliente';
import { ClientesService } from 'src/app/clientes/clientes.service';
import { Observable } from 'rxjs';
import { iOrdenTrabajo, EstadoOT } from '../ordenTrabajo';
import { Console } from '@angular/core/src/console';
import { map, startWith } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContenedorImagenComponent } from '../contenedor-imagen/contenedor-imagen.component';
import { iMaquinaria } from 'src/app/maquinarias/maquinaria';
import { MaquinariasService } from 'src/app/maquinarias/maquinarias.service';
import { ListaCotizacionesComponent } from '../lista-cotizaciones/lista-cotizaciones.component';
import { iCotizacion } from 'src/app/cotizaciones/cotizacion';
import { ITipoOT } from 'src/app/tipos-ot/tipoOT';
import { TiposOTService } from 'src/app/tipos-ot/tipos-ot.service';

export interface DialogData {
  ruta: string,
  resultado: boolean,
  titulo:string
}

@Component({
  selector: 'app-ordenes-trabajo-form',
  templateUrl: './ordenes-trabajo-form.component.html',
  styleUrls: ['./ordenes-trabajo-form.component.css']
})
export class OrdenesTrabajoFormComponent implements OnInit {
  stateCtrl = new FormControl();
  maquinariaCtrl = new FormControl();

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

  constructor(private fb: FormBuilder, private ordenesTrabajoService: OrdenesTrabajoService, private clientesService: ClientesService, private tiposOTService: TiposOTService,
    private maquinariasService: MaquinariasService,
    private router: Router, public dialog: MatDialog,
    private activatedRouter: ActivatedRoute ) {
    this.filtroClientes = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterClientes(state) : this.listaClientes.slice())),
    );
  }

  date = new FormControl(new Date());

  formGroup: FormGroup;
  modoEdicion: boolean = false;
  OrdenTrabajoId: number;
  listaMaquinas: iMaquinaria[];
  listaClientes: ICliente[];
  tiposOT: ITipoOT[];
  filtroClientes: Observable<ICliente[]>;
  filtroMaquinarias: Observable<iMaquinaria[]>;
  maquinariaSeleccionada: iMaquinaria;
  clienteSeleccionado: ICliente;
  tipoOTSeleccionado: ITipoOT;
  modoSeleccion: boolean = false;
  numeroOrdenes: number;

  rutaInformePreliminar: string = "";
  rutaActaRecepcionEquipos: string = "";
  rutaActaConformidad: string = "";

  cotizacionEnlazada: iCotizacion;

  ngOnInit() {
    this.formGroup = this.fb.group({
      id: '',
      tipoOTId: '',
      tipoOT: this.fb.group({
        id: '',
        codigo: '',
        descripcion: ''
      }),
      codigo: '',
      clienteId: '',
      cliente: this.fb.group({
        id: '',
        tipoDocumento: '',
        numeroDocumento: '',
        nombre: '',
        contacto: '',
        telefono: '',
        correoElectronico: ''
      }),
      favorito: false,
      maquinariaId: '',
      maquinaria: this.fb.group({
        id: '',
        placa: '',
        marcaMaquinariaId: '',
        marca: '',
        tipoMaquinariaId: '',
        tipo: '',
        estadoMaquinariaId: '',
        estado: '',
        clienteId: '',
        cliente: ''
      }),
      fecha: '',
      descripcion: '',
      observaciones:''
    });

    this.clientesService.getClientes().
      subscribe(clientesDesdeWS => this.listaClientes = clientesDesdeWS,
      error => console.error(error));

    this.tiposOTService.getTiposOT().
      subscribe(tiposDesdeWS => this.tiposOT = tiposDesdeWS,
      error => console.error(error));

    

    this.activatedRouter.params.subscribe(params => {
      if (params['id'] == undefined) {
        this.ordenesTrabajoService.getNumeroOrdenes().
          subscribe(numeroDesdeWS => this.setNumero(numeroDesdeWS),
            error => console.error(error));
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

  setNumero(numero: number) {
    this.numeroOrdenes = numero;
    let aux = (numero + 1).toString();
    while (aux.length <7) {
      aux = "0" + aux;
    }
    this.formGroup.patchValue({
      codigo:  aux
    });
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

    this.maquinariasService.getMaquinariasXCliente(this.clienteSeleccionado.id.toString()).
      subscribe(maquinasDesdeWS => this.listaMaquinas = maquinasDesdeWS,
        error => console.error(error));
    
  }

  getTiposOT(tipoOT: ITipoOT, event: any) {
    if (event.isUserInput) {
      this.tipoOTSeleccionado = tipoOT;
      this.formGroup.get('tipoOT').patchValue({
        id: this.tipoOTSeleccionado.id,
        codigo: this.tipoOTSeleccionado.codigo,
        descripcion: this.tipoOTSeleccionado.descripcion
      });
      console.log(this.formGroup.get('tipoOT').value);
    }
  }

  getMaquinarias(maquina: iMaquinaria, event: any) {
    if (event.isUserInput) {
      this.maquinariaSeleccionada = maquina;
      
      this.formGroup.get('maquinaria').patchValue({
        id: this.maquinariaSeleccionada.id,
        placa: this.maquinariaSeleccionada.placa,
        marcaMaquinariaId: this.maquinariaSeleccionada.marcaMaquinariaId,
        marca: this.maquinariaSeleccionada.marca,
        tipoMaquinariaId: this.maquinariaSeleccionada.tipoMaquinariaId,
        tipo: this.maquinariaSeleccionada.tipo,
        estadoMaquinariaId: this.maquinariaSeleccionada.estadoMaquinariaId,
        estado: this.maquinariaSeleccionada.estado,
        clienteId: this.maquinariaSeleccionada.clienteId,
        cliente: ''
      });
    }
  }

  //asignarValoresCliente()
  save() {
    console.log(this.formGroup.get('tipoOT').value);
    let ordenTrabajo: iOrdenTrabajo = Object.assign({}, this.formGroup.value);
    ordenTrabajo.clienteId = ordenTrabajo.cliente.id;
    ordenTrabajo.maquinariaId = ordenTrabajo.maquinaria.id;
    ordenTrabajo.tipoOTId = ordenTrabajo.tipoOT.id.toString();
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
        subscribe(ordenTrabajoDesdeWS => this.onSaveSucessCreate(ordenTrabajoDesdeWS.id.toString()),
          error => console.error(error));
    }
    //console.log(ordenTrabajo);
  }

  onSaveSucess() {
    alert("Datos Guardados");
  }

  onSaveSucessCreate(idOT: string) {
    alert("Datos guardados: " + idOT);
    this.formGroup.patchValue({
      id: idOT
    });
    this.OrdenTrabajoId = Number(idOT);
    this.modoEdicion = true;
  }

  cargarFormulario(ordenTrabajo: iOrdenTrabajo) {
    console.log(ordenTrabajo);
    this.clienteSeleccionado = ordenTrabajo.cliente;
    this.maquinariaSeleccionada = ordenTrabajo.maquinaria;

    this.formGroup.patchValue({
      id: ordenTrabajo.id,
      tipoOTId: ordenTrabajo.tipoOTId,
      tipoOT: ordenTrabajo.tipoOT,
      codigo: ordenTrabajo.codigo,
      clienteId: ordenTrabajo.clienteId,
      cliente: ordenTrabajo.cliente,
      maquinariaId: ordenTrabajo.maquinariaId,
      maquinaria: ordenTrabajo.maquinaria,
      favorito: ordenTrabajo.favorito,
      fecha: ordenTrabajo.fecha,
      descripcion: ordenTrabajo.descripcion,
      observaciones: ordenTrabajo.observaciones
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
      data: {
        ruta: this.rutaInformePreliminar,
        titulo:"Informe Preliminar"},
    });

    dialogRef.afterClosed().subscribe(result => this.putRutaInformePreliminar(result)
    );
  }

  putRutaInformePreliminar(data1: DialogData) {
    if (data1.resultado = true) {
      this.rutaInformePreliminar = data1.ruta;
    }
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(ContenedorImagenComponent, {
      width: '700px',
      data: {
        ruta: this.rutaActaRecepcionEquipos,
        titulo: "Acta Recepcion Equipos"},
    });

    dialogRef.afterClosed().subscribe(result => this.putRutaActaRecepcionEquipos(result)
    );
  }

  putRutaActaRecepcionEquipos(data2: DialogData) {
    if (data2.resultado = true) {
      this.rutaActaRecepcionEquipos = data2.ruta;
    }
  }

  
  openDialog3(): void {
    const dialogRef = this.dialog.open(ContenedorImagenComponent, {
      width: '700px',
      data: {
        ruta: this.rutaActaConformidad,
        titulo: "Acta de Conformidad"},
    });

    dialogRef.afterClosed().subscribe(result => this.putRutaActaConformidad(result));
  }

  putRutaActaConformidad(data3: DialogData) {
    if (data3.resultado = true) {
      this.rutaActaConformidad = data3.ruta;
    }
  }

  getSliderTickInterval() {

  }

  traerCotizacion(): void {
    if (this.tipoOTSeleccionado == undefined) {
      alert("Debe seleccionar el tipo de OT primero para traer una cotizacion");
    }
    else {
      const dialogRef = this.dialog.open(ListaCotizacionesComponent, {
        width: '700px',
        data: '',
      });

      dialogRef.afterClosed().subscribe(result => {

        this.cotizacionEnlazada = result;
        console.log('The dialog was closed: La cotizacion es:' + this.cotizacionEnlazada.id.toString());
        this.enlazarCotizacion(this.cotizacionEnlazada);
      });
    }
    
  }

  enlazarCotizacion(cotizacion: iCotizacion) {
    let ordenTrabajoEnlazado: iOrdenTrabajo;

    ordenTrabajoEnlazado.tipoOT = this.tipoOTSeleccionado;
    ordenTrabajoEnlazado.tipoOTId = this.tipoOTSeleccionado.id.toString();
    ordenTrabajoEnlazado.cliente = cotizacion.cliente;
    ordenTrabajoEnlazado.clienteId = cotizacion.clienteId;
    ordenTrabajoEnlazado.descripcion = cotizacion.descripcion;
    ordenTrabajoEnlazado.fecha = cotizacion.fecha;
    ordenTrabajoEnlazado.maquinaria = cotizacion.maquinaria;
    ordenTrabajoEnlazado.maquinariaId = cotizacion.maquinariaId;
    ordenTrabajoEnlazado.observaciones = cotizacion.observaciones;
    ordenTrabajoEnlazado.estadoOT = EstadoOT.Activo;

    this.ordenesTrabajoService.createOrdenTrabajo(ordenTrabajoEnlazado).
      subscribe(ordenTrabajoDesdeWS => {
        ordenTrabajoEnlazado = ordenTrabajoDesdeWS;
        this.router.navigate(["/principal/ordenTrabajo-Editar/" + ordenTrabajoEnlazado.id.toString()]);
      },
        error => console.error(error));

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

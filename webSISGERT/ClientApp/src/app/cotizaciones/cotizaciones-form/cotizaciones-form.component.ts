import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CotizacionesService } from '../cotizaciones.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ICliente } from 'src/app/clientes/cliente';
import { iMaquinaria } from 'src/app/maquinarias/maquinaria';
import { ClientesService } from 'src/app/clientes/clientes.service';
import { iCotizacion } from '../cotizacion';
import { Observable } from 'rxjs';
import { map,startWith } from 'rxjs/operators';
import { MaquinariasService } from 'src/app/maquinarias/maquinarias.service';

@Component({
  selector: 'app-cotizaciones-form',
  templateUrl: './cotizaciones-form.component.html',
  styleUrls: ['./cotizaciones-form.component.css']
})
export class CotizacionesFormComponent implements OnInit {

  stateCtrl = new FormControl();
  maquinariasCtrl = new FormControl();
  
  formGroup: FormGroup;
  modoEdicion: boolean = false;
  CotizacionId: string;
  listaClientes: ICliente[];
  clienteSeleccionado: ICliente;
  listaMaquinarias: iMaquinaria[];
  maquinariaSeleccionada: iMaquinaria;
  filtroClientes: Observable<ICliente[]>;
  codigo1: string;
  codigo2: string;

  constructor(private fb: FormBuilder, private cotizacionesService: CotizacionesService, private clientesService: ClientesService, private maquinariasService: MaquinariasService,
    private activatedRoute: ActivatedRoute, private route: Router) {
    this.filtroClientes = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterClientes(state) : this.listaClientes.slice())),
    );}

  ngOnInit() {
    this.formGroup = this.fb.group({
      id: '',
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
      maquinariaId: '',
      maquinaria: this.fb.group({
        id: '',
        placa: '',
        marcaMaquinariaId: '',
        marca: '',
        tipoMaquinariaId: '',
        tipoMaquinaria: '',
        estadoMaquinariaId: '',
        estadoMaquinaria: '',
        clienteId: '',
        cliente:''
      }),
      fecha: '',
      descripcion:'',
      estado: '',
      enlazado: '',
      observaciones: '',
    });

    this.clientesService.getClientes().
      subscribe(clientesDesdeWS => this.listaClientes = clientesDesdeWS,
      error => console.error(error));

    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == undefined) {
        return;
      }
      this.modoEdicion = true;
      this.CotizacionId = params['id'];
      this.cotizacionesService.getCotizacion(this.CotizacionId).subscribe(cotizacionDesdeWs => this.cargarFormulario(cotizacionDesdeWs),
        error => console.error(error));
    }
    )
  }

  cargarFormulario(cotizacion: iCotizacion) {
    this.clienteSeleccionado = cotizacion.cliente;
    this.maquinariaSeleccionada = cotizacion.maquinaria;
    this.codigo1 = cotizacion.codigo.substring(0, 2);
    this.codigo2 = cotizacion.codigo.substring(2, cotizacion.codigo.length);

    if (cotizacion.estado == "0") {
      cotizacion.estado = "Activo";
    }
    else {
      cotizacion.estado = "Cancelado";
    }
    this.formGroup.patchValue({
      id: cotizacion.id,
      codigo: cotizacion.codigo,
      descripcion: cotizacion.descripcion,
      clienteId: cotizacion.clienteId,
      cliente: cotizacion.cliente,
      maquinariaId: cotizacion.maquinariaId,
      maquinaria: cotizacion.maquinaria,
      fecha: cotizacion.fecha,
      estado: cotizacion.estado,
      enlazado: cotizacion.enlazado,
      observaciones: cotizacion.observaciones,
    });
  }

  save() {
    let cotizacion: iCotizacion = Object.assign({}, this.formGroup.value);
    if (this.modoEdicion) {

    }
    else {
      cotizacion.id = 0;
      cotizacion.clienteId = cotizacion.cliente.id;
      cotizacion.maquinariaId = cotizacion.maquinaria.id;
      cotizacion.codigo = this.codigo1 + this.codigo2;
      cotizacion.enlazado = false;
      this.cotizacionesService.crearCotizacion(cotizacion)
        .subscribe(cotizacionDesdeWs => this.onSaveSucess(), error => console.error(error));
    }

  }

  onSaveSucess() {

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

    this.maquinariasService.getMaquinariasXCliente(this.clienteSeleccionado.id.toString()).
      subscribe(maquinariasDesdeWS => this.listaMaquinarias = maquinariasDesdeWS,
        error => console.error(error));
  }

  getPostMaquinaria(option: any) {
    this.maquinariaSeleccionada = option;

    this.formGroup.get('maquinaria').patchValue({
      id: this.maquinariaSeleccionada.id,
      placa: this.maquinariaSeleccionada.placa,
      marcaMaquinariaId: this.maquinariaSeleccionada.marcaMaquinariaId,
      marca: '',
      tipoMaquinariaId: this.maquinariaSeleccionada.tipoMaquinariaId,
      tipoMaquinaria: '',
      estadoMaquinariaId: this.maquinariaSeleccionada.estadoMaquinariaId,
      estadoMaquinaria: '',
      clienteId: this.maquinariaSeleccionada.clienteId,
      cliente: ''
    });
  }

  actualizarCodigo1(codigo: string) {
    this.codigo1 = codigo;
    this.formGroup["codigo"] = this.codigo1 + this.codigo2;
    console.log(this.formGroup["codigo"]);
  }

  actualizarCodigo2(codigo: string) {
    this.codigo2 = codigo;
    this.formGroup["codigo"] = this.codigo1 + this.codigo2;
  }
}

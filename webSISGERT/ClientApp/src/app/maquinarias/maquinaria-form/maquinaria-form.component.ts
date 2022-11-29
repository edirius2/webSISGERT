import { Component, OnInit } from '@angular/core';
import { MaquinariasService } from '../maquinarias.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { iMaquinaria } from '../maquinaria';
import { ICliente } from 'src/app/clientes/cliente';
import { iEstadoMaquinaria } from '../estado-maquinarias/estadoMaquinaria';
import { iTipoMaquinaria } from '../tipo-maquinaria/tipoMaquinaria';
import { iMarcaMaquinaria } from '../marca-maquinaria/marcaMaquinaria';
import { Observable } from 'rxjs';
import { ClientesService } from 'src/app/clientes/clientes.service';
import { EstadoMaquinariasService } from '../estado-maquinarias/estado-maquinarias.service';
import { TipoMaquinariaService } from '../tipo-maquinaria.service';
import { MarcaMaquinariaService } from '../marca-maquinaria/marca-maquinaria.service';

@Component({
  selector: 'app-maquinaria-form',
  templateUrl: './maquinaria-form.component.html',
  styleUrls: ['./maquinaria-form.component.css']
})
export class MaquinariaFormComponent implements OnInit {

  stateCtrl = new FormControl();
  stateCtrl2 = new FormControl();
  stateCtrl3 = new FormControl();
  stateCtrl4 = new FormControl();

  modoEdicion: boolean = false;
  maquinariaId: number;
  formGroup: FormGroup;

  listaClientes: ICliente[];
  filtroClientes: Observable<ICliente[]>;
  clienteSeleccionado: ICliente;
  listaEstadosMaquinaria: iEstadoMaquinaria[];
  filtroEstadosMaquinaria: Observable<iEstadoMaquinaria[]>;
  estadoMaquinariaSeleccionado: iEstadoMaquinaria;
  listaTiposMaquinaria: iTipoMaquinaria[];
  filtroTiposMaquinaria: Observable<iTipoMaquinaria[]>;
  tipoMaquinariaSeleccionada: iTipoMaquinaria;
  listaMarcasMaquinaria: iMarcaMaquinaria[];
  filtroMarcasMaquinaria: Observable<iMarcaMaquinaria>;
  marcaMaquinariaSeleccionada: iMarcaMaquinaria;

  constructor(private fb: FormBuilder, private maquinariaService: MaquinariasService, private activatedRoute: ActivatedRoute,
    private router: Router, private clientesService: ClientesService, private estadosMaquinariaService: EstadoMaquinariasService,
    private tiposMaquinariaService: TipoMaquinariaService, private marcaMaquinariaService: MarcaMaquinariaService) { }

  ngOnInit() {

    this.formGroup = this.fb.group({
      id: '',
      placa: '',
      marcaMaquinariaId: '',
      marca: this.fb.group({
        id: '',
        descripcion: ''
      }),
      tipoMaquinariaId: '',
      tipo: this.fb.group({
        id: '',
        descripcion:''
      }),
      estadoMaquinariaId: '',
      estado: this.fb.group({
        id: '',
        descripcion:''
      }),
      clienteId: '',
      cliente: this.fb.group({
        id: '',
        tipoDocumento: '',
        numeroDocumento: '',
        nombre: '',
        contacto: '',
        telefono: '',
        correoElectronico: ''
      })
    });

    this.clientesService.getClientes().
    subscribe(clientesDesdeWS => this.listaClientes = clientesDesdeWS,
      error => console.error(error));

    this.estadosMaquinariaService.getEstadoMaquinarias()
      .subscribe(estadosMaquinariasDesdeWS => this.listaEstadosMaquinaria = estadosMaquinariasDesdeWS,
      error => console.error(error));

    this.marcaMaquinariaService.getMarcasMaquinarias()
      .subscribe(marcasMaquinariaDesdeWS => this.listaMarcasMaquinaria = marcasMaquinariaDesdeWS,
      error => console.error(error));

    this.tiposMaquinariaService.getTipoMaquinarias()
      .subscribe(tiposMaquinariaDesdeWS => this.listaTiposMaquinaria = tiposMaquinariaDesdeWS,
        error => console.error(error));
    
    this.activatedRoute.params.subscribe(params => {
      if (params["id"] == undefined) {
        return;
      }

      this.modoEdicion = true;
      this.maquinariaId = params["id"];
      this.maquinariaService.getMaquinaria(this.maquinariaId.toString()).
        subscribe(maquinariaDesdeWS => this.cargarFormulario(maquinariaDesdeWS),
          error => console.error(error));
    });
  }


  cargarFormulario(maquinaria: iMaquinaria) {

    this.formGroup.patchValue({
      id: maquinaria.id,
      placa: maquinaria.placa,
      marcaMaquinariaId: maquinaria.marcaMaquinariaId,
      marca: maquinaria.marca,
      tipoMaquinariaId: maquinaria.tipoMaquinariaId,
      tipo: maquinaria.tipo,
      estadoMaquinariaId: maquinaria.estadoMaquinariaId,
      estado: maquinaria.estado,
      clienteId: maquinaria.clienteId,
      cliente: maquinaria.cliente
    });
  }

  save() {
    let maquinaria: iMaquinaria = Object.assign({}, this.formGroup.value);
    maquinaria.clienteId = maquinaria.cliente.id;
    maquinaria.estadoMaquinariaId = maquinaria.estado.id;
    maquinaria.marcaMaquinariaId = maquinaria.marca.id;
    maquinaria.tipoMaquinariaId = maquinaria.tipo.id;

    if (this.modoEdicion == true) {
      maquinaria.id = this.maquinariaId;
      this.maquinariaService.updateMaquinaria(maquinaria)
        .subscribe(maquinariaDesdeWS => this.onSaveSucess(),
          error => console.error(error));
    }
    else {
      maquinaria.id = 0;
      this.maquinariaService.createMaquinaria(maquinaria)
        .subscribe(maquinariaDesdeWS => this.onSaveSucess(),
          error => console.error(error));
    }
  }

  getPostCliente(option: any) {
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

  getPostEstadoMaquinaria(option: any) {
    this.estadoMaquinariaSeleccionado = option;
    this.formGroup.get('estado').patchValue({
      id: this.estadoMaquinariaSeleccionado.id,
      descripcion: this.estadoMaquinariaSeleccionado.descripcion
    });
  }

  getPostTipoMaquinaria(option: any) {
    this.tipoMaquinariaSeleccionada = option;
    this.formGroup.get('tipo').patchValue({
      id: this.tipoMaquinariaSeleccionada.id,
      descripcion: this.tipoMaquinariaSeleccionada.descripcion
    });
  }

  getPostMarcaMaquinaria(option: any) {
    this.marcaMaquinariaSeleccionada = option;
    this.formGroup.get('marca').patchValue({
      id: this.marcaMaquinariaSeleccionada.id,
      descripcion: this.marcaMaquinariaSeleccionada.descripcion
    });
  }
  onSaveSucess() {
    this.router.navigate(["/principal/maquinarias"]);
  }

  
}

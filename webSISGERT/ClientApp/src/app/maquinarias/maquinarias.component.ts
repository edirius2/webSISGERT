import { Component, OnInit } from '@angular/core';
import { MaquinariasService } from './maquinarias.service';
import { iMaquinaria } from './maquinaria';
import { ClientesService } from '../clientes/clientes.service';
import { ICliente } from '../clientes/cliente';
import { iTipoMaquinaria } from './tipo-maquinaria/tipoMaquinaria';
import { iMarcaMaquinaria } from './marca-maquinaria/marcaMaquinaria';
import { iEstadoMaquinaria } from './estado-maquinarias/estadoMaquinaria';
import { TipoMaquinariaService } from './tipo-maquinaria.service';
import { MarcaMaquinariaService } from './marca-maquinaria/marca-maquinaria.service';
import { EstadoMaquinariasService } from './estado-maquinarias/estado-maquinarias.service';

@Component({
  selector: 'app-maquinarias',
  templateUrl: './maquinarias.component.html',
  styleUrls: ['./maquinarias.component.css']
})
export class MaquinariasComponent implements OnInit {


  listaClientes: ICliente[];
  listaMaquinarias: iMaquinaria[];
  listaTipoMaquinaria: iTipoMaquinaria[];
  listaMarcaMaquinaria: iMarcaMaquinaria[];
  listaEstadoMaquinaria: iEstadoMaquinaria[];

  idTipo: string = "0";
  idEstado: string = "0";
  idMarca: string = "0";
  idCliente: string = "0";
  placa: string = "";


  constructor(private maquinariasService: MaquinariasService,
    private clientesService: ClientesService,
    private tipoMaquinariaService: TipoMaquinariaService,
    private marcaMaquinariaService: MarcaMaquinariaService,
    private estadoMaquinariaService: EstadoMaquinariasService) { }

  ngOnInit() {
    this.clientesService.getClientes().
      subscribe(clientesDesdeWs => this.listaClientes = clientesDesdeWs,
      error => console.error(error));
    this.tipoMaquinariaService.getTipoMaquinarias().
      subscribe(tipoMaquinariasDesdeWS => this.listaTipoMaquinaria = tipoMaquinariasDesdeWS,
      error => console.error(error));
    this.marcaMaquinariaService.getMarcasMaquinarias().
      subscribe(marcaMaquinariaDesdeWS => this.listaMarcaMaquinaria = marcaMaquinariaDesdeWS,
      error => console.error(error));
    this.estadoMaquinariaService.getEstadoMaquinarias().
      subscribe(estadoMaquinariaDesdeWS => this.listaEstadoMaquinaria = estadoMaquinariaDesdeWS,
      error => console.error(error));

    this.maquinariasService.getMaquinarias().
      subscribe(maquinariasDesdeWS => this.listaMaquinarias = maquinariasDesdeWS,
        error => console.error(error));
  }

  cargarMaquinarias(clienteId: string) {
    this.maquinariasService.getMaquinariasXCliente(clienteId).
      subscribe(maquinariasDesdeWS => this.listaMaquinarias = maquinariasDesdeWS,
        error => console.error(error));
  }

  cargarXTipoMaquinaria(tipoMaquinariaId: string, event: any) {
    if (event.isUserInput) {
      this.idTipo = tipoMaquinariaId;
      this.maquinariasService.getMaquinariasFiltro(this.placa, this.idTipo, this.idEstado, this.idMarca, this.idCliente).
        subscribe(maquinariasDesdeWS => this.listaMaquinarias = maquinariasDesdeWS,
          error => console.error(error));
    }
  }

  cargarXMarcaMaquinaria(marcaMaquinariaId: string, event:any) {
    if (event.isUserInput) {
      this.idMarca = marcaMaquinariaId;
      this.maquinariasService.getMaquinariasFiltro(this.placa, this.idTipo, this.idEstado, this.idMarca, this.idCliente).
        subscribe(maquinariasDesdeWS => this.listaMaquinarias = maquinariasDesdeWS,
          error => console.error(error));
    }
  }

  cargarXEstadoMaquinaria(estadoMaquinariaId: string, event: any) {
    if (event.isUserInput) {
      this.idEstado = estadoMaquinariaId;
      this.maquinariasService.getMaquinariasFiltro(this.placa, this.idTipo, this.idEstado, this.idMarca, this.idCliente).
        subscribe(maquinariasDesdeWS => this.listaMaquinarias = maquinariasDesdeWS,
          error => console.error(error));
    }
  }

  cargarXPlacaMaquinaria(placaMaquinaria: string, event: any) {
    if (event.isUserInput) {
      this.placa = placaMaquinaria;
      this.maquinariasService.getMaquinariasFiltro(this.placa, this.idTipo, this.idEstado, this.idMarca, this.idCliente).
        subscribe(maquinariasDesdeWS => this.listaMaquinarias = maquinariasDesdeWS,
          error => console.error(error));
    }
  }

  cargarXCliente(clienteId: string, event: any) {
    if (event.isUserInput) {
      this.idCliente = clienteId;
      this.maquinariasService.getMaquinariasFiltro(this.placa, this.idTipo, this.idEstado, this.idMarca, this.idCliente).
        subscribe(maquinariasDesdeWS => this.listaMaquinarias = maquinariasDesdeWS,
          error => console.error(error));
    }
  }

}

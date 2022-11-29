import { Component, OnInit } from '@angular/core';
import { ICliente } from '../clientes/cliente';
import { CotizacionesService } from './cotizaciones.service';
import { ClientesService } from '../clientes/clientes.service';
import { iCotizacion } from './cotizacion';
import { iMaquinaria } from '../maquinarias/maquinaria';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.css']
})
export class CotizacionesComponent implements OnInit {

  listaClientes: ICliente[];
  listaMaquinarias: iMaquinaria[];
  cotizaciones: iCotizacion[];

  stateCtrl = new FormControl();
  maquinariaCtrl = new FormControl();

  clienteId: string="0";
  maquinariaId: string="0";
  estado: string="";

  constructor(private cotizacionesService: CotizacionesService, private clientesService: ClientesService) { }

  ngOnInit() {
    this.cotizacionesService.getCotizaciones().
      subscribe(cotizacionesDesdeWS => this.cotizaciones = cotizacionesDesdeWS,
      error => console.error(error));

    this.clientesService.getClientes().
      subscribe(clientesDesdeWS => this.listaClientes = clientesDesdeWS,
        error => console.error(error));
  }

  getClientes(idCliente: string, event: any) {
    if (event.isUserInput) {
      this.clienteId = idCliente;
      this.cotizacionesService.getCotizacionesFiltro(this.clienteId, this.maquinariaId, this.estado).
        subscribe(cotizacionesDesdeWS => this.cotizaciones = cotizacionesDesdeWS,
          error => console.error(error));
    }
  }

  getMaquinarias(idMaquinaria: string, event: any) {
    if (event.isUserInput) {
      this.maquinariaId = idMaquinaria;
      this.cotizacionesService.getCotizacionesFiltro(this.clienteId, this.maquinariaId, this.estado).
        subscribe(cotizacionesDesdeWS => this.cotizaciones = cotizacionesDesdeWS,
          error => console.error(error));
    }
  }

  getEstados(idEstado: string, event: any) {
    if (event.isUserInput) {
      this.estado = idEstado;
      this.cotizacionesService.getCotizacionesFiltro(this.clienteId, this.maquinariaId, this.estado).
        subscribe(cotizacionesDesdeWS => this.cotizaciones = cotizacionesDesdeWS,
          error => console.error(error));
    }
  }
}

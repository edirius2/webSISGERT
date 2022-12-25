import { Component, OnInit, Inject } from '@angular/core';
import { ICliente } from 'src/app/clientes/cliente';
import { iMaquinaria } from 'src/app/maquinarias/maquinaria';
import { iCotizacion } from 'src/app/cotizaciones/cotizacion';
import { FormControl } from '@angular/forms';
import { CotizacionesService } from 'src/app/cotizaciones/cotizaciones.service';
import { ClientesService } from 'src/app/clientes/clientes.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-lista-cotizaciones',
  templateUrl: './lista-cotizaciones.component.html',
  styleUrls: ['./lista-cotizaciones.component.css']
})
export class ListaCotizacionesComponent implements OnInit {


  listaClientes: ICliente[];
  listaMaquinarias: iMaquinaria[];
  cotizaciones: iCotizacion[];

  stateCtrl = new FormControl();
  maquinariaCtrl = new FormControl();

  clienteId: string = "0";
  maquinariaId: string = "0";
  estado: string = "";

  constructor(public dialogRef: MatDialogRef<ListaCotizacionesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: iCotizacion,
    private cotizacionesService: CotizacionesService, private clientesService: ClientesService) { }

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

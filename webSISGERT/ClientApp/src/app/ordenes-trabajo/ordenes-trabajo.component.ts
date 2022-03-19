import { Component, OnInit } from '@angular/core';
import { OrdenesTrabajoService } from './ordenes-trabajo.service';
import { iOrdenTrabajo } from './ordenTrabajo';
import { forEach } from '@angular/router/src/utils/collection';
import { contenedorOrdenTrabajoService } from './contenedor-orden-trabajo/contenedor-orden-trabajo.service';
import { ICliente } from '../clientes/cliente';
import { ClientesService } from '../clientes/clientes.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ordenes-trabajo',
  templateUrl: './ordenes-trabajo.component.html',
  styleUrls: ['./ordenes-trabajo.component.css']
})
export class OrdenesTrabajoComponent implements OnInit {

  ordenesTrabajo: iOrdenTrabajo[];
  sumaPagos: number;

  clienteSeleccionado: ICliente;
  listaClientes: ICliente[];
  filtroClientes: Observable<ICliente[]>;
  stateCtrl = new FormControl();

  constructor(private ordenesTrabajosService: OrdenesTrabajoService, private contenedorOrdenTrabajo: contenedorOrdenTrabajoService, private clientesService: ClientesService) {
    this.filtroClientes = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterClientes(state) : this.listaClientes.slice())),
    );}

  ngOnInit() {
    this.ordenesTrabajosService.getOrdenesTrabajo().
      subscribe(ordenesDesdeWS => this.prueba(ordenesDesdeWS),
      error => console.error(error));

    this.clientesService.getClientes().
      subscribe(clientesDesdeWS => this.listaClientes = clientesDesdeWS,
        error => console.error(error));
  }

  prueba(ordenes: iOrdenTrabajo[]) {
    this.ordenesTrabajo = ordenes;
    this.ordenesTrabajo.forEach(item => {
      item.detallesPagos.forEach(item2 => {
        this.sumaPagos = item2.pago;
      });
      item.sumaPagos = this.sumaPagos;
      this.sumaPagos = 0;
    });
    console.log(this.ordenesTrabajo[0])
  }

  llenarDetalle(ot: string) {
    this.contenedorOrdenTrabajo.toggle(ot);
  }

  private _filterClientes(value: string): ICliente[] {
    const filterValue = value.toLowerCase();

    return this.listaClientes.filter(cliente => cliente.nombre.toLowerCase().includes(filterValue));
  }

  getPosts(option: any) {
    this.clienteSeleccionado = option;

    this.ordenesTrabajosService.getOrdenesTrabajoConFiltro(this.clienteSeleccionado.id.toString())
      .subscribe(ordenesDesdeWs => this.ordenesTrabajo = ordenesDesdeWs,
        error => console.error(error));
  }
}

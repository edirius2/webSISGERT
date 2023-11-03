import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdenesTrabajoService } from './ordenes-trabajo.service';
import { iOrdenTrabajo } from './ordenTrabajo';
import { forEach } from '@angular/router/src/utils/collection';
import { contenedorOrdenTrabajoService } from './contenedor-orden-trabajo/contenedor-orden-trabajo.service';
import { ICliente } from '../clientes/cliente';
import { ClientesService } from '../clientes/clientes.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { ContenedorImagenComponent } from './contenedor-imagen/contenedor-imagen.component';
import { MatDialog } from '@angular/material';
import { ITipoOT } from '../tipos-ot/tipoOT';
import { TiposOTService } from '../tipos-ot/tipos-ot.service';


export interface DialogData {
  ruta: string;
}

@Component({
  selector: 'app-ordenes-trabajo',
  templateUrl: './ordenes-trabajo.component.html',
  styleUrls: ['./ordenes-trabajo.component.css']
})
export class OrdenesTrabajoComponent implements OnInit {

  ordenesTrabajo: iOrdenTrabajo[];
  sumaPagos: number;
  tiposOT: ITipoOT[];

  clienteSeleccionado: ICliente;
  listaClientes: ICliente[];
  filtroClientes: Observable<ICliente[]>;
  stateCtrl = new FormControl();

  numeroOrdenes: number;
  tamano: number =10;
  posicion: number = 10;

  modoTabla: boolean = true;



  constructor(private ordenesTrabajosService: OrdenesTrabajoService, private contenedorOrdenTrabajo: contenedorOrdenTrabajoService,
    private clientesService: ClientesService, public dialog: MatDialog, private tiposOTService: TiposOTService) {
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

    this.ordenesTrabajosService.getNumeroOrdenes().
      subscribe(numeroDesdeWS => this.formatearPaginacion(numeroDesdeWS),
        error => console.error(error));

    this.tiposOTService.getTiposOT().
      subscribe(tiposDesdeWS => this.tiposOT = tiposDesdeWS,
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

  openDialog(rutaImagen : string ): void {
    const dialogRef = this.dialog.open(ContenedorImagenComponent, {
      width: '700px',
      data: { ruta: rutaImagen },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.rutaInformePreliminar = result;
    });
  }

  formatearPaginacion(total: number) {
    this.numeroOrdenes = total;
    this.tamano = 10;
    this.posicion = 1;
  }

  getServerData(e: any) {
    this.posicion = e.pageIndex;
    this.tamano = e.pageSize;

    this.ordenesTrabajosService.getOrdenesTrabajoXPaginacion(this.tamano.toString(), (this.posicion * this.tamano).toString()).
      subscribe(ordenesDesdeWS => this.prueba(ordenesDesdeWS),
        error => console.error(error));
  }
}

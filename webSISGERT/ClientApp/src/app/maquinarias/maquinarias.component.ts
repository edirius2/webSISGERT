import { Component, OnInit } from '@angular/core';
import { MaquinariasService } from './maquinarias.service';
import { iMaquinaria } from './maquinaria';
import { ClientesService } from '../clientes/clientes.service';
import { ICliente } from '../clientes/cliente';

@Component({
  selector: 'app-maquinarias',
  templateUrl: './maquinarias.component.html',
  styleUrls: ['./maquinarias.component.css']
})
export class MaquinariasComponent implements OnInit {


  listaClientes: ICliente[];
  listaMaquinarias: iMaquinaria[];

  constructor(private maquinariasService: MaquinariasService, private clientesService: ClientesService) { }

  ngOnInit() {
    this.clientesService.getClientes().
      subscribe(clientesDesdeWs => this.listaClientes = clientesDesdeWs,
        error => console.error(error));
  }

  cargarMaquinarias(clienteId: string) {
    this.maquinariasService.getMaquinariasXCliente(clienteId).
      subscribe(maquinariasDesdeWS => this.listaMaquinarias = maquinariasDesdeWS,
        error => console.error(error));
  }

}

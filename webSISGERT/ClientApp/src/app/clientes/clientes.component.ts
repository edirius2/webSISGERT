import { Component, OnInit } from '@angular/core';
import { ICliente } from './cliente';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: ICliente[];

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.clientesService.getClientes()
      .subscribe(clientesDesdeWS => this.clientes = clientesDesdeWS,
        error => console.error(error));
  }

}

import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ICliente } from './cliente';
import { ClientesService } from './clientes.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})



export class ClientesComponent implements OnInit {

  clientes: ICliente[];
  
  fNombre: string="";
  fDocumento: string="";
  fTipo: string="";



  constructor(private clientesService: ClientesService) { }

 
  

  ngOnInit() {
    this.clientesService.getClientes()
      .subscribe(clientesDesdeWS => this.clientes = clientesDesdeWS,
      error => console.error(error));
  }

  filtroNombre(filtro: string) {
    this.fNombre = filtro;
    this.clientesService.getClientesXFiltro(this.fNombre, this.fDocumento, this.fTipo).
      subscribe(clientesDesdeWS => this.clientes = clientesDesdeWS,
        error => console.error(error));
  }

  filtroDocumento(filtro: string) {
    this.fDocumento = filtro;
    this.clientesService.getClientesXFiltro(this.fNombre, this.fDocumento, this.fTipo).
      subscribe(clientesDesdeWS => this.clientes = clientesDesdeWS,
        error => console.error(error));
  }

  filtroTipo(filtro: string, event: any) {
    if (event.isUserInput) {
      switch (filtro) {
        case "DNI":
          this.fTipo = "0";
          this.clientesService.getClientesXFiltro(this.fNombre, this.fDocumento, this.fTipo).
            subscribe(clientesDesdeWS => this.clientes = clientesDesdeWS,
              error => console.error(error));
          break;
        case "RUC":
          this.fTipo = "1";
          this.clientesService.getClientesXFiltro(this.fNombre, this.fDocumento, this.fTipo).
            subscribe(clientesDesdeWS => this.clientes = clientesDesdeWS,
              error => console.error(error));
          break;
        case "Todos":
          this.fTipo = "";
          this.clientesService.getClientesXFiltro(this.fNombre, this.fDocumento, this.fTipo).
            subscribe(clientesDesdeWS => this.clientes = clientesDesdeWS,
              error => console.error(error));
          break;
        default:
          break;
      }
    }
    
  }

  prueba(cli: ICliente) {
    console.log(cli.tipoDocumento);
    console.log(cli.tipoDocumento);
  }
}

import { Component, OnInit } from '@angular/core';
import { RepuestosService } from './repuestos.service';
import { IRepuesto } from './repuesto';

@Component({
  selector: 'app-repuestos',
  templateUrl: './repuestos.component.html',
  styleUrls: ['./repuestos.component.css']
})
export class RepuestosComponent implements OnInit {

  listaRepuestos: IRepuesto[];

  constructor(private repuestoService: RepuestosService) { }

  ngOnInit() {
    this.repuestoService.getRepuestos()
      .subscribe(repuestosDesdeWS => this.listaRepuestos = repuestosDesdeWS,
        error => console.error(error)
    );
  }

}

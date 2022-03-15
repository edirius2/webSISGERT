import { Component, OnInit } from '@angular/core';
import { iOrdenTrabajo } from '../ordenTrabajo';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contenedor-orden-trabajo',
  templateUrl: './contenedor-orden-trabajo.component.html',
  styleUrls: ['./contenedor-orden-trabajo.component.css']
})
export class ContenedorOrdenTrabajoComponent implements OnInit {

  public ordenTrabajo: iOrdenTrabajo;

  constructor(private router: Router) {
    }

  ngOnInit() {
    this.ordenTrabajo = {
      id: 99,
      codigo: 'edward',
      clienteId: 99,
      fecha: new Date(),
      precioReferencial: 99,
      detallesTarea: null,
      detallesPagos: null,
      detallesEmpleados: null,
      sumaPagos:0,
      cliente: {
        id: 99,
        nombre: '',
        contacto: '',
        correoElectronico: '',
        tipoDocumento: '',
        numeroDocumento: '',
        telefono:''
      }

    }
    
  }
  

  navegarDetalleTareas() {
    //this.router.navigate(["/contenedorTrabajo", { outlets: { 'detallesTareas': ["1"] }}]);
  }

}

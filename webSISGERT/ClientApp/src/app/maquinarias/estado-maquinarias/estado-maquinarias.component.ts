import { Component, OnInit } from '@angular/core';
import { iEstadoMaquinaria } from './estadoMaquinaria';
import { EstadoMaquinariasService } from './estado-maquinarias.service';

@Component({
  selector: 'app-estado-maquinarias',
  templateUrl: './estado-maquinarias.component.html',
  styleUrls: ['./estado-maquinarias.component.css']
})
export class EstadoMaquinariasComponent implements OnInit {

  estadosMaquinarias: iEstadoMaquinaria[];

  constructor(private estadoMaquinariaService: EstadoMaquinariasService) { }

  

  ngOnInit() {
    this.estadoMaquinariaService.getEstadoMaquinarias().
      subscribe(estadosMaquinariaDesdeWS => this.estadosMaquinarias = estadosMaquinariaDesdeWS,
        error => console.error(error));
  }

}

import { Component, OnInit } from '@angular/core';
import { iTipoMaquinaria } from './tipoMaquinaria';
import { TipoMaquinariaService } from '../tipo-maquinaria.service';

@Component({
  selector: 'app-tipo-maquinaria',
  templateUrl: './tipo-maquinaria.component.html',
  styleUrls: ['./tipo-maquinaria.component.css']
})
export class TipoMaquinariaComponent implements OnInit {

  constructor(private tipoMaquinariaService: TipoMaquinariaService) { }
  listaTipoMaquinarias: iTipoMaquinaria[];

  ngOnInit() {
    this.tipoMaquinariaService.getTipoMaquinarias().
      subscribe(tipoMaquinariaDesdeWS => this.listaTipoMaquinarias = tipoMaquinariaDesdeWS,
        error => console.error(error));
  }

}

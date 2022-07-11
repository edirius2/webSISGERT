import { Component, OnInit } from '@angular/core';
import { iMarcaMaquinaria } from './marcaMaquinaria';
import { MarcaMaquinariaService } from './marca-maquinaria.service';

@Component({
  selector: 'app-marca-maquinaria',
  templateUrl: './marca-maquinaria.component.html',
  styleUrls: ['./marca-maquinaria.component.css']
})
export class MarcaMaquinariaComponent implements OnInit {

  marcaMaquinarias: iMarcaMaquinaria[];

  constructor(  private marcaMaquinariaService: MarcaMaquinariaService) { }

  ngOnInit() {

    this.marcaMaquinariaService.getMarcasMaquinarias()
      .subscribe(marcaMaquinariasDesdeWS => this.marcaMaquinarias = marcaMaquinariasDesdeWS,
        error => console.error(error));
  }

}

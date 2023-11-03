import { Component, OnInit } from '@angular/core';
import { ITipoOT } from './tipoOT';
import { TiposOTService } from './tipos-ot.service';

@Component({
  selector: 'app-tipos-ot',
  templateUrl: './tipos-ot.component.html',
  styleUrls: ['./tipos-ot.component.css']
})
export class TiposOTComponent implements OnInit {

  tiposOT: ITipoOT[];

  constructor(private tiposOTService: TiposOTService) { }

  ngOnInit() {
    this.tiposOTService.getTiposOT().
      subscribe(tiposOTDesdeWS => this.tiposOT = tiposOTDesdeWS,
        error => console.error(error));
  }

}

import { Component, OnInit } from '@angular/core';
import { CostosService } from './costos.service';
import { iCosto } from './costo';

@Component({
  selector: 'app-costos',
  templateUrl: './costos.component.html',
  styleUrls: ['./costos.component.css']
})
export class CostosComponent implements OnInit {

  listaCostos: iCosto[];

  constructor(private costosService: CostosService) { }

  ngOnInit() {

    this.costosService.getCostos().
      subscribe(costosDesdeWS => this.listaCostos = costosDesdeWS,
        error => console.error(error));
  }

}

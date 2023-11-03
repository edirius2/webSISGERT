import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-ordenes',
  templateUrl: './menu-ordenes.component.html',
  styleUrls: ['./menu-ordenes.component.css']
})
export class MenuOrdenesComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  menusActivos: boolean =true;
  OrdenTrabajoId: string;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.get("id") == undefined) {
        return;
      }
      this.OrdenTrabajoId = params.get('id');
      this.menusActivos= false;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-cotizacion',
  templateUrl: './menu-cotizacion.component.html',
  styleUrls: ['./menu-cotizacion.component.css']
})
export class MenuCotizacionComponent implements OnInit {

  CotizacionId: string;
  menusActivos: boolean = true;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.get("id") == undefined) {
        return;
      }
      this.CotizacionId = params.get('id');
      this.menusActivos = false;
    });
  }

}

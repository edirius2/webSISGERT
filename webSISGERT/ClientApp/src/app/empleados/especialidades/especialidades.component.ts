import { Component, OnInit } from '@angular/core';
import { iEspecialidad } from './especialidad';
import { EspecialidadesService } from './especialidades.service';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css']
})
export class EspecialidadesComponent implements OnInit {

  especialidades: iEspecialidad[];

  constructor(private especialidadService: EspecialidadesService) { }

  ngOnInit() {
    this.especialidadService.getEspecialidades().
      subscribe(especialidadesDesdeWS => this.especialidades = especialidadesDesdeWS,
        error => console.error(error));
  }

}

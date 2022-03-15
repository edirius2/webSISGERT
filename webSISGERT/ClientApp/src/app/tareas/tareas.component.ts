import { Component, OnInit } from '@angular/core';
import { ITarea } from './tarea';
import { TareasService } from './tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  tareas: ITarea[];

  constructor(private tareasService: TareasService) { }

  ngOnInit() {

    this.tareasService.getTareas().
      subscribe(tareasDesdeWS => this.tareas = tareasDesdeWS,
        error => console.error(error));
  }

}

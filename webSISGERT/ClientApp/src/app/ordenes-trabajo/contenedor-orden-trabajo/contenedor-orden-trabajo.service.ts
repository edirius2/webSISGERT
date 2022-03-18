import { Injectable, Output, EventEmitter } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class contenedorOrdenTrabajoService {

  constructor() { }

  idOrdenTrabajo: string = "0";

  

  @Output() change: EventEmitter<string> = new EventEmitter();

  toggle(id:string) {

    this.idOrdenTrabajo = id;
    this.change.emit(this.idOrdenTrabajo);
  }
}

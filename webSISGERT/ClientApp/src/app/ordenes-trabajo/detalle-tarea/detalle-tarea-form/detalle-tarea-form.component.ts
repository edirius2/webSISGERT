import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DetalleTareaService } from '../detalle-tarea.service';
import { Router, ActivatedRoute } from '@angular/router';
import { iDetalleTarea } from '../detalleTarea';
import { ITarea } from 'src/app/tareas/tarea';
import { TareasService } from 'src/app/tareas/tareas.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-detalle-tarea-form',
  templateUrl: './detalle-tarea-form.component.html',
  styleUrls: ['./detalle-tarea-form.component.css']
})
export class DetalleTareaFormComponent implements OnInit {
  stateCtrl = new FormControl();
  tareaSeleccionada: ITarea;

  formGroup: FormGroup;
  private modoEdicion: boolean = false;
  detalleTareaId: string;
  detalleOTId: string;
  listaTareas: ITarea[];
  filtroTareas: Observable<ITarea[]>;


  constructor(private fb: FormBuilder, private detalleTareaService: DetalleTareaService, private tareasService: TareasService, private router: Router,
    private activatedRouter: ActivatedRoute) {
    this.filtroTareas = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterTareas(state) : this.listaTareas.slice())),
    );
  }

 
  
  ngOnInit() {
    this.formGroup = this.fb.group({
      id: '',
      cantidad: '',
      precio: '',
      tarea: this.fb.group({
        id: '',
        nombre: '',
        precioReferencial: ''
      })
    });

    this.tareasService.getTareas()
      .subscribe(tareasDesdeWS => this.listaTareas = tareasDesdeWS,
      error => console.error(error));
    console.log('probando');
    //console.log(this.listaTareas.values);

    this.activatedRouter.paramMap.subscribe(params => {
      
      if (params.get('id') == undefined) {
        this.modoEdicion = false;
        this.detalleOTId = params.get('idOT');
        console.log(params.get('idOT'));
        return;
      }
      this.modoEdicion = true;
      this.detalleTareaId = params.get('id');
      this.detalleTareaService.getDetalleTarea(this.detalleTareaId.toString())
        .subscribe(detalleTarea => this.cargarFormulario(detalleTarea),
          error => console.error(error));
    });
  }

  cargarFormulario(detalleTarea: iDetalleTarea) {
    this.formGroup.patchValue({
      id: detalleTarea.id,
      cantidad: detalleTarea.cantidad,
      precio: detalleTarea.precio,
      tarea: detalleTarea.tarea
    });
    
  }

  save() {
    let detalleTarea: iDetalleTarea = Object.assign({}, this.formGroup.value);
    detalleTarea.tareaId = detalleTarea.tarea.id;
    if (this.modoEdicion) {
      detalleTarea.id = Number(this.detalleTareaId);
      this.detalleOTId = detalleTarea.ordenTrabajoId.toString();
      this.detalleTareaService.editarDetalleTarea(detalleTarea)
        .subscribe(detalle => this.onSaveSucess(),
          error => console.error(error));
    }
    else {
      detalleTarea.id = 0;
      detalleTarea.ordenTrabajoId = Number(this.detalleOTId);
      this.detalleTareaService.createDetalleTarea(detalleTarea)
        .subscribe(detalle => this.onSaveSucess(),
          error => console.error(error));
    }
  }

  onSaveSucess() {
    if (this.modoEdicion) {
      this.router.navigate(["/detalleTareas/" + this.detalleOTId]);
    }
    else {
      this.router.navigate(["/detalleTareas/" + this.detalleOTId]);
    }
    
  }

  private _filterTareas(value: string): ITarea[] {
    const filterValue = value.toLowerCase();

    return this.listaTareas.filter(tarea => tarea.nombre.toLowerCase().includes(filterValue));
  }


  setTarea(option: any) {
    this.tareaSeleccionada = option;

    this.formGroup.get('tarea').patchValue({
      id: this.tareaSeleccionada.id,
      nombre: this.tareaSeleccionada.nombre,
      precioReferencial: this.tareaSeleccionada.precioReferencial
    });

  }
}

import { Component, OnInit } from '@angular/core';
import { iDetalleTareaCotizacion } from '../detalleTareaCotizacion';
import { DetalleTareaCService } from '../detalle-tarea-c.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TareasService } from 'src/app/tareas/tareas.service';
import { ITarea } from 'src/app/tareas/tarea';

@Component({
  selector: 'app-detalle-tarea-cform',
  templateUrl: './detalle-tarea-cform.component.html',
  styleUrls: ['./detalle-tarea-cform.component.css']
})
export class DetalleTareaCFormComponent implements OnInit {

  listaTareas: ITarea[];
  tareaSeleccionada: ITarea;
  idCotizacion: string;
  detalleTareaCId: string;
  modoEdicion: boolean = false;
  stateCtrl = new FormControl();

  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private detalleTareaCService: DetalleTareaCService, private tareasService: TareasService) { }


  ngOnInit() {
    this.formGroup = this.fb.group({
      id: '',
      tareaId: '',
      tarea: '',
      cantidad: '',
      precio: '',
      hora: '',
      cotizacionId: '',
      cotizacion: '',
    });

    this.tareasService.getTareas().
      subscribe(tareasDesdeWS => this.listaTareas = tareasDesdeWS,
      error => console.error(error));

    this.activatedRoute.paramMap.subscribe(params => {
      if (params.get("id") == undefined) {
        this.modoEdicion = false;
        this.idCotizacion = params.get("idC");
        return
      }

      this.modoEdicion = true;
      this.detalleTareaCId = params.get("id");
      this.detalleTareaCService.getDetalleTareaCotizacion(this.detalleTareaCId).
        subscribe(detalleDesdeWS => this.cargarFormulario(detalleDesdeWS),
          error => console.error(error));
    });
  }

  cargarFormulario(detalle: iDetalleTareaCotizacion) {
    this.formGroup.patchValue({
      id: detalle.id,
      tareaId: detalle.tareaId,
      tarea: detalle.tarea,
      cantidad: detalle.cantidad,
      precio: detalle.precio,
      hora: detalle.hora,
      cotizacionId: detalle.cotizacionId,
      cotizacion: '',
    });
  }

  save() {
    let detalleTarea: iDetalleTareaCotizacion = Object.assign({}, this.formGroup.value);
    detalleTarea.tareaId = detalleTarea.tarea.id;
    detalleTarea.precio = 0;
    if (this.modoEdicion) {
      detalleTarea.id = Number(this.detalleTareaCId);
      detalleTarea.cotizacionId = detalleTarea.cotizacion.id;
      this.detalleTareaCService.editarDetalleTareaCotizacion(detalleTarea).
        subscribe(detalleDesdeWS => this.onSaveSucess(),
          error => console.error(error));
    }
    else {
      detalleTarea.id = 0;
      detalleTarea.cotizacionId = Number(this.idCotizacion);
      this.detalleTareaCService.createDetalleTareaCotizacion(detalleTarea).
        subscribe(detalleDesdeWS => this.onSaveSucess(),
          error => console.error(error));
    }
  }

  onSaveSucess() {
    this.router.navigate(["/principal/cotizaciones-editar/" + this.idCotizacion + "/detallesTareasC/" + this.idCotizacion]);
  }

  setTarea(tarea: ITarea, input: any) {
    if (input.isUserInput) {
      this.tareaSeleccionada = tarea;

      this.formGroup.get('tarea').patchValue({
        id: this.tareaSeleccionada.id,
        nombre: this.tareaSeleccionada.nombre,
        precioReferencial: this.tareaSeleccionada.precioReferencial
      });
      
    }
  }
}

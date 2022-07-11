import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarcaMaquinariaService } from '../marca-maquinaria.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { iMarcaMaquinaria } from '../marcaMaquinaria';

@Component({
  selector: 'app-marca-maquinaria-form',
  templateUrl: './marca-maquinaria-form.component.html',
  styleUrls: ['./marca-maquinaria-form.component.css']
})
export class MarcaMaquinariaFormComponent implements OnInit {

  formGroup: FormGroup;
  modoEdicion: boolean = false;
  marcaMaquinariaId: number;

  constructor(private activatedRoute: ActivatedRoute, private marcaMaquinariaService: MarcaMaquinariaService,
    private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      id: '',
      descripcion: ''
    });

    this.activatedRoute.params.subscribe(params => {
      if (params["id"] == undefined) {
        return;
      }
      this.modoEdicion = true;
      this.marcaMaquinariaId = params["id"];
      this.marcaMaquinariaService.getMarcaMaquinaria(this.marcaMaquinariaId.toString()).
        subscribe(marcaMaquinariaDesdeWS => this.cargarFormulario(marcaMaquinariaDesdeWS),
          error => console.error(error));
    })
  }

  cargarFormulario(marcaMaquinaria: iMarcaMaquinaria) {
    this.formGroup.patchValue({
      id: marcaMaquinaria.id,
      descripcion: marcaMaquinaria.descripcion
      });
  }

  save() {
    let marcaMaquinaria: iMarcaMaquinaria = Object.assign({}, this.formGroup.value);

    if (this.modoEdicion == true) {
      marcaMaquinaria.id = this.marcaMaquinariaId;
      this.marcaMaquinariaService.updateMarcaMaquinaria(marcaMaquinaria).
        subscribe(marcaMaquinariaDesdeWS => this.onSaveSucess(),
          error => console.error(error));
    }
    else {
      marcaMaquinaria.id = 0;
      this.marcaMaquinariaService.createMarcaMaquinaria(marcaMaquinaria).
        subscribe(marcaMaquinariaDesdeWS => this.onSaveSucess(),
          error => console.error(error));
    }
  }

  onSaveSucess() {
    this.router.navigate(["/marca-maquinarias"]);
  }
}

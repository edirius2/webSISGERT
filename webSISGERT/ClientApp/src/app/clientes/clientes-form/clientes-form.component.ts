import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICliente } from '../cliente';
import { ClientesService } from '../clientes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private clienteService: ClientesService, private router: Router,
    private activatedRouter: ActivatedRoute) { }
  formGroup: FormGroup;
  modoEdicion: boolean = false;
  clienteId: number;

  ngOnInit() {
    this.formGroup = this.fb.group({
      id: '',
      tipoDocumento: '',
      numeroDocumento: '',
      nombre: '',
      contacto: '',
      telefono: '',
      correoElectronico: ''
    });

    this.activatedRouter.params.subscribe(params => {
      if (params["id"] == undefined) {
        return;
      }
      this.modoEdicion = true;
      this.clienteId = params["id"];

      this.clienteService.getCliente(this.clienteId.toString()).
        subscribe(cliente => this.cargarFormulario(cliente),
          error => console.error(error));
      
    });
  }

  cargarFormulario(cliente: ICliente) {
    this.formGroup.patchValue(
      {
        id: cliente.id,
        tipoDocumento: cliente.tipoDocumento,
        numeroDocumento: cliente.numeroDocumento,
        nombre: cliente.nombre,
        contacto: cliente.contacto,
        telefono: cliente.telefono,
        correoElectronico: cliente.correoElectronico
      });
  }
  save() {
    let cliente: ICliente = Object.assign({}, this.formGroup.value)

    if (this.modoEdicion) {
      cliente.id = this.clienteId;
      this.clienteService.updateCliente(cliente).subscribe(
        cliente => this.onSaveSucess(),
        error => console.error(error));
    }
    else {
      cliente.id = 0;
      this.clienteService.createCliente(cliente).subscribe(
        cliente => this.onSaveSucess(),
        error => console.error(error));
    }
    
  }

  onSaveSucess() {
    this.router.navigate(["/clientes"]);
  }
}

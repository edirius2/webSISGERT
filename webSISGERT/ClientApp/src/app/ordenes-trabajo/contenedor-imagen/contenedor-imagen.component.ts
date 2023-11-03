import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../ordenes-trabajo-form/ordenes-trabajo-form.component';
import { OrdenesTrabajoService } from '../ordenes-trabajo.service';

@Component({
  selector: 'app-contenedor-imagen',
  templateUrl: './contenedor-imagen.component.html',
  styleUrls: ['./contenedor-imagen.component.css']
})
export class ContenedorImagenComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ContenedorImagenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private ordenesTrabajoService: OrdenesTrabajoService) { }

  ngOnInit() {
  }


  onNoClick(): void {
    this.data.resultado = false;
    this.dialogRef.close();
  }

  InputChange(fileInputEvent: any) {
    this.ordenesTrabajoService.crearImagenInformePreliminar(fileInputEvent.target.files[0]).
      subscribe(nombreArchivo =>  this.data.ruta = nombreArchivo,
      error => console.error(error));

  }
}

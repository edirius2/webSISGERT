import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../ordenes-trabajo-form/ordenes-trabajo-form.component';

@Component({
  selector: 'app-contenedor-imagen',
  templateUrl: './contenedor-imagen.component.html',
  styleUrls: ['./contenedor-imagen.component.css']
})
export class ContenedorImagenComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ContenedorImagenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, ) { }

  ngOnInit() {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
}

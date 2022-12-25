import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { ClientesService } from '../clientes.service';
import { ICliente } from '../cliente';
import { DatePipe } from '@angular/common';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-clientes-print',
  templateUrl: './clientes-print.component.html',
  styleUrls: ['./clientes-print.component.css']
})
export class ClientesPrintComponent implements OnInit {

  clientes: ICliente[];

  today: Date = new Date();
  pipe = new DatePipe('en-US');
  fechaActual = null;


  constructor(private clientesService: ClientesService) { }

  @ViewChild('content') content: ElementRef;

  ngOnInit() {
    this.clientesService.getClientes()
      .subscribe(clientesDesdeWS => this.clientes = clientesDesdeWS,
      error => console.error(error));

    this.fechaActual = this.pipe.transform(Date.now(), 'dd/MM/yyyy');
  }

  imagenCreada;

  savePDF(): void {
    let content = this.content.nativeElement;

    let doc = new jsPDF('p', 'mm', 'a4');
    let _elementHandlers =
    {
      '#editor': function (element, renderer) {
        return true;
      }
    };
    doc.fromHTML(content.innerHTML, 15, 15, {

      'width': 595,
      'elementHandlers': _elementHandlers
    });

    doc.save('test.pdf');
  }

  savePDF2() {
    html2canvas(document.querySelector("#content")).then(canvas => {

      this.imagenCreada = canvas.toDataURL();

    });

    var doc = new jsPDF();
    doc.addImage(this.imagenCreada, 'JPEG', 20, 20);
    doc.save('test.pdf');
  }
}

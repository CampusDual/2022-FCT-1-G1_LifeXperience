import { Component, OnInit } from '@angular/core';
import { Center } from 'ontimize-web-ngx-map';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-clients-details',
  templateUrl: './clients-details.component.html',
  styleUrls: ['./clients-details.component.css']
})
export class ClientsDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  htmlToPdfmake(){

  }

  createPdf(){
    const pdfDefinition: any ={
      content: [
        {
          text: 'Factura',
          style: 'header'
        },
        {
          //stack: this.htmlToPdfmake()
        }
      ],
      styles: {
        header: {
          fontSize: 32,
          bold: true,
          alignment: 'center'
        }
      }
    }

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
  }
}

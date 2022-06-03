import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef, ViewChildren, QueryList } from '@angular/core';
import { OFormComponent, OTableComponent } from 'ontimize-web-ngx';


import { Center } from 'ontimize-web-ngx-map';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Button } from 'protractor';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-paymentsexp-details',
  templateUrl: './paymentsexp-details.component.html',
  styleUrls: ['./paymentsexp-details.component.css']
})
export class PaymentsExpDetailsComponent implements OnInit {

  constructor() { }

      //A partir de aqui probamos el pdf
      @ViewChild('dataForm', {static: true}) dataForm: OFormComponent;

      createPdf(){
        const dataFormConst = this.dataForm.getFieldValues(['client_name','exp_name','assistance','paymentdate','amountpaid']);

        const pdfDefinition: any ={
          content: [
            {
              text: dataFormConst['exp_name'],
              style: 'header'
            },
            {
              text: 'Datos del titular:',
              style: 'subheader'
            },
            {
              text: ["Nombre: "+dataFormConst['client_name'],
              'Apellido: Jose\n\n',
		          'NIF: 00000000E \n\n',
		          'Email: pepito@gmail.com \n\n',
		          'Dirección: Avenida de Madrid, Edificio rosa, portal 3 piso 4\n\n',
		          'Número de Teléfono: +34 / 655477899',
            ]
            },
            {
              text: 'Información de compra',
              style: ('subheader')
            }
          ],
          styles: {
            header: {
              fontSize: 24,
              bold: true,
              alignment: 'right',
              margin: [0, 0, 0, 60]
            },
            subheader: {
              bold: true,
               fontSize: 18,
               margin: [0, 0, 0, 25]
            },
            subheader2: {
              bold: true,
              fontSize: 22,
              alignment: 'center',
              margin: [0, 25, 0, 0],
            }
          }
        }

        const pdf = pdfMake.createPdf(pdfDefinition);
        pdf.open();
      }

  ngOnInit() {
  }

}

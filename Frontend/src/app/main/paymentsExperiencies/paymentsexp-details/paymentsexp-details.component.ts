import { formatDate } from '@angular/common';
import { Component, Inject, Injector, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { ElementRef, ViewChildren, QueryList } from '@angular/core';
import { OFormComponent, OntimizeService, OTranslateService, SQLTypes } from 'ontimize-web-ngx';


import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-paymentsexp-details',
  templateUrl: './paymentsexp-details.component.html',
  styleUrls: ['./paymentsexp-details.component.css']
})
export class PaymentsExpDetailsComponent implements OnInit {

    constructor(
        protected injector: Injector,
        @Inject(LOCALE_ID) private locale: string,
        private translator: OTranslateService
        ) { }

      //A partir de aqui probamos el pdf
      @ViewChild('dataForm', {static: true}) dataForm: OFormComponent;
      protected service: OntimizeService;

      getClientExpPDFData(){
        this.service = this.injector.get(OntimizeService);
        const conf = this.service.getDefaultServiceConfiguration('experiences');
        this.service.configureService(conf);

        const columns = ['client_name','client_address','phonenumber',
        'relation_id','paymentdate','amountpaid','exp_name','description',
        'enddate','price','associate_image'];
        const filter = {
            "relation_id": this.dataForm.getDataValue('relation_id').value
        };


        this.service.query(filter, columns, 'clientExperienceDetails').subscribe(resp => {
          if (resp.code === 0) {

              //Hay que parsear las fechas al formato que nos interesa o aparecen en el formato de milisengundos de UNIX, un nuemro de 13 digitos
              resp.data[0]["paymentdate"] = formatDate(new Date(parseInt(resp.data[0]["paymentdate"])),'yyyy-MM-dd',this.locale)
              resp.data[0]["enddate"] = formatDate(new Date(parseInt(resp.data[0]["enddate"])),'yyyy-MM-dd',this.locale)
            this.createPdf(resp.data[0]);


          } else {
            alert('Impossible to query data!');
            throw new Error
          }
        });
      }

      createPdf(pdfData:string[]){

        //Maquetacion de la factura
        const pdfDefinition: any ={
          content: [
            {
              image: 'data:image/png;base64,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'
              ,style:"header",
              margin: [0, 0, 0, 30]
        },{
                  table:{
                      widths: ["*","*"],
                      body:[
                          //Fila
                              [
                                  //Columna
                                  [
                                       {
                                            text:this.translator.get("payment_exp_invoice_to"),
                                            bold:"true",
                                            fontSize: 14,
                                            margin: [0, 0, 0, 10]
                                        },
                                      {
                                            ul:
                                            [
                                                {   text:pdfData['client_name'],
                                                    listType: 'none',
                                                        margin: [0, 0, 0, 10]
                                                },{
                                                    text:pdfData['client_address'],
                                                    listType: 'none',
                                                        margin: [0, 0, 0, 10]
                                                },{
                                                    text:pdfData['phonenumber'],
                                                    listType: 'none'
                                                }
                                            ]
                                        }
                                    ],
                                  [
                                      {
                                            columns:
                                            [
                                                //Columna 1
                                                [
                                                    {
                                                        text:this.translator.get("payment_exp_invoice"),
                                                        margin: [0, 32, 0, 10]
                                                    },{
                                                        text:this.translator.get("Date"),
                                                        margin: [0, 10, 0, 0]
                                                    }
                                                ],//Columna 2
                                                [
                                                    {
                                                        text:pdfData['relation_id'],
                                                        margin: [0, 32, 20, 10],
                                                        alignment:"right"
                                                    },{
                                                        text:pdfData['paymentdate'],
                                                        margin: [0, 10, 20, 0],
                                                        alignment:"right"
                                                    }
                                                ]
                                            ]
                                        }
                                  ]
                              ]

                         ],
                  },
                  layout: 'noBorders',
                  margin:[0,0,0,40]
               },//Imagen
              {
                  image: 'data:image/jpeg;base64,'+ pdfData['associate_image'],
                  width: "500",
                    alignment:"center"
              },
                {
                    //Nombre descripcion
                    text:pdfData['exp_name'],
                    bold:"true",
                    fontSize: 18,
                    margin: [0, 40, 0, 0]
                },

              {
                  //Datos de la experiencia
                  table:{
                      widths: ["*","*"],
                      body:[
                          //Fila
                              [
                                  //Columna
                                  [

                                        {
                                            text:pdfData['description'],
                                            margin: [0,0,5,0]
                                        }
                                    ],
                                  [
                                      {
                                            columns:
                                            [
                                                //Columna 1
                                                [
                                                    {
                                                        text:this.translator.get("enddate"),
                                                        margin: [0, 0, 0, 0]

                                                    },{
                                                        text:this.translator.get("price"),
                                                        margin: [0, 10, 0, 0]
                                                    }
                                                ],//Columna 2
                                                [
                                                    {
                                                        text:pdfData['enddate'],
                                                        margin: [0, 0, 40, 0],
                                                        alignment:"right",

                                                    },{
                                                        text:pdfData['price'] + " €",
                                                        margin: [0, 10, 40, 0],
                                                        alignment:"right"
                                                    }
                                                ]
                                            ]
                                        }
                                  ]
                              ]

                         ],
                  },
                  layout: 'noBorders',
                  margin:[0,30,0,0]
               },

          ],styles:{
              header: {
            fontSize: 20,
            bold: true
          },
          }

        }

        const pdf = pdfMake.createPdf(pdfDefinition);
        pdf.open();
      }

  ngOnInit() {
  }

}

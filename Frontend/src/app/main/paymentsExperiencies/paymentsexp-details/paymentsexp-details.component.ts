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

        const columns = ['client_name','address','phonenumber',
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
              image: 'data:image/jpeg;base64,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'
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
                                                    text:pdfData['address'],
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

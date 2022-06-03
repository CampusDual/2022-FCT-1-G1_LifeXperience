import { formatDate } from '@angular/common';
import { Component, Inject, Injector, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { OFormComponent, OntimizeService, OTranslateService } from 'ontimize-web-ngx';


import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-paymentsbox-details',
  templateUrl: './paymentsbox-details.component.html',
  styleUrls: ['./paymentsbox-details.component.css']
})
export class PaymentsBoxDetailsComponent implements OnInit {

  constructor(
    protected injector: Injector,
    @Inject(LOCALE_ID) private locale: string,
    private translator: OTranslateService) { }

  ngOnInit() {
  }

  @ViewChild('dataForm', {static: true}) dataForm: OFormComponent;
      protected service: OntimizeService;

  getClientExpPDFData(){
    this.service = this.injector.get(OntimizeService);
    const conf = this.service.getDefaultServiceConfiguration('experienceboxes');
    this.service.configureService(conf);

    const columns = ['client_name','address','phonenumber','boxclient_id','paymentdate','amountpaid','exp_name','description','enddate','price','associate_image'];
    const filter = {
        "boxclient_id": this.dataForm.getDataValue('boxclient_id').value
    };


    this.service.query(filter, columns, 'clientExperienceBoxDefault').subscribe(resp => {
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
                text:"Nombre de la empresa" ,
                style:"header",
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
                                                    text:pdfData['boxclient_id'],
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
        fontSize: 18,
        bold: true
      },
      }
      
    }

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
  }
}

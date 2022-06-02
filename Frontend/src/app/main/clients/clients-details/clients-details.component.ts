import { formatDate } from '@angular/common';
import { Component, Injector, OnInit, ViewChild,LOCALE_ID, Inject, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { DialogService, OFormComponent, OntimizeService, OTableComponent, OTranslateService, SQLTypes } from 'ontimize-web-ngx';
import { ModalService } from '../../ui-elements/ui-modal-window';

import { Center } from 'ontimize-web-ngx-map';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Button } from 'protractor';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-clients-details',
  templateUrl: './clients-details.component.html',
  styleUrls: ['./clients-details.component.css']
})
export class ClientsDetailsComponent implements OnInit {
  @ViewChild('clientDetails', { static: false }) clientDetails: OFormComponent;
  @ViewChild('experienceBoxTable', { static: false }) expBoxTable: OTableComponent;
  private clientBoxConfirmDialogTitle:string;
  private clientBoxConfirmDialogTextBody:string;
  private alertDialogSuccessful:string
  private alertDialogFailed:string

    constructor(
        private modalService: ModalService,
        private injector: Injector,
        private dialogService: DialogService,
        @Inject(LOCALE_ID) private locale: string,
        private translator: OTranslateService
      ) { }

       //A partir de aqui probamos el pdf
    @ViewChild('experienceBoxTable', {static: true}) nameAlias: OTableComponent;
    @ViewChild('nameAlias', {static: true}) nameAlias2: ElementRef;//ElementRef
    @ViewChildren('nameAlias, surnameAlias') inputs: QueryList<ElementRef>

    createPdf(){
      var name: string= "Nameeeeeee";//
      var listPrueba: Array<string> = this.nameAlias.getAllValues();
      name = listPrueba[0].toString()

      const pdfDefinition: any ={
        content: [
          {
            text: 'Detalles de Compra',
            style: 'header'
          },
          {
            text: "Nombre del titular: "+name
          }
        ],
        styles: {
          header: {
            fontSize: 24,
            bold: true,
            alignment: 'right',
            margin: [0, 0, 0, 60]
          }
        }
      }

      const pdf = pdfMake.createPdf(pdfDefinition);
      pdf.open();
    }

    ngOnInit() {
      this.clientBoxConfirmDialogTitle = this.translator.get("client_experience_box_dialog_confirmation_title");
      this.clientBoxConfirmDialogTextBody = this.translator.get("client_experience_box_dialog_confirmation_body_text");
      this.alertDialogSuccessful = this.translator.get("Successful_operation")
      this.alertDialogFailed = this.translator.get("Failed_operation")
    }


    openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }

    //If the name of 'boxData' is changed it has necessary to change de string of the clientBoxConfirmDialog because they have a string format with this variable
    showConfirm(boxData) {
      if (this.dialogService) {
        //Mensaje de confirmacion del añadido del paquete
        this.dialogService.confirm(this.clientBoxConfirmDialogTitle, this.clientBoxConfirmDialogTextBody.replace("${expBoxName}",boxData.name) );
        this.dialogService.dialogRef.afterClosed().subscribe( result => {

          if(result) {
            //Preparacion de la query
            var service = "experienceboxes";
            var entity = "clientExperienceBox";
            var av = {'idclient':this.clientDetails.getDataValue('id').value,
                      'idbox':boxData.id,
                      'paymentdate':  formatDate(Date.now(),'yyyy-MM-dd',this.locale),
                      'amountpaid': boxData.price
                    };

            var sqltypes = {
              "idclient": SQLTypes.NUMERIC,
              "idbox": SQLTypes.INTEGER,
              "paymentdate": SQLTypes.DATE,
              "amountpaid": SQLTypes.NUMERIC,
            }

            this.insert(service,entity,av,sqltypes)
          } else {
            // TODO:Comprobar si ontimize ya muestra error al salir mal la query
          }
        })
      }
    }

    protected service: OntimizeService;


    insert(service:string,entity: string, av: Object = {}, sqltypes?: object){

      this.service = this.injector.get(OntimizeService);
      const conf = this.service.getDefaultServiceConfiguration(service);
      this.service.configureService(conf);



      this.service.insert(av,entity,sqltypes).subscribe(resp => {
        if (resp.code === 0) {
          this.closeModal("custom-modal-1");
          this.expBoxTable.reloadData();
          alert(this.alertDialogSuccessful);

        } else {
          alert(this.alertDialogFailed);
        }
      });
    }


  }


import { formatDate } from '@angular/common';
import { Component, Injector, OnInit, ViewChild,LOCALE_ID, Inject, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { DialogService, OFormComponent, OntimizeService, OTableComponent, SQLTypes } from 'ontimize-web-ngx';
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
  datePipeString : string;

    constructor(
        private modalService: ModalService,
        private injector: Injector,
        private dialogService: DialogService,
        @Inject(LOCALE_ID) private locale: string
      ) {
      }

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

    }

    openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }

    showConfirm(boxData) {
      if (this.dialogService) {
        this.dialogService.confirm('¿Asignar caja de experiencias?', '¿Quieres añadir la caja seleccionada "'  + boxData.name + 'v" al cliente?');
        this.dialogService.dialogRef.afterClosed().subscribe( result => {
          if(result) {
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
            // Actions on cancellation
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
          console.log("Peticion realizada")
          this.closeModal("custom-modal-1");
          this.expBoxTable.reloadData();
          // resp.data contains the data retrieved from the server

        } else {
          alert('Impossible to query data!');
          console.log("Shit")
          throw new Error
        }
      });
    }
}

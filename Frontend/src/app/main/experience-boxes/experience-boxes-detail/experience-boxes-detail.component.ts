import { Component, Inject, Injector, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { DialogService, OFormComponent, OntimizeService, OTranslateService, SQLTypes } from 'ontimize-web-ngx';
import { ModalService } from '../../ui-elements/ui-modal-window';

@Component({
  selector: 'app-experience-boxes-detail',
  templateUrl: './experience-boxes-detail.component.html',
  styleUrls: ['./experience-boxes-detail.component.css']
})
export class ExperienceBoxesDetailComponent implements OnInit {
  @ViewChild('experienceBoxForm', { static: false }) expBoxTable: OFormComponent;


  constructor(
    private modalService: ModalService,
        private injector: Injector,
        private dialogService: DialogService,
        @Inject(LOCALE_ID) private locale: string,
        private translator: OTranslateService
  ) { }

  ngOnInit() {
  }

  openModal(id: string) {
    this.modalService.open(id);
}

closeModal(id: string) {
    this.modalService.close(id);
}



showConfirm(experienceData) {
  if (this.dialogService) {
    //Mensaje de confirmacion del añadido del paquete
    this.dialogService.confirm("Añadir esta experiencia a la caja?", "Quieres añadir la experiencia $(expName) a la caja?".replace("${expName}",experienceData.name) );
    this.dialogService.dialogRef.afterClosed().subscribe( result => {

      if(result) {
        //Preparacion de la query
        var service = "experiences";
        var entity = "experienceBoxExperience";
        var av = {'idpack':this.expBoxTable.getDataValue('id').value,
                  'idexp':experienceData.id,
                };

        var sqltypes = {
          "idclient": SQLTypes.INTEGER,
          "idbox": SQLTypes.INTEGER,
        }

        new OntimizeService(this.injector).insert(service,entity,av,sqltypes)
      } else {
        // TODO:Comprobar si ontimize ya muestra error al salir mal la query
      }
    })
  }
}


}

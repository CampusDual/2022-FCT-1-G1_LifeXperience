import { formatDate } from "@angular/common";
import {
  Component,
  Injector,
  OnInit,
  ViewChild,
  LOCALE_ID,
  Inject,
  ElementRef,
  ViewChildren,
  QueryList,
} from "@angular/core";
import {
  DialogService,
  ODateInputComponent,
  OFormComponent,
  OntimizeService,
  OTableComponent,
  OTextInputComponent,
  OTranslateService,
  SQLTypes,
} from "ontimize-web-ngx";
import { ModalService } from "../../ui-elements/ui-modal-window";

@Component({
  selector: "app-clients-details",
  templateUrl: "./clients-details.component.html",
  styleUrls: ["./clients-details.component.css"],
})
export class ClientsDetailsComponent implements OnInit {
  @ViewChild("clientDetails", { static: false }) clientDetails: OFormComponent;
  @ViewChild("experienceBoxTable", { static: false })
  expBoxTable: OTableComponent;
  @ViewChild("experiencesTable", { static: false }) expTable: OTableComponent;
  @ViewChild("calendarAssistanceInput", { static: false })
  calAssistance: OFormComponent;
  @ViewChild("#experienceNameModalTxtInput", { static: false }) expNameModalTxtInput:OTextInputComponent;

  private clientBoxConfirmDialogTitle: string;
  private clientBoxConfirmDialogTextBody: string;
  private clientExperienceConfirmDialogTitle: string;
  private clientExperienceConfirmDialogTextBody: string;
  private alertDialogSuccessful: string;
  private alertDialogFailed: string;
  private dateValue: Date;
  private calendarResult: Date;
  public experienceRowData;
  public experienceName="experienceDummy";
  public clientExp="clientDummy";

  protected service: OntimizeService;

  constructor(
    private modalService: ModalService,
    private injector: Injector,
    private dialogService: DialogService,
    @Inject(LOCALE_ID) private locale: string,
    private translator: OTranslateService
  ) {}

  ngOnInit() {
    this.clientBoxConfirmDialogTitle = this.translator.get(
      "client_experience_box_dialog_confirmation_title"
    );
    this.clientBoxConfirmDialogTextBody = this.translator.get(
      "client_experience_box_dialog_confirmation_body_text"
    );
    this.clientExperienceConfirmDialogTitle = this.translator.get(
      "client_experience_dialog_confirmation_title"
    );
    this.clientExperienceConfirmDialogTextBody = this.translator.get(
      "client_experience_dialog_confirmation_body_text"
    );
    this.alertDialogSuccessful = this.translator.get("Successful_operation");
    this.alertDialogFailed = this.translator.get("Failed_operation");
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  //If the name of 'iData' is changed it has necessary to change de string of the clientBoxConfirmDialog because they have a string format with this variable
  showConfirm(iData, typeData) {
    if (this.dialogService) {
      switch (typeData) {
        case "exp":
          //Mensaje de confirmacion del añadido de experiencia
          this.dialogService.confirm(
            this.clientExperienceConfirmDialogTitle,
            this.clientExperienceConfirmDialogTextBody.replace(
              "${expName}",
              iData.name
            )
          );
          this.dialogService.dialogRef.afterClosed().subscribe((result) => {
            if (result) {
              //Preparacion de la query
              var service = "experiences";
              var entity = "clientExperience";
              var av = {
                id_client: this.clientDetails.getDataValue("id").value,
                id_experience: iData.id,
                paymentdate: formatDate(Date.now(), "yyyy-MM-dd", this.locale),
                amountpaid: iData.price,
              };

              var sqltypes = {
                id_client: SQLTypes.NUMERIC,
                id_experience: SQLTypes.INTEGER,
                paymentdate: SQLTypes.DATE,
                amountpaid: SQLTypes.NUMERIC,
              };

              this.insert(service, entity, av, sqltypes);
            } else {
              // TODO:Comprobar si ontimize ya muestra error al salir mal la query
            }
          });
          break;

        case "box":
          //Mensaje de confirmacion del añadido del paquete
          this.dialogService.confirm(
            this.clientBoxConfirmDialogTitle,
            this.clientBoxConfirmDialogTextBody.replace(
              "${expBoxName}",
              iData.name
            )
          );
          this.dialogService.dialogRef.afterClosed().subscribe((result) => {
            if (result) {
              //Preparacion de la query
              var service = "experienceboxes";
              var entity = "clientExperienceBox";
              var av = {
                idclient: this.clientDetails.getDataValue("id").value,
                idbox: iData.id,
                paymentdate: formatDate(Date.now(), "yyyy-MM-dd", this.locale),
                amountpaid: iData.price,
              };

              var sqltypes = {
                idclient: SQLTypes.NUMERIC,
                idbox: SQLTypes.INTEGER,
                paymentdate: SQLTypes.DATE,
                amountpaid: SQLTypes.NUMERIC,
              };

              this.insert(service, entity, av, sqltypes);
            } else {
              // TODO:Comprobar si ontimize ya muestra error al salir mal la query
            }
          });
          break;

        case "updateAssistanceDate":
          //Mensaje de confirmacion del añadido de experiencia
          this.dialogService.confirm(
            "¿Asignar Fecha de Experiencia?",
            "Asignar fecha de disfrute de la experiencia"
          );
          this.dialogService.dialogRef.afterClosed().subscribe((result) => {
            if (result) {
              //Preparacion de la query
              var service = "experiences";
              var entity = "clientExperience";
              var av = {
                assistance_date:
                  this.calAssistance.getFieldValue("calendarAssistance"),
                assistance: true,
              };
              var kv = {
                id: this.experienceRowData.relation_id
              };

              var sqltypes = {
                assistance_date: SQLTypes.DATE,
              };

              this.update(service, entity, kv, av, sqltypes);
            } else {
              // TODO:Comprobar si ontimize ya muestra error al salir mal la query
            }
          });
          break;
        default:
          break;
      }
    }
  }
  insert(service: string, entity: string, av: Object = {}, sqltypes?: object) {
    this.service = this.injector.get(OntimizeService);
    const conf = this.service.getDefaultServiceConfiguration(service);
    this.service.configureService(conf);

    this.service.insert(av, entity, sqltypes).subscribe((resp) => {
      if (resp.code === 0) {
        if (service == "experiences") {
          this.closeModal("custom-modal-0");
          this.expTable.reloadData();
        } else if (service == "experienceboxes") {
          this.closeModal("custom-modal-1");
          this.expBoxTable.reloadData();
        }
        alert(this.alertDialogSuccessful);
      } else {
        alert(this.alertDialogFailed);
      }
    });
  }

  update(
    service: string,
    entity: string,
    kv: Object = {},
    av: Object = {},
    sqltypes?: object
  ) {
    this.service = this.injector.get(OntimizeService);
    const conf = this.service.getDefaultServiceConfiguration(service);
    this.service.configureService(conf);

    this.service.update(kv, av, entity, sqltypes).subscribe((resp) => {
      if (resp.code === 0) {
        this.closeModal("custom-modal-calendar");
        this.expTable.reloadData();

        alert(this.alertDialogSuccessful);
      } else {
        alert(this.alertDialogFailed);
      }
    });
  }


  asignDataToExperience() {
    this.experienceRowData = this.expTable.getSelectedItems()[0];
    this.experienceName=this.experienceRowData.exp_name;
    this.openModal("custom-modal-calendar");
  }

}

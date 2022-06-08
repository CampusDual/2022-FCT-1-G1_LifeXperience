import {
  Component,
  Inject,
  Injector,
  LOCALE_ID,
  OnInit,
  ViewChild,
} from "@angular/core";
import {
  DialogService,
  OFormComponent,
  OGridComponent,
  OntimizeService,
  OTableComponent,
  OTranslateService,
  SQLTypes,
} from "ontimize-web-ngx";
import { ModalService } from "../../ui-elements/ui-modal-window";

@Component({
  selector: "app-experience-boxes-detail",
  templateUrl: "./experience-boxes-detail.component.html",
  styleUrls: ["./experience-boxes-detail.component.css"],
})
export class ExperienceBoxesDetailComponent implements OnInit {
  @ViewChild("experienceBoxForm", { static: false })
  expBoxDetailForm: OFormComponent;

  @ViewChild("experienceOfBoxTable", { static: false })
  expOfexpBoxTable: OTableComponent;

  @ViewChild("experienceBoxGrid", { static: false })
  expThatTheyAreNotInTheBoxGrid: OGridComponent;

  private experienceExperienceBoxConfirmDialogTitle:string;
  private experienceExperienceBoxConfirmDialogBody:string;
  private alertDialogSuccessful: string;
  private alertDialogFailed: string;
  protected service: OntimizeService;

  constructor(
    private modalService: ModalService,
    private injector: Injector,
    private dialogService: DialogService,
    @Inject(LOCALE_ID) private locale: string,
    private translator: OTranslateService
  ) {}

  ngOnInit() {
    this.experienceExperienceBoxConfirmDialogTitle = this.translator.get("experience_experience_box_dialog_confirmation_title");
    this.experienceExperienceBoxConfirmDialogBody = this.translator.get("experience_experience_box_dialog_confirmation_body");
    this.alertDialogSuccessful = this.translator.get("Successful_operation");
    this.alertDialogFailed = this.translator.get("Failed_operation");

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
      this.dialogService.confirm(
        this.experienceExperienceBoxConfirmDialogTitle,
        this.experienceExperienceBoxConfirmDialogBody.replace(
          "${expName}",
          experienceData.name
        )
      );
      this.dialogService.dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          //Preparacion de la query
          var service = "experiences";
          var entity = "experienceBoxExperience";
          var av = {
            idpack: this.expBoxDetailForm.getDataValue("id").value,
            idexp: experienceData.id,
          };

          var sqltypes = {
            idclient: SQLTypes.INTEGER,
            idbox: SQLTypes.INTEGER,
          };

          this.insert(service, entity, av, sqltypes);
        } else {
          // TODO:Comprobar si ontimize ya muestra error al salir mal la query
        }
      });
    }
  }

  insert(service: string, entity: string, av: Object = {}, sqltypes?: object) {
    this.service = this.injector.get(OntimizeService);
    const conf = this.service.getDefaultServiceConfiguration(service);
    this.service.configureService(conf);

    this.service.insert(av, entity, sqltypes).subscribe((resp) => {
      if (resp.code === 0) {
        this.expOfexpBoxTable.reloadData();
        this.closeModal("custom-modal-0");
        this.expThatTheyAreNotInTheBoxGrid.reloadData()
        
        
        alert(this.alertDialogSuccessful);
      } else {
        alert(this.alertDialogFailed);
      }
    });
  }
}

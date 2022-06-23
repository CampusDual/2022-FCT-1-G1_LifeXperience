import {
  Component,
  Inject,
  Injector,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";
import { OntimizeService } from "ontimize-web-ngx";
import { ModalService } from "src/app/main/ui-elements/jw-modal-window";

@Component({
  selector: "portal-web",
  styleUrls: ["./portal-web.component.scss"],
  templateUrl: "./portal-web.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class PortalWebComponent implements OnInit {
  private service: OntimizeService;
  private allExperiencesList;
  private showedExperiencesList;

  private paginatorSize = 3;
  private numberOfShowedItems = 6;
  private numberOfPages;
  private actualPage = 0;

  private modalExperienceData = [];

  //Evento para comunicar el paginador con las lista
  onActualPageChange(newPage:number) {
    this.actualPage = newPage;
    this.loadExperienceOfAPage(this.actualPage);
  }

  ngOnInit(): void {
    console.log("Constructor del nonPortalUser");
    this.getExperiences();
  }

  constructor(private injector: Injector, private modalService: ModalService) {}


  getExperiences() {
    this.service = this.injector.get(OntimizeService);
    const conf = this.service.getDefaultServiceConfiguration("portalService");
    this.service.configureService(conf);

    const columns = ["associate_image", "name", "description", "price"];

    this.service.query(null, columns, "experience").subscribe((resp) => {
      if (resp.code === 0) {
        this.allExperiencesList = resp.data;
        this.numberOfPages = Math.ceil((this.allExperiencesList.length + 0.0) / this.numberOfShowedItems);
      //  this.paginatorNumber = new Array<number>(this.getPaginatorSizeForAArray(this.defaultPaginatorSize,this.allExperiencesList));

        this.loadExperienceOfAPage(this.actualPage)
      //  this.changePaginatorNumbers(this.actualPage,this.numberOfPages,this.paginatorNumber)
      } else {
        alert("Impossible to query data!");
        throw new Error();
      }
    });
  }

  loadExperienceOfAPage(targetPage: number) {
    var firstShowedElement;
    var lastShowedElement;

    //Es necesario redondear hacia arriba
    firstShowedElement = targetPage *this.numberOfShowedItems;
    lastShowedElement = firstShowedElement + this.numberOfShowedItems;

    if(targetPage == this.numberOfPages - 1){
      lastShowedElement = this.allExperiencesList.length
    }

    this.getExperienceOfAllExperienceList(firstShowedElement,lastShowedElement);
    
  }

  getExperienceOfAllExperienceList(firstElement: number, lastElement: number) {
    this.showedExperiencesList = this.allExperiencesList.slice(
      firstElement,
      lastElement
    );
  }
  

  loadExperienceDetails(experienceData) {
    this.modalExperienceData = experienceData;
    this.openModal("custom-modal-1");
  }

  prepareImg(base64Img: string) {
    return "data:image/png;base64," + base64Img;
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}

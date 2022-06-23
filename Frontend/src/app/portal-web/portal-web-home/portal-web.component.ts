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
  private allExperiencesBoxesList;
  private showedExperiencesList;
  private showedExperiencesBoxesList;

  private numberOfPageOfExperienceList;
  private numberOfPageOfExperienceBoxesList;

  private paginatorSize = 3;
  private numberOfShowedItems = 6;
  private actualPageOfExperienceList = 0;
  private actualPageOfExperienceBoxesList = 0;

  private modalExperienceData = [];

  //Evento para comunicar el paginador con las lista
  //TODO:Hacer otro evento para las cajas
  onActualPageOfExperienceListChange(newPage:number) {
    this.actualPageOfExperienceList = newPage;
    this.showedExperiencesList = this.getElementsOfAPage(this.actualPageOfExperienceList,this.allExperiencesList,this.numberOfShowedItems,this.numberOfPageOfExperienceList);
  }

  onActualPageOfExperienceBoxesListChange(newPage:number) {
    this.actualPageOfExperienceBoxesList = newPage;
    this.showedExperiencesBoxesList = this.getElementsOfAPage(this.actualPageOfExperienceBoxesList,this.allExperiencesBoxesList,this.numberOfShowedItems,this.numberOfPageOfExperienceBoxesList);
  }

  ngOnInit(): void {
    this.getExperiences();
    this.getExperiencesBoxes();
  }

  constructor(private injector: Injector, private modalService: ModalService) {}


  getExperiences() {
    this.service = this.injector.get(OntimizeService);
    const conf = this.service.getDefaultServiceConfiguration("portalService");
    this.service.configureService(conf);

    const columns = ['associate_image','name','description','price', 'minage', 'maxage'];

    this.service.query(null, columns, "experience").subscribe((resp) => {
      if (resp.code === 0) {
        this.allExperiencesList = resp.data;

        //Es necesario redondear hacia arriba
        this.numberOfPageOfExperienceList = Math.ceil((this.allExperiencesList.length + 0.0) / this.numberOfShowedItems);
        this.showedExperiencesList = this.getElementsOfAPage(this.actualPageOfExperienceList,this.allExperiencesList,this.numberOfShowedItems,this.numberOfPageOfExperienceList);

      } else {
        alert("Impossible to query data!");
        throw new Error();
      }
    });
  }

  getExperiencesBoxes() {
    this.service = this.injector.get(OntimizeService);
    const conf = this.service.getDefaultServiceConfiguration("portalService");
    this.service.configureService(conf);

    const columns = ['associate_image','name','description','price'];

    this.service.query(null, columns, "experiencebox").subscribe((resp) => {
      if (resp.code === 0) {
        this.allExperiencesBoxesList = resp.data;

        //Es necesario redondear hacia arriba
        this.numberOfPageOfExperienceBoxesList = Math.ceil((this.allExperiencesBoxesList.length + 0.0) / this.numberOfShowedItems);

        this.showedExperiencesBoxesList = this.getElementsOfAPage(this.actualPageOfExperienceBoxesList,this.allExperiencesBoxesList,this.numberOfShowedItems,this.numberOfPageOfExperienceBoxesList);
      } else {
        alert("Impossible to query data!");
        throw new Error();
      }
    });
  }

  getElementsOfAPage(targetPage: number,targetList:Array<any>,numberOfShowedItems,numberOfPages:number) {
    var firstShowedElement;
    var lastShowedElement;
    
    firstShowedElement = targetPage * numberOfShowedItems;
    lastShowedElement = firstShowedElement + numberOfShowedItems;

    if(targetPage == numberOfPages - 1){
      lastShowedElement = targetList.length
    }
    return this.getElementsOfAList(targetList,firstShowedElement,lastShowedElement);
    
  }



  loadExperienceDetails(experienceData) {
    this.modalExperienceData = experienceData;
    this.openModal("custom-modal-1");
  }


  //Metodo generico para devolver listas
  getElementsOfAList(targetList:Array<any>,firstElement: number, lastElement: number){
    return targetList.slice(
      firstElement,
      lastElement
    );
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

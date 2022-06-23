import { Component, Inject, Injector, OnInit, ViewEncapsulation } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';
import { ModalService } from 'src/app/main/ui-elements/jw-modal-window';

@Component({
  selector: 'portal-web',
  styleUrls: ['./portal-web.component.scss'],
  templateUrl: './portal-web.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PortalWebComponent implements OnInit {
  private service: OntimizeService;
  private experienceList;
  private modalExperienceData = [];

  ngOnInit(): void {
    console.log("Constructor del nonPortalUser");
    this.getExperiences();
  }

  constructor(
    private injector: Injector,
    private modalService: ModalService
  ){}
  getExperiences() {
    this.service = this.injector.get(OntimizeService);
    const conf = this.service.getDefaultServiceConfiguration("portalService");
    this.service.configureService(conf);

    const columns = ['associate_image','name','description','price', 'minage', 'maxage'];

    this.service.query(null, columns, 'experience').subscribe(resp => {
      if (resp.code === 0) {
        this.experienceList = resp.data
      } else {
        alert('Impossible to query data!');
        throw new Error
      }
    });
  }


  loadExperienceDetails(experienceData){
    this.modalExperienceData = experienceData;
    this.openModal("custom-modal-1");
  }

  prepareImg(base64Img:string){
    return "data:image/png;base64," + base64Img
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}

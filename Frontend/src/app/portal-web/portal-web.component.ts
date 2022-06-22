import { Component, Inject, Injector, OnInit, ViewEncapsulation } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'portal-web',
  styleUrls: ['./portal-web.component.scss'],
  templateUrl: './portal-web.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PortalWebComponent implements OnInit {
  private service: OntimizeService;
  private experienceList;

  ngOnInit(): void {
    console.log("Constructor del nonPortalUser");
    this.getExperiences();
  }

  constructor(
    private injector: Injector,
  ){}

  getExperiences() {
    this.service = this.injector.get(OntimizeService);
    const conf = this.service.getDefaultServiceConfiguration("portalService");
    this.service.configureService(conf);

    const columns = ['associate_image','name','description'];

    this.service.query(null, columns, 'experience').subscribe(resp => {
      if (resp.code === 0) {
        this.experienceList = resp.data
      } else {
        alert('Impossible to query data!');
        throw new Error
      }
    });
  }


  prepareImg(base64Img:string){
    return "data:image/png;base64," + base64Img
  }

}
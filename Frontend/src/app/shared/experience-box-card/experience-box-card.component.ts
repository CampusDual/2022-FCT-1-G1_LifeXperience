import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-account-card',
  templateUrl: './experience-box-card.component.html',
  styleUrls: ['./experience-box-card.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.home-card]': 'true'
  }
})
export class ExperienceBoxCardComponent implements OnInit {
  experienceBoxAmount: any;

  constructor(
    private ontimizeService: OntimizeService,
    private cd: ChangeDetectorRef
  )  {
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('experience-boxes'));
    this.ontimizeService.query(void 0, ['EXPERIENCEBOXID'], 'experienceBox').subscribe(
      res => {
        if (res && res.data.length) {
          this.experienceBoxAmount = res.data.length;
        }
      },
      err => console.log(err),
      () => this.cd.detectChanges()
    );
  }

  ngOnInit() {
  }

}

import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';
import { DiscreteBarChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-branch-card',
  templateUrl: './experience-box-card.component.html',
  styleUrls: ['./experience-box-card.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.home-card]': 'true'
  }
})
export class ExperienceBoxCardComponent implements OnInit {

  public experiencesBoxesAmount: number;
  public chartParameters: DiscreteBarChartConfiguration;
  protected graphData: Array<Object>;


  constructor(
    private ontimizeService: OntimizeService,
    private cd: ChangeDetectorRef
  ) {
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('experienceboxes'));
    this.ontimizeService.query(void 0, ['id'], 'experiencebox').subscribe(
      res => {
        if (res && res.data.length) {
          this.experiencesBoxesAmount = res.data.length;
        }
      },
      err => console.log(err),
      () => this.cd.detectChanges()
    );
  }

  ngOnInit() {
  }

}

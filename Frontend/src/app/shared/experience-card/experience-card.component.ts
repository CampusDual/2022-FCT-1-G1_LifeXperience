import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';
import { DiscreteBarChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-branch-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.home-card]': 'true'
  }
})
export class ExperienceCardComponent implements OnInit {

  public experiencesAmount: number;
  public chartParameters: DiscreteBarChartConfiguration;
  protected graphData: Array<Object>;


  constructor(
    private ontimizeService: OntimizeService,
    private cd: ChangeDetectorRef
  ) {
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('experiences'));
    this.ontimizeService.query(void 0, ['id'], 'experience').subscribe(
      res => {
        if (res && res.data.length) {
          this.experiencesAmount = res.data.length;
        }
      },
      err => console.log(err),
      () => this.cd.detectChanges()
    );
  }

  ngOnInit() {
  }

}

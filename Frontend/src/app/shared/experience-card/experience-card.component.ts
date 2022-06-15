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

  public chartParameters: DiscreteBarChartConfiguration;
  protected graphData: Array<Object>;

  constructor(
    private ontimizeService: OntimizeService,
    private cd: ChangeDetectorRef
  ) {
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('experiences'));
    this.ontimizeService.query(void 0, ['total'], 'lastThreeMonthsGainExperiences').subscribe(
      res => {
        if (res && res.data.length && res.code === 0) {
          this.adaptResult(res.data);
        }
      },
      err => console.log(err),
      () => this.cd.detectChanges()
    );

    this.chartParameters = new DiscreteBarChartConfiguration();
    this.chartParameters.height = 130;
    this.chartParameters.showLegend = false;
    this.chartParameters.y1Axis.showMaxMin = false;
    this.chartParameters.x1Axis.showMaxMin = false;
  }

  adaptResult(data: any) {
    if (data && data.length) {
      // chart data
      this.graphData = [
        {
          'key': 'Discrete serie',
          'values': data
        }
      ]
    }
  }

  ngOnInit() {
  }

}


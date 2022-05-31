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
        if (res && res.data.length && res.code === 0) {
          this.experiencesAmount = res.data.length;
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
      let values = this.processValues(data);
      // chart data
      this.graphData = [
        {
          'key': 'Discrete serie',
          'values': values
        }
      ]
    }
  }

  processValues(data: any) {
    let values = [];
    let minorValue = 0;
    let majorValue = 0;

    let lowerCrit = {
      'x': 'Under',
      'y': minorValue
    }

    let upperCrit = {
      'x': 'Over',
      'y': majorValue
    }

    values.push(2);
    values.push(2);
    return values;
  }


  ngOnInit() {
  }

}

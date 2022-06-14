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

  experiencesAmount: any;
  public chartParameters: DiscreteBarChartConfiguration;
  protected graphData: Array<Object>;
  // protected criteriaValue = 5000;



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

    data.forEach((item: any, index: number) => {
      // if (item['BALANCE'] >= this.criteriaValue){
      //   majorValue++;
      // }else{
      //   minorValue++;
      // }
    });

    let lowerCrit = {
      'x': 'Abril',
      'y': 7
    }

    let upperCrit = {
      'x': 'Mayo',
      'y': 5
    }

    let actualMonth = {
      'x': 'Junio',
      'y': 6
    }

    values.push(lowerCrit);
    values.push(upperCrit);
    values.push(actualMonth);
    return values;
  }

  ngOnInit() {
  }

}


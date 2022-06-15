import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';
import { DiscreteBarChartConfiguration } from 'ontimize-web-ngx-charts';
import { D3LocaleService } from "src/app/shared/d3-locale/d3Locale.service";

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

  private d3Locale;
  experiencesAmount: any;
  experiencesGainAmount: any;
  public chartParameters: DiscreteBarChartConfiguration;
  protected graphData: Array<Object>;

  constructor(
    private d3LocaleService: D3LocaleService,
    private ontimizeService: OntimizeService,
    private cd: ChangeDetectorRef
  ) {
    this.d3Locale = this.d3LocaleService.getD3LocaleConfiguration();
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

    this.ontimizeService.query(void 0, ['id'], 'experience').subscribe(
      res => {
        if (res && res.data.length && res.code === 0) {
          this.experiencesAmount = res.data.length;
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
    const mes= new Date().getMonth()+1;

    data.forEach((item: any, index: number) => {

      for (let i = mes-2; i <= mes; i++) {
        if (item['x'] == i ) {
          values.push({
            'x': item['x'],
            'y': item['y']
          })
        }else if(item['x'] != i && !values.includes(item['x'])){
          values.push({
            'x': i,
            'y': 0
          })
        }
      }

      console.log(item['x']);
      item['x'] = this.d3Locale['shortMonths'][item['x'] - 1];
      console.log(item['x']);
    });

    // let thirdMonth = {
    //   'x': 'Under',
    //   'y': 10
    // }

    // let lastMonth = {
    //   'x': 'Over',
    //   'y': 80
    // }

    // let actualMonth = {
    //   'x': 'Over2',
    //   'y': 50
    // }

    // values.push(thirdMonth);
    // values.push(lastMonth);
    // values.push(actualMonth);
    return values;
  }

  ngOnInit() {
  }

}


import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandlestickChartConfiguration, DataAdapterUtils, LineChartConfiguration, OChartComponent, PieChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    // nothing to do
  }

  navigate() {
    this.router.navigate(['../', 'login'], { relativeTo: this.actRoute });
  }

  goToDocumentation() {
    window.open("https://ontimizeweb.github.io/docs/", "_blank");
  }

  @ViewChild("candlestick", { static: false }) candlestick: OChartComponent;

  chartParameters: LineChartConfiguration;

  ngAfterViewInit() {
    let data = [
      { "date": 1511111115707, "open": 145.11, "high": 146.15, "low": 144.73, "close": 146.06, },
      { "date": 1511111115708, "open": 145.99, "high": 146.37, "low": 145.34, "close": 145.73 },
      { "date": 1511111115709, "open": 145.97, "high": 146.61, "low": 145.67, "close": 146.37 },
      { "date": 1511111115712, "open": 145.85, "high": 146.11, "low": 145.43, "close": 145.97 },
      { "date": 1511111115713, "open": 145.71, "high": 145.91, "low": 144.98, "close": 145.55 },
      { "date": 1511111115714, "open": 145.87, "high": 146.32, "low": 145.64, "close": 145.92 },
      { "date": 1511111115715, "open": 146.73, "high": 147.09, "low": 145.97, "close": 147.08 },
      { "date": 1511111115716, "open": 147.04, "high": 147.15, "low": 146.61, "close": 147.07 },
      { "date": 1511111115719, "open": 146.89, "high": 147.07, "low": 146.43, "close": 146.97 },
      { "date": 1511111115720, "open": 146.29, "high": 147.21, "low": 146.2, "close": 147.07 },
      { "date": 1511111115721, "open": 146.77, "high": 147.28, "low": 146.61, "close": 147.05 },
      { "date": 1511111115722, "open": 147.7, "high": 148.42, "low": 147.15, "close": 148 },
      { "date": 1511111115723, "open": 147.97, "high": 148.49, "low": 147.43, "close": 148.33 },
      { "date": 1511111115727, "open": 148.33, "high": 149.13, "low": 147.98, "close": 149.1 },
      { "date": 1511111115728, "open": 149.13, "high": 149.5, "low": 148.86, "close": 149.37 },
      { "date": 1511111115729, "open": 149.15, "high": 150.14, "low": 149.01, "close": 149.41 }
    ];

    this.chartParameters = new LineChartConfiguration();



      this.chartParameters.xAxis='date';
      this.chartParameters.yAxis =['open','close','low'];
      this.chartParameters.isArea = [true];
      this.chartParameters.interactive = false;
      this.chartParameters.useInteractiveGuideline = false;

    DataAdapterUtils.createDataAdapter(this.chartParameters);
    this.candlestick.setDataArray(DataAdapterUtils.adapter.adaptResult(data));
  }
  

}

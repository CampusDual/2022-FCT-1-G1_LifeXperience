import { Component, Injector, OnInit, ViewChild } from "@angular/core";
import { OntimizeService } from "ontimize-web-ngx";
import {
  DataAdapterUtils,
  DiscreteBarChartConfiguration,
  OChartComponent,
} from "ontimize-web-ngx-charts";
import { D3LocaleService } from "src/app/shared/d3-locale/d3Locale.service";

@Component({
  selector: 'app-statistics-home',
  templateUrl: './statistics-home.component.html',
  styleUrls: ['./statistics-home.component.css']
})
export class StatisticsHomeComponent implements OnInit {
  private d3Locale;
  protected service: OntimizeService;
 
  @ViewChild("discreteBarChartTotalAmountsOfTheMonthsOfAYear", { static: false }) discreteBarChartdiscreteBarChartTotalAmountsOfTheMonthsOfAYear: OChartComponent;

  chartParameters: DiscreteBarChartConfiguration;


  constructor(
    private d3LocaleService: D3LocaleService,
    private injector: Injector
  ) {
    this.d3Locale = this.d3LocaleService.getD3LocaleConfiguration();
   }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.chartParameters = new DiscreteBarChartConfiguration();
    this.chartParameters.xAxis = "month";
    this.chartParameters.yAxis = ["total"];

    DataAdapterUtils.createDataAdapter(this.chartParameters);

    this.getExpPayments();
  }
  getExpPayments() {
    this.service = this.injector.get(OntimizeService);
    const conf = this.service.getDefaultServiceConfiguration("experiences");
    this.service.configureService(conf);

    this.service
      .query(
        void 0,
        ["total"],
        "clientExperienceTotalAmountsOfTheMonthsOfAYear"
      )
      .subscribe((resp) => {
        if (resp.code === 0) {

          this.adaptTotalAmount(resp.data);

          this.discreteBarChartdiscreteBarChartTotalAmountsOfTheMonthsOfAYear.setDataArray(
            DataAdapterUtils.adapter.adaptResult(resp.data)
          );
        } else {
          console.log("Error");
        }
      });
  }

  adaptTotalAmount(data) {
    if (data && data.length) {
      data.forEach((item: any, index: number) => {
        item['month'] = this.d3Locale['shortMonths'][item['month'] - 1]
      });
    }
  }

}

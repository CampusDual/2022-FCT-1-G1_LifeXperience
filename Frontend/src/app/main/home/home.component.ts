import { Component, Injector, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { OntimizeService, SQLTypes } from "ontimize-web-ngx";
import {
  CandlestickChartConfiguration,
  DataAdapterUtils,
  DiscreteBarChartConfiguration,
  LineChartConfiguration,
  OChartComponent,
  PieChartConfiguration,
} from "ontimize-web-ngx-charts";
import { D3LocaleService } from "src/app/shared/d3-locale/d3Locale.service";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  protected service: OntimizeService;
  protected graphData: Array<Object>;
  private d3Locale;
  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private injector: Injector,
    private d3LocaleService: D3LocaleService
  ) {
    this.d3Locale = this.d3LocaleService.getD3LocaleConfiguration();
  }

  ngOnInit() {
  }

  navigate() {
    this.router.navigate(["../", "login"], { relativeTo: this.actRoute });
  }

  goToDocumentation() {
    window.open("https://ontimizeweb.github.io/docs/", "_blank");
  }

  @ViewChild("candlestick", { static: false }) candlestick: OChartComponent;

  chartParameters: DiscreteBarChartConfiguration;

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

          this.candlestick.setDataArray(
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

import { Component, Injector, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { OntimizeService, SQLTypes } from "ontimize-web-ngx";
import {
  CandlestickChartConfiguration,
  DataAdapterUtils,
  LineChartConfiguration,
  OChartComponent,
  PieChartConfiguration,
} from "ontimize-web-ngx-charts";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  protected service: OntimizeService;
  protected graphData: Array<Object>;

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private injector: Injector
  ) {}

  ngOnInit() {
    // nothing to do
  }

  navigate() {
    this.router.navigate(["../", "login"], { relativeTo: this.actRoute });
  }

  goToDocumentation() {
    window.open("https://ontimizeweb.github.io/docs/", "_blank");
  }

  @ViewChild("candlestick", { static: false }) candlestick: OChartComponent;

  chartParameters: LineChartConfiguration;

  ngAfterViewInit() {
    this.chartParameters = new LineChartConfiguration();

    this.chartParameters.xAxis = "paymentdate";
    this.chartParameters.xDataType = "time";
    this.chartParameters.yAxis = ["amountpaid"];
    this.chartParameters.isArea = [true];
    this.chartParameters.interactive = false;
    this.chartParameters.useInteractiveGuideline = false;

    DataAdapterUtils.createDataAdapter(this.chartParameters);

    this.getExpPayments();
  }

  getExpPayments() {
    this.service = this.injector.get(OntimizeService);
    const conf = this.service.getDefaultServiceConfiguration("experiences");
    this.service.configureService(conf);

    this.service
      .query(void 0, ["amountpaid", "paymentdate"], "clientExperienceDetails")
      .subscribe((resp) => {
        if (resp.code === 0) {
          this.candlestick.setDataArray(
            DataAdapterUtils.adapter.adaptResult(resp.data)
          );
        } else {
          console.log("Error");
        }
      });
  }

  adaptResult(data: any) {
    if (data && data.length) {
      data.forEach((item: any, index: number) => {
        var a = item;
        console.log(a);
      });
    }
  }
}

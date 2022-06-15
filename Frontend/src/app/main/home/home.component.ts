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
  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    // nothing to do
  }

  navigate() {
    this.router.navigate(["../", "login"], { relativeTo: this.actRoute });
  }

  goToDocumentation() {
    window.open("https://ontimizeweb.github.io/docs/", "_blank");
  }

}

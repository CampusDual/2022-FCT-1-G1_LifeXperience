import { ChangeDetectorRef, Component, Injector, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';
import { DiscreteBarChartConfiguration, DiscreteBarDataAdapter, OChartComponent } from 'ontimize-web-ngx-charts';
import { D3LocaleService } from "src/app/shared/d3-locale/d3Locale.service";
@Component({
  selector: 'app-branch-card',
  templateUrl: './experience-box-card.component.html',
  styleUrls: ['./experience-box-card.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.home-card]': 'true'
  }
})
export class ExperienceBoxCardComponent implements OnInit {Ç
  private d3Locale;
  protected service: OntimizeService;
  private totalSum = 0;
  public experiencesBoxesAmount: number;
  public chartParameters: DiscreteBarChartConfiguration;
  protected graphData: Array<Object>;
  @ViewChild("discreteBarChartLast3MonthsBoxes", { static: false })
  discreteBarChartLast3MonthsBoxes: OChartComponent;
  private chartAdapterLast3MonthsBoxExpBoughtAdapter: DiscreteBarDataAdapter;
  constructor(
    private d3LocaleService: D3LocaleService,
    private injector: Injector,
    private ontimizeService: OntimizeService,
    private cd: ChangeDetectorRef
  ) {
    this.d3Locale = this.d3LocaleService.getD3LocaleConfiguration();
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('experienceboxes'));
    this.ontimizeService.query(void 0, ['id'], 'experiencebox').subscribe(
      res => {
        if (res && res.data.length) {
          this.experiencesBoxesAmount = res.data.length;
        }
      },
      err => console.log(err),
      () => this.cd.detectChanges()
    );

    this.chartParameters = new DiscreteBarChartConfiguration();
    this.chartParameters.height = 150;
    this.chartParameters.showLegend = false;
    this.chartParameters.y1Axis.showMaxMin = false;
    this.chartParameters.x1Axis.showMaxMin = false;
    var chartParametersAdapter3LastMonthsAdapter =
      new DiscreteBarChartConfiguration();
      chartParametersAdapter3LastMonthsAdapter.xAxis = "month";
      chartParametersAdapter3LastMonthsAdapter.yAxis = ["total"];
    this.chartAdapterLast3MonthsBoxExpBoughtAdapter = new DiscreteBarDataAdapter(
      chartParametersAdapter3LastMonthsAdapter
    );

    this.ontimizeService
    .query(void 0, ["total"], "clientExperienceBoxLastThreeMonthSoldBoxes")
    .subscribe((resp) => {
      if (resp.code === 0) {
        this.adaptTotalAmount(resp.data);

        this.discreteBarChartLast3MonthsBoxes.setDataArray(
          this.chartAdapterLast3MonthsBoxExpBoughtAdapter.adaptResult(resp.data)
        );
      } else {
        console.log("Error");
      }
    });
    this.ontimizeService
    .query(void 0, ["total"], "clientExperienceBoxLastThreeMonthBenefitsBoxes")
    .subscribe((resp) => {
      if (resp.code === 0) {
        this.totalSum = resp.data[0]["total"];
      } else {
        console.log("Error");
      }
    });
    // this.getLast3MonthsBoxExpBought();
    // this.getLast3MonthsBoxExpBenefits();
  }
  getLast3MonthsBoxExpBought(){
    this.ontimizeService = this.injector.get(OntimizeService);
    const conf = this.ontimizeService.getDefaultServiceConfiguration("experienceboxes");
    this.ontimizeService.configureService(conf);

    this.ontimizeService
      .query(void 0, ["total"], "clientExperienceBoxLastThreeMonthSoldBoxes")
      .subscribe((resp) => {
        if (resp.code === 0) {
          this.adaptTotalAmount(resp.data);

          this.discreteBarChartLast3MonthsBoxes.setDataArray(
            this.chartAdapterLast3MonthsBoxExpBoughtAdapter.adaptResult(resp.data)
          );
        } else {
          console.log("Error");
        }
      });

  }
  getLast3MonthsBoxExpBenefits(){
    this.ontimizeService = this.injector.get(OntimizeService);
    const conf = this.ontimizeService.getDefaultServiceConfiguration("experienceboxes");
    this.ontimizeService.configureService(conf);

    this.ontimizeService
      .query(void 0, ["total"], "clientExperienceBoxLastThreeMonthBenefitsBoxes")
      .subscribe((resp) => {
        if (resp.code === 0) {
          this.totalSum = resp.data[0]["total"];
        } else {
          console.log("Error");
        }
      });
  }
  adaptTotalAmount(data) {
    if (data && data.length) {
      data.forEach((item: any, index: number) => {
        item["month"] = this.d3Locale["shortMonths"][item["month"] - 1];
      });
    }
  }
  ngOnInit() {

  }

}

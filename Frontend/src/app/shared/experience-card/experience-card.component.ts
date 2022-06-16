import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";
import { OntimizeService } from "ontimize-web-ngx";
import { DiscreteBarChartConfiguration } from "ontimize-web-ngx-charts";
import { D3LocaleService } from "src/app/shared/d3-locale/d3Locale.service";

@Component({
  selector: "app-branch-card",
  templateUrl: "./experience-card.component.html",
  styleUrls: ["./experience-card.component.css"],
  encapsulation: ViewEncapsulation.None,
  host: {
    "[class.home-card]": "true",
  },
})
export class ExperienceCardComponent implements OnInit {
  private d3Locale;
  experiencesAmount: any;
  public experiencesGainAmount= 0;
  public chartParameters: DiscreteBarChartConfiguration;
  protected graphData: Array<Object>;

  constructor(
    private d3LocaleService: D3LocaleService,
    private ontimizeService: OntimizeService,
    private cd: ChangeDetectorRef
  ) {
    this.d3Locale = this.d3LocaleService.getD3LocaleConfiguration();
    this.ontimizeService.configureService(
      this.ontimizeService.getDefaultServiceConfiguration("experiences")
    );
    this.ontimizeService
      .query(void 0, ["total"], "lastThreeMonthsGainExperiences")
      .subscribe(
        (res) => {
          if (res && res.data.length && res.code === 0) {
            this.adaptResult(res.data);
          }
        },
        (err) => console.log(err),
        () => this.cd.detectChanges()
      );

    this.ontimizeService.query(void 0, ["id"], "experience").subscribe(
      (res) => {
        if (res && res.data.length && res.code === 0) {
          this.experiencesAmount = res.data.length;
        }
      },
      (err) => console.log(err),
      () => this.cd.detectChanges()
    );

    this.chartParameters = new DiscreteBarChartConfiguration();
    this.chartParameters.height = 150;
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
          key: "Discrete serie",
          values: values,
        },
      ];
    }
  }

  processValues(data: any) {
    let values = [];
    const mes = new Date().getMonth() + 1;

    //Bucle que recorre lo meses
    for (let i = mes - 2; i <= mes; i++) {
      var flag = true;

      //Bucle que recorre los datos
      for (let j = 0; j < data.length && flag; j++) {
        var item = data[j];
        //Si esta el mas lo añadimos a los nuevos valores y cambiamos al boolena para que no lo añada abajo
        if (item["x"] == i) {
          values.push({
            x: this.d3Locale["shortMonths"][item["x"] - 1],
            y: item["y"],
          });
          this.experiencesGainAmount+=item["y"];
          flag = false;
        }
      }

      //Si despues de buscar en los datos de la peticion no encontramos el mes
      //Lo añadimos a 0.
      if (flag) {
        values.push({
          x: this.d3Locale["shortMonths"][i - 1],
          y: 0,
        });
      }
    }

    data.forEach((item: any, index: number) => {
      console.log(item["x"]);
      item["x"] = this.d3Locale["shortMonths"][item["x"] - 1];
      console.log(item["x"]);
    });

    return values;
  }

  ngOnInit() {}
}

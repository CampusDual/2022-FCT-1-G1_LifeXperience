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
export class ExperienceBoxCardComponent implements OnInit {
  private d3Locale;
  boxesAmount: any;
  public boxesGainAmount= 0;
  public chartParameters: DiscreteBarChartConfiguration;
  protected graphData: Array<Object>;

  constructor(
    private d3LocaleService: D3LocaleService,
    private ontimizeService: OntimizeService,
    private cd: ChangeDetectorRef
  ) {
    this.d3Locale = this.d3LocaleService.getD3LocaleConfiguration();
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration("experienceboxes"));
    this.ontimizeService
      .query(void 0, ["total"], "clientExperienceBoxLastThreeMonthSoldBoxes")
      .subscribe(
        (res) => {
          if (res && res.data.length && res.code === 0) {
            this.adaptResult(res.data);
          }
        },
        (err) => console.log(err),
        () => this.cd.detectChanges()
      );

    this.ontimizeService.query(void 0, ["id"], "experiencebox").subscribe(
      (res) => {
        if (res && res.data.length && res.code === 0) {
          this.boxesAmount = res.data.length;
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
          this.boxesGainAmount+=item["y"];
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

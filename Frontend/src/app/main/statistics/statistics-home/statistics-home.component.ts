import { Component, Injector, OnInit, ViewChild } from "@angular/core";
import { OntimizeService } from "ontimize-web-ngx";
import {
  DataAdapterUtils,
  DiscreteBarChartConfiguration,
  DiscreteBarDataAdapter,
  MultiBarChartConfiguration,
  MultiBarDataAdapter,
  OChartComponent,
} from "ontimize-web-ngx-charts";
import { D3LocaleService } from "src/app/shared/d3-locale/d3Locale.service";

@Component({
  selector: "app-statistics-home",
  templateUrl: "./statistics-home.component.html",
  styleUrls: ["./statistics-home.component.css"],
})
export class StatisticsHomeComponent implements OnInit {
  private d3Locale;
  protected service: OntimizeService;

  @ViewChild("discreteBarChartTotalAmountsOfTheMonthsOfAYear", {
    static: false,
  })
  discreteBarChartdiscreteBarChartTotalAmountsOfTheMonthsOfAYear: OChartComponent;
  @ViewChild("discreteBarChartClientBox", { static: false })
  discreteBarChartClientBox: OChartComponent;
  @ViewChild("multiBarChartExpAndBoxTotalMonthComparation", { static: false })
  multiBarChartExpAndBoxTotalMonthComparation: OChartComponent;

  private chartAdapterTotalMonthAdapter: DiscreteBarDataAdapter;
  private chartAdapterCombinedExpAndBoxTotalMonthAdapter: MultiBarDataAdapter;

  constructor(
    private d3LocaleService: D3LocaleService,
    private injector: Injector
  ) {
    this.d3Locale = this.d3LocaleService.getD3LocaleConfiguration();
  }

  ngOnInit() { }

  ngAfterViewInit() {
    var chartParametersAdapterTotalMonthAdapter =
      new DiscreteBarChartConfiguration();
    chartParametersAdapterTotalMonthAdapter.xAxis = "month";
    chartParametersAdapterTotalMonthAdapter.yAxis = ["total"];
    this.chartAdapterTotalMonthAdapter = new DiscreteBarDataAdapter(
      chartParametersAdapterTotalMonthAdapter
    );

    var chartParametersAdapterCombinedExpAndBoxTotalMonthAdapter =
      new MultiBarChartConfiguration();
    chartParametersAdapterCombinedExpAndBoxTotalMonthAdapter.xAxis = "month";
    chartParametersAdapterCombinedExpAndBoxTotalMonthAdapter.yAxis = [
      "totalExp",
      "totalExpBox",
    ];
    //El siguiente parametro hace que se muestren todo las labels del eje x, en este caso deberia de mostrar todos los meses
    chartParametersAdapterCombinedExpAndBoxTotalMonthAdapter.reduceXTicks =
      false;
    this.chartAdapterCombinedExpAndBoxTotalMonthAdapter =
      new MultiBarDataAdapter(
        chartParametersAdapterCombinedExpAndBoxTotalMonthAdapter
      );

    this.getExpPayments();
    this.getExpBoxPayments();
    this.getComparation();
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
            this.chartAdapterTotalMonthAdapter.adaptResult(resp.data)
          );
        } else {
          console.log("Error");
        }
      });
  }
  getExpBoxPayments() {
    this.service = this.injector.get(OntimizeService);
    const conf = this.service.getDefaultServiceConfiguration("experienceboxes");
    this.service.configureService(conf);

    this.service
      .query(void 0, ["total"], "clientExperienceBoxTotalAmounts")
      .subscribe((resp) => {
        if (resp.code === 0) {
          this.adaptTotalAmount(resp.data);

          this.discreteBarChartClientBox.setDataArray(
            this.chartAdapterTotalMonthAdapter.adaptResult(resp.data)
          );
        } else {
          console.log("Error");
        }
      });
  }

  getComparation() {
    var expData;
    var expBoxData;

    this.service = this.injector.get(OntimizeService);
    var conf = this.service.getDefaultServiceConfiguration("experiences");
    this.service.configureService(conf);

    this.service
      .query(
        void 0,
        ["total"],
        "clientExperienceTotalAmountsOfTheMonthsOfAYear"
      )
      .subscribe((resp) => {
        if (resp.code === 0) {
          expData = resp.data;

          //Segunda peticion
          conf = this.service.getDefaultServiceConfiguration("experienceboxes");
          this.service.configureService(conf);
          this.service
            .query(void 0, ["total"], "clientExperienceBoxTotalAmounts")
            .subscribe((resp) => {
              if (resp.code === 0) {
                expBoxData = resp.data;
                var finalData = this.adapData(expData, expBoxData);
               // this.adaptTotalAmount(finalData);

                this.multiBarChartExpAndBoxTotalMonthComparation.setDataArray(
                  this.chartAdapterCombinedExpAndBoxTotalMonthAdapter.adaptResult(
                    finalData
                  )
                );
              } else {
                console.log("Error");
              }
            });
        } else {
          //Caso erroneo de la primera peticion
          console.log("Error");
        }
      });
  }

  adapData(dataExp, dataExpBox) {
    var finalMonth: number = new Date().getMonth() + 1;
    var finalData = [];

    dataExp = this.validMonths(dataExp, 1, finalMonth);
    dataExpBox = this.validMonths(dataExpBox, 1, finalMonth);

    for (var i = 0; i < finalMonth; i++) {
      finalData.push({
        month: i + 1,
        totalExp: dataExp[i]["total"],
        totalExpBox: dataExpBox[i]["total"],
      });
    }

    return finalData;
  }

  adaptTotalAmount(data) {
    if (data && data.length) {
      data.forEach((item: any, index: number) => {
        item["month"] = this.d3Locale["shortMonths"][item["month"] - 1];
      });
    }
  }

  //TODO:Estaria bien optimizar el moetodo para pasarle las columnas de los resultados del total y el mes
  validMonths(data, inicialMonth, finalMonth) {
    let values = [];

    //Bucle que recorre lo meses
    for (let i = inicialMonth; i <= finalMonth; i++) {
      var flag = true;

      //Bucle que recorre los datos
      for (let j = 0; j < data.length && flag; j++) {
        var item = data[j];
        //Si esta el mas lo añadimos a los nuevos valores y cambiamos al boolena para que no lo añada abajo
        if (item["month"] == i) {
          values.push({
            month: i,
            total: item["total"],
          });
          flag = false;
        }
      }

      //Si despues de buscar en los datos de la peticion no encontramos el mes
      //Lo añadimos a 0.
      if (flag) {
        values.push({
          month: i,
          total: 0,
        });
      }
    }
    return values;
  }
}


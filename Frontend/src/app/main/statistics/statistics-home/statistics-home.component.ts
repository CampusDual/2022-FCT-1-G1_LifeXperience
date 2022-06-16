import { Component, Injector, OnInit, ViewChild } from "@angular/core";
import { OntimizeService } from "ontimize-web-ngx";
import {
  DataAdapterUtils,
  DiscreteBarChartConfiguration,
  MultiBarChartConfiguration,
  MultiBarDataAdapter,
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
  @ViewChild("discreteBarChartClientBox", { static: false }) discreteBarChartClientBox: OChartComponent;
  @ViewChild("discreteBarChartComparation", { static: false }) discreteBarChartComparation: OChartComponent;

  chartParameters1: DiscreteBarChartConfiguration;
  chartParameters2: DiscreteBarChartConfiguration;
  chartParameters3: MultiBarChartConfiguration;

  

  constructor(
    private d3LocaleService: D3LocaleService,
    private injector: Injector
  ) {
    this.d3Locale = this.d3LocaleService.getD3LocaleConfiguration();
   }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.chartParameters3 = new MultiBarChartConfiguration();
    this.chartParameters3.xAxis = "month";
    this.chartParameters3.yAxis = ["totalExp","totalExpBox"];

    this.chartParameters1 = new DiscreteBarChartConfiguration();
    this.chartParameters1.xAxis = "month";
    this.chartParameters1.yAxis = ["total"];
    DataAdapterUtils.createDataAdapter(this.chartParameters1);


    this.chartParameters2 = new DiscreteBarChartConfiguration();
    this.chartParameters2.xAxis = "month";
    this.chartParameters2.yAxis = ["total"];
    DataAdapterUtils.createDataAdapter(this.chartParameters2);

    

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
            DataAdapterUtils.adapter.adaptResult(resp.data)
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
      .query(
        void 0,
        ["total"],
        "clientExperienceBoxTotalAmounts"
      )
      .subscribe((resp) => {
        if (resp.code === 0) {

          this.adaptTotalAmount(resp.data);

          this.discreteBarChartClientBox.setDataArray(
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



  getComparation() {
    var expData;
    var expBoxData;
    var interruptor = true;

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
          interruptor = false;
          console.log("Llegamos a experience");
        } else {
          console.log("Error");
        }
      });

    conf = this.service.getDefaultServiceConfiguration("experienceboxes");
    this.service.configureService(conf);
    this.service
      .query(void 0, ["total"], "clientExperienceBoxTotalAmounts")
      .subscribe((resp) => {
        if (resp.code === 0) {
          expBoxData = resp.data;
          while (interruptor) {}

          var finalData =  this.adapData(expData, expBoxData);

          var adapterData = new MultiBarDataAdapter(this.chartParameters3).adaptResult(finalData)
          this.discreteBarChartComparation.setDataArray(
            adapterData
          );

        } else {
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
        month: i,
        totalExp: dataExp[i]["total"],
        totalExpBox: dataExpBox[i]["total"],
      });
    }

    return finalData;


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

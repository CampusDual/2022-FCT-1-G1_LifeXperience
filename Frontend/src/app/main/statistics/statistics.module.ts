import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsHomeComponent } from './statistics-home/statistics-home.component';
import { OChartComponent, OChartModule } from 'ontimize-web-ngx-charts';


@NgModule({
  declarations: [StatisticsHomeComponent],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    OChartModule
  ]
})
export class StatisticsModule { }

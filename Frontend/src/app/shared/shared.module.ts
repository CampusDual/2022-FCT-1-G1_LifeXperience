import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { OChartModule } from 'ontimize-web-ngx-charts';
import { MENU_COMPONENTS } from './app.menu.config';


export function intRateMonthlyFunction (rowData: Array<any>): number {
  return rowData["INTERESRATE"]/12;
}

@NgModule({
  imports: [
    OntimizeWebModule,
    OChartModule
  ],
  declarations: [
    ...MENU_COMPONENTS,
  ],
  exports: [
    CommonModule,
    OChartModule,
    ...MENU_COMPONENTS,
  ],
  entryComponents: [...MENU_COMPONENTS],
})
export class SharedModule { }

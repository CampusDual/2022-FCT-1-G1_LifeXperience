import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OntimizeWebModule} from 'ontimize-web-ngx';
import { PaymentsBoxRoutingModule } from './paymentsbox-routing.module';
import { PaymentsBoxHomeComponent } from './paymentsbox-home/paymentsbox-home.component';
import { PaymentsBoxNewComponent } from './paymentsbox-new/paymentsbox-new.component';
import { PaymentsBoxDetailsComponent } from './paymentsbox-details/paymentsbox-details.component';


@NgModule({
  declarations: [PaymentsBoxHomeComponent, PaymentsBoxNewComponent, PaymentsBoxDetailsComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    PaymentsBoxRoutingModule
  ]
})
export class PaymentsBoxModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OntimizeWebModule} from 'ontimize-web-ngx';
import { PaymentsExpRoutingModule } from './paymentsexp-routing.module';
import { PaymentsExpHomeComponent } from './paymentsexp-home/paymentsexp-home.component';
import { PaymentsExpNewComponent } from './paymentsexp-new/paymentsexp-new.component';
import { PaymentsExpDetailsComponent } from './paymentsexp-details/paymentsexp-details.component';


@NgModule({
  declarations: [PaymentsExpHomeComponent, PaymentsExpNewComponent, PaymentsExpDetailsComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    PaymentsExpRoutingModule
  ]
})
export class PaymentsExpModule { }

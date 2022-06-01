import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsHomeComponent } from './payments-home/payments-home.component';
import { PaymentsNewComponent } from './payments-new/payments-new.component';
import { PaymentsDetailsComponent } from './payments-details/payments-details.component';


@NgModule({
  declarations: [PaymentsHomeComponent, PaymentsNewComponent, PaymentsDetailsComponent],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }

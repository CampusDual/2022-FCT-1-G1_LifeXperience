import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SubscriptionsRoutingModule } from './subscriptions-routing.module';
import { SubscriptionsHomeComponent } from './subscriptions-home/subscriptions-home.component';


@NgModule({
  declarations: [SubscriptionsHomeComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    SubscriptionsRoutingModule
  ]
})
export class SubscriptionsModule { }

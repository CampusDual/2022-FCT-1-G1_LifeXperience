import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OntimizeWebModule } from "ontimize-web-ngx";
import { SubscriptionsRoutingModule } from "./subscriptions-routing.module";
import { SubscriptionsHomeComponent } from "./subscriptions-home/subscriptions-home.component";
//import { SubscriptionsDetailComponent } from './subscriptions-detail/subscriptions-detail.component';
import { SubscriptionsNewComponent } from "./subscriptions-new/subscriptions-new.component";

@NgModule({
  declarations: [
    SubscriptionsHomeComponent,
    SubscriptionsNewComponent
    //SubscriptionsDetailComponent
  ],
  imports: [
    CommonModule,
    OntimizeWebModule,
    SubscriptionsRoutingModule
  ]
})
export class SubscriptionsModule { }

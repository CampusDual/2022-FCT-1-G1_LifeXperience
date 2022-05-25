import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsHomeComponent } from './clients-home/clients-home.component';
import { ClientsDetailsComponent } from './clients-details/clients-details.component';
import { ClientsNewComponent } from './clients-new/clients-new.component';


@NgModule({
  declarations: [ClientsHomeComponent, ClientsDetailsComponent, ClientsNewComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }

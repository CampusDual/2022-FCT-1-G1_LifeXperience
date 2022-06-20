import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from '../shared/shared.module';
import { PortalWebRoutingModule } from './portal-web-routing.module';
import { PortalWebComponent } from './portal-web.component';


@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    PortalWebRoutingModule,
  ],
  declarations: [
    PortalWebComponent
  ]
})
export class PortalWebModule { }

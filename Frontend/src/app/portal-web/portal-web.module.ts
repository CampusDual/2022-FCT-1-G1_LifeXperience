import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from '../shared/shared.module';
import { PortalWebRoutingModule } from './portal-web-routing.module';
import { PortalWebComponent } from './portal-web-home/portal-web.component';
import { UiElementsModule } from '../main/ui-elements/ui-elements.module';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    PortalWebRoutingModule,
    UiElementsModule
  ],
  declarations: [
    PortalWebComponent,
  ]
})
export class PortalWebModule { }

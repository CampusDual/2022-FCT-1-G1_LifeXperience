import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceBoxesRoutingModule } from './experience-boxes-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { ExperienceBoxesHomeComponent } from './experience-boxes-home/experience-boxes-home.component';
import { ExperienceBoxesDetailComponent } from './experience-boxes-detail/experience-boxes-detail.component';
import { ExperienceBoxesNewComponent } from './experience-boxes-new/experience-boxes-new.component';


@NgModule({
  declarations: [ExperienceBoxesHomeComponent,ExperienceBoxesDetailComponent, ExperienceBoxesNewComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    ExperienceBoxesRoutingModule
  ]
})
export class ExperienceBoxesModule { }

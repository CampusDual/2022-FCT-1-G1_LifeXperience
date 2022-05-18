import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { ExperiencesRoutingModule } from './experiences-routing.module';
import { ExperiencesHomeComponent } from './experiences-home/experiences-home.component';
import { ExperiencesNewComponent } from './experiences-new/experiences-new.component';


@NgModule({
  declarations: [ExperiencesHomeComponent, ExperiencesNewComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    ExperiencesRoutingModule
  ]
})
export class ExperiencesModule { }

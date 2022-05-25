import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";
import { PackagesRoutingModule } from './expackages-routing.module';
import { PackagesHomeComponent } from './expackages-home/packages-home.component';
import { PackagesNewComponent } from './expackages-new/packages-new.component';
import { PackagesDetailsComponent } from './expackages-details/packages-details.component';


@NgModule({
  declarations: [PackagesHomeComponent, PackagesNewComponent, PackagesDetailsComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    PackagesRoutingModule
  ]
})
export class PackagesModule { }

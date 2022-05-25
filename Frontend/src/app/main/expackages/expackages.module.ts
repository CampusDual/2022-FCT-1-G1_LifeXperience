import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from "ontimize-web-ngx";
import { PackagesRoutingModule } from './packages-routing.module';
import { PackagesHomeComponent } from './packages-home/packages-home.component';
import { PackagesNewComponent } from './packages-new/packages-new.component';
import { PackagesDetailsComponent } from './packages-details/packages-details.component';


@NgModule({
  declarations: [PackagesHomeComponent, PackagesNewComponent, PackagesDetailsComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    PackagesRoutingModule
  ]
})
export class PackagesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { UsersRoutingModule } from './users-routing.module';
import { UsersNewComponent } from './users-new/users-new.component';
import { UsersHomeComponent } from './users-home/users-home.component';


@NgModule({
  declarations: [UsersNewComponent, UsersHomeComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }

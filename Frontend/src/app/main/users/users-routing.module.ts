import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersHomeComponent } from './users-home/users-home.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersNewComponent } from './users-new/users-new.component';

const routes: Routes = [
  {
    path: '',
    component : UsersHomeComponent
  },
  {
  path : 'new',
  component :UsersNewComponent
  },
  {
    path : ':user_',
    component : UsersDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

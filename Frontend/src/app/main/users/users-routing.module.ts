import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersHomeComponent } from './users-home/users-home.component';
import { UsersNewComponent } from './users-new/users-new.component';

//TODO:Cambiar para que vuelva a redirigir a home
const routes: Routes = [
  /*{
    path: '',
    component : UsersHomeComponent
  },*/
  {
  path : /*'new'*/'',
  component :UsersNewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

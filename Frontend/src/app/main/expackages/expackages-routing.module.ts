import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PackagesDetailsComponent } from './packages-details/packages-details.component';
import { PackagesHomeComponent } from './packages-home/packages-home.component';
import { PackagesNewComponent } from './packages-new/packages-new.component';


const routes: Routes = [
  {
    path : '',
    component: PackagesHomeComponent
  },
  {
    path: "new",
    component: PackagesNewComponent
  },
  {
    path: ":id",
    component: PackagesDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackagesRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsDetailsComponent } from './clients-details/clients-details.component';
import { ClientsHomeComponent } from './clients-home/clients-home.component';
import { ClientsNewComponent } from './clients-new/clients-new.component';


const routes: Routes = [
  {
    path : '',
    component: ClientsHomeComponent
  },
  {
    path: "new",
    component: ClientsNewComponent
  },
  {
    path: ":id",
    component: ClientsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }

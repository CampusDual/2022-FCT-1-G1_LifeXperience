import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalWebComponent } from './portal-web-home/portal-web.component';

export const routes: Routes = [
  {
    path: '',
    component: PortalWebComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalWebRoutingModule { }


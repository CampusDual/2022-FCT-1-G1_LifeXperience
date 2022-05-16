import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperiencesHomeComponent } from './experiences-home/experiences-home.component';


const routes: Routes = [{
  path : '',
  component: ExperiencesHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperiencesRoutingModule { }


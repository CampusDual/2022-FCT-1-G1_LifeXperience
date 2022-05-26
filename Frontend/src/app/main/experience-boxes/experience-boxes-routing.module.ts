import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperienceBoxesDetailComponent } from './experience-boxes-detail/experience-boxes-detail.component';
import { ExperienceBoxesHomeComponent } from './experience-boxes-home/experience-boxes-home.component';
import { ExperienceBoxesNewComponent } from './experience-boxes-new/experience-boxes-new.component';

const routes: Routes = [{
  path : '',
  component: ExperienceBoxesHomeComponent
},
{
  path: ":id",
  component: ExperienceBoxesDetailComponent
},{
  path: "new",
  component: ExperienceBoxesNewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienceBoxesRoutingModule { }
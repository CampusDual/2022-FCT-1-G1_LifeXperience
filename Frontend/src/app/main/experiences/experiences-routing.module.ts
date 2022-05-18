import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperiencesHomeComponent } from './experiences-home/experiences-home.component';
import { ExperiencesNewComponent } from "./experiences-new/experiences-new.component";

const routes: Routes = [{
  path : '',
  component: ExperiencesHomeComponent
},
{
  path: "new",
  component: ExperiencesNewComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperiencesRoutingModule { }


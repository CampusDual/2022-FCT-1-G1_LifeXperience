import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperiencesHomeComponent } from './experiences-home/experiences-home.component';
import { ExperiencesNewComponent } from "./experiences-new/experiences-new.component";
import { ExperiencesDetailComponent } from './experiences-detail/experiences-detail.component';


const routes: Routes = [{
  path : '',
  component: ExperiencesHomeComponent

},
{
  path: "new",
  component: ExperiencesNewComponent
},
{
  path: ":id",
  component: ExperiencesDetailComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperiencesRoutingModule { }


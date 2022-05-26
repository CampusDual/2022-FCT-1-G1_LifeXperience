import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ngx';
import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'experience-boxes', loadChildren: () => import('./experience-boxes/experience-boxes.module').then(m => m.ExperienceBoxesModule) },
      { path: 'experiences', loadChildren: () => import('./experiences/experiences.module').then(m => m.ExperiencesModule) },
      { path :'clients', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule) },
      { path: 'users', loadChildren:() => import('./users/users.module').then(m=> m.UsersModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

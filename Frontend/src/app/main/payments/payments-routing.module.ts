import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentsHomeComponent } from './payments-home/payments-home.component';
import { PaymentsNewComponent } from './payments-new/payments-new.component';
import { PaymentsDetailsComponent } from './payments-details/payments-details.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentsHomeComponent,
  },
  {
    path: 'new',
    component: PaymentsNewComponent,
  },
  {
    path: ':id',
    component: PaymentsDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }

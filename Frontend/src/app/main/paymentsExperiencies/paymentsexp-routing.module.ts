import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentsExpHomeComponent } from './paymentsexp-home/paymentsexp-home.component';
import { PaymentsExpNewComponent } from './paymentsexp-new/paymentsexp-new.component';
import { PaymentsExpDetailsComponent } from './paymentsexp-details/paymentsexp-details.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentsExpHomeComponent,
  },
  {
    path: 'new',
    component: PaymentsExpNewComponent,
  },
  {
    path: ':relation_id',
    component: PaymentsExpDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsExpRoutingModule { }

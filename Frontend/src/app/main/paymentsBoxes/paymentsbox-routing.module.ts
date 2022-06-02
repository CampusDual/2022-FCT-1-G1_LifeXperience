import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentsBoxHomeComponent } from './paymentsbox-home/paymentsbox-home.component';
import { PaymentsBoxNewComponent } from './paymentsbox-new/paymentsbox-new.component';
import { PaymentsBoxDetailsComponent } from './paymentsbox-details/paymentsbox-details.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentsBoxHomeComponent,
  },
  {
    path: 'new',
    component: PaymentsBoxNewComponent,
  },
  {
    path: ':id',
    component: PaymentsBoxDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsBoxRoutingModule { }

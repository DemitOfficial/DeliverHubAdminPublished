import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPaymentsComponent } from './AllPayments/AllPayments.component';
import { PaymentClearenceComponent } from './PaymentClearence/PaymentClearence.component';

const routes: Routes = [
  { 
    path: '',
    component:AllPaymentsComponent,
    data: {
      breadcrumb: 'Payments',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'All Payments',
      status: true
    },
   },
   {
    path: 'paymentclearance',
    component:PaymentClearenceComponent,
    data: {
      breadcrumb: 'Rider Orders',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'All Rider Orders',
      status: true
    },
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }

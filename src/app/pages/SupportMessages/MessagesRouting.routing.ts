import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPaymentsComponent } from '../Payments/AllPayments/AllPayments.component';
import { AllMessagesComponent } from './AllMessages/AllMessages.component';
const routes: Routes = [
  {
    path: '',
    component:AllMessagesComponent,
    data: {
      breadcrumb: 'Rider',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'All Riders Data',
      status: true
    },
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingRout { }

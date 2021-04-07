import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllClaimsComponent } from '../ClaimsAndDisputes/AllClaims/AllClaims.component';
import { AllConsumersComponent } from './AllConsumers/AllConsumers.component';

const routes: Routes = [
  { 
    path: '',
    component:AllConsumersComponent,
    data: {
      breadcrumb: 'Consumers',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'All Consumers Data',
      status: true
    },
   },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumerRoutingModule { }
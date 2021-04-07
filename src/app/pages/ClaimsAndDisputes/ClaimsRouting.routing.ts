import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllClaimsComponent } from './AllClaims/AllClaims.component';

const routes: Routes = [
  { 
    path: '',
    component:AllClaimsComponent,
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
export class ClaimsRoutingModule { }
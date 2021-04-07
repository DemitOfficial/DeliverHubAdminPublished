import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FairAndPercentageComponent } from './FairAndPercentage.component';


const routes: Routes = [
  {
    path: '',
    component:FairAndPercentageComponent,
    data: {
      breadcrumb: 'SYSTEM SETTINGS',
      icon: 'fas fa-cogs bg-c-blue',
      breadcrumb_caption: 'Change System Settings Like Delivery Fairs And Restaurant Detuction Percentage.',
      status: true
    },
  }

 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FairAndPercentageRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RiderModule } from '../Rider/Rider.module';
import { AllRidersComponent } from './AllRiders/AllRiders.component';
import { RiderComponent } from './Rider.component';
import { RiderOrdersComponent } from './RiderOrders/RiderOrders.component';

const routes: Routes = [
  {
    path: '',
    component:AllRidersComponent,
    data: {
      breadcrumb: 'Rider',
      icon: 'fa fa-car bg-c-blue',
      breadcrumb_caption: 'All Riders Data',
      status: true
    },
  },
  {
    path: 'riders',
    component:AllRidersComponent,
    data: {
      breadcrumb: 'Rider',
      icon: 'fa fa-car bg-c-blue',
      breadcrumb_caption: 'All Riders Data',
      status: true
    },
  },
  
  {
    path: 'riderorders',
    component:RiderOrdersComponent,
    data: {
      breadcrumb: 'Rider Orders',
      icon: 'fa fa-car bg-c-blue',
      breadcrumb_caption: 'All Rider Orders',
      status: true
    },
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiderRoutingModule { }

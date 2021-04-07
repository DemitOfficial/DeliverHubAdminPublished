import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllOrdersComponent } from './AllOrders/AllOrders.component';
import { OrderReviewsComponent } from './OrderReviews/OrderReviews.component';

const routes: Routes = [
  { 
    path: '',
    component:AllOrdersComponent,
    data: {
      breadcrumb: 'Order',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'All Orders Data',
      status: true
    },
   },
   {
    path: 'orderreviews',
    component:OrderReviewsComponent,
    data: {
      breadcrumb: 'Order Reviews',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'All Order Reviews',
      status: true
    },
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }

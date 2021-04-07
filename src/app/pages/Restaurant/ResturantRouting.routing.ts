import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AllResturantsComponent } from './AllResturants/AllResturants.component';
import { ResturantReviewsComponent } from './ResturantReviews/ResturantReviews.component';
const routes: Routes = [
  {
    path: '',
    component:AllResturantsComponent,
    data: {
      breadcrumb: 'Resturants',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'All Resturants',
      status: true
    },
  },
  {
    path: 'resturantreview/:restaurantID',
    component:ResturantReviewsComponent,
    data: {
      breadcrumb: 'Resturants reviews',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'All Resturants',
      status: true
    },
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResturantRoutingModule { }

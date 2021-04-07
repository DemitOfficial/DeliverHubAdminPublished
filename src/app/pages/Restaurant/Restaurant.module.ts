import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './Restaurant.component';
import { AllResturantsComponent } from './AllResturants/AllResturants.component';
import { ResturantRoutingModule } from './ResturantRouting.routing';
import { SharedModule } from '../../../../src/app/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { ResturantReviewsComponent } from './ResturantReviews/ResturantReviews.component';

@NgModule({
  imports: [

    CommonModule,
    ResturantRoutingModule,
    SharedModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,


  ],
  declarations: [RestaurantComponent,AllResturantsComponent,ResturantReviewsComponent]
})
export class RestaurantModule { }

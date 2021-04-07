import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './Order.component';
import { AllOrdersComponent } from './AllOrders/AllOrders.component';
import { OrderRoutingModule } from './OrderRouting.routing';
import { OrderReviewsComponent } from './OrderReviews/OrderReviews.component';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule
  ],
  declarations: [OrderComponent,AllOrdersComponent,OrderReviewsComponent]
})
export class OrderModule { }

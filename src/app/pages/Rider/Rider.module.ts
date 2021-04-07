import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiderComponent } from './Rider.component';
import { RiderRoutingModule } from './Rider-Rout.routing';
import { AllRidersComponent } from './AllRiders/AllRiders.component';
import { SharedModule } from '../../../../src/app/shared/shared.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { RiderOrdersComponent } from './RiderOrders/RiderOrders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { serviceArea } from './../../Models/RiderServiceArea.Model';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  imports: [
    CommonModule,
    RiderRoutingModule,
    SharedModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey:"AIzaSyCUG8nuf7xCD2P8Sc8eQ9C63MQhB48S1Dk"
    })
  ],
  declarations: [RiderComponent,RiderOrdersComponent,
  AllRidersComponent],
  providers: [
    serviceArea
    ]
})
export class RiderModule { }

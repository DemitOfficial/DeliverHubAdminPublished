import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumersComponent } from './Consumers.component';


import { AllConsumersComponent } from './AllConsumers/AllConsumers.component';
import { ConsumerRoutingModule } from './ConsumerRouting.routing';
import { SharedModule } from '../../../../src/app/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';

@NgModule({
  imports: [
    CommonModule,
    ConsumerRoutingModule,
    SharedModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
  ],
  declarations: [ConsumersComponent,AllConsumersComponent]
})
export class ConsumersModule { }

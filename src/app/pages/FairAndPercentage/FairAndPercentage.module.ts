import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../../src/app/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { FairAndPercentageRoutingModule } from './FairAndPercentageRouting.routing';
import { FairAndPercentageComponent } from './FairAndPercentage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [

    CommonModule,
    FairAndPercentageRoutingModule,
    SharedModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  declarations: [FairAndPercentageComponent]
})
export class FairAndPercentageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardDefaultRoutingModule } from './dashboard-default-routing.module';
import { DashboardDefaultComponent } from './dashboard-default.component';
import {SharedModule} from '../../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Ng2OrderModule, Ng2OrderPipe } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';


import { DashboardService } from '../../../../../src/app/_service/dashboard.service';


@NgModule({
  imports: [
    CommonModule,
    DashboardDefaultRoutingModule,
    SharedModule,
    ChartModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    Ng2OrderModule,
    NgxPaginationModule
  ],
  declarations: [DashboardDefaultComponent],
  providers: [
  
  ]

})
export class DashboardDefaultModule { }

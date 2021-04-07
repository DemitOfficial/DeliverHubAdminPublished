import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './Payments.component';
import { PaymentRoutingModule } from './PaymentsRouting.routing';
import { AllPaymentsComponent } from './AllPayments/AllPayments.component';
import { PaymentClearenceComponent } from './PaymentClearence/PaymentClearence.component';

@NgModule({
  imports: [
    CommonModule,
    PaymentRoutingModule,
  ],
  declarations: [PaymentsComponent,AllPaymentsComponent,PaymentClearenceComponent]
})
export class PaymentsModule { }

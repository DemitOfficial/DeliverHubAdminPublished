import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimsAndDisputesComponent } from './ClaimsAndDisputes.component';
import { ClaimsRoutingModule } from './ClaimsRouting.routing';
import { AllClaimsComponent } from './AllClaims/AllClaims.component';

@NgModule({
  imports: [
    CommonModule,
    ClaimsRoutingModule,
  ],
  declarations: [ClaimsAndDisputesComponent,AllClaimsComponent]
})
export class ClaimsAndDisputesModule { }

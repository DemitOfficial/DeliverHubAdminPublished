import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportMessagesComponent } from './SupportMessages.component';
import { MessagesRoutingRout } from './MessagesRouting.routing';
import { AllMessagesComponent } from './AllMessages/AllMessages.component';

@NgModule({
  imports: [
    CommonModule,
    MessagesRoutingRout,
  ],
  declarations: [SupportMessagesComponent,AllMessagesComponent]
})
export class SupportMessagesModule { }

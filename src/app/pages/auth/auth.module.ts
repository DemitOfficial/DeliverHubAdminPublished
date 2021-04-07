import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {SharedModule} from '../../shared/shared.module';
import { BasicLoginModule } from './login/basic-login/basic-login.module';
import { BasicLoginComponent } from './login/basic-login/basic-login.component';



@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    BasicLoginModule,
 
  ],
  declarations: [
  ],
})
export class AuthModule { }

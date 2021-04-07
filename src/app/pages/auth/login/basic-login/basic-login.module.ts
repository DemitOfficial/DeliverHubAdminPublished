import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLoginComponent } from './basic-login.component';
import {BasicLoginRoutingModule} from './basic-login-routing.module';
import {SharedModule} from '../../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './../../../../_service/auth.service';
import { Login } from './../../../../Models/Login.model';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    BasicLoginRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
   
  ],
  declarations: [BasicLoginComponent],
  providers: [
    AuthService,
    Login,
  
  ]
})
export class BasicLoginModule { }

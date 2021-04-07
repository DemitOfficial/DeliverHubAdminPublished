import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

    baseUrl = environment.apiurl + 'Order/';
  constructor(private http: HttpClient) {
    
  };
  GetRiders(){
  
    return this.http.get<any>(this.baseUrl+'GetOrders');
  }
  GetRiderOrder(){
  
    return this.http.get<any>(this.baseUrl+'AllRiderOrders');
  }

}

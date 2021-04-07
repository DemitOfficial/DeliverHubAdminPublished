import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RiderOrderService {
  baseUrl = environment.apiurl + 'Rider/';
constructor(private http: HttpClient) { }
GetRiderOrders(){
  return this.http.get<any>(this.baseUrl+'Getriders');
}
}

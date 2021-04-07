import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeliveryFairService {
  baseUrl = environment.apiurl + 'DeliveryFair/';
constructor(private http: HttpClient) { }
GetDeliveryfair(){
  
  return this.http.get<any>(this.baseUrl+'DeliveryFair');
}
GetDeliveryfairFullinfo(){
  
  return this.http.get<any>(this.baseUrl+'Deliveryanddeductioninfo');
}

updatestoredelivery(form:any){
  debugger;
  return this.http.post(this.baseUrl+'poststoredeliveryupdate',form);
}
updatestorededuction(form:any){
  debugger;
  return this.http.post(this.baseUrl+'poststoredetuctionupdate',form);
}
updateresdelivert(form:any){
  debugger;
  return this.http.post(this.baseUrl+'updaterestdelivert',form);
}
updaterestperson(form:any){
  debugger;
  return this.http.post(this.baseUrl+'updaterestdelivert',form);
}
Updatedeliveryfair(form:any){
  debugger;
  return this.http.post(this.baseUrl+'postrestaurantdeliveryupdate',form);
}
localchargesupdate(form:any){
  debugger;
  return this.http.post(this.baseUrl+'Localdeliveryupdate',form);
}

GetPackage(){
  
  return this.http.get<any>(this.baseUrl+'GetPAckage');
}
Updatepackage(form:any){
  
  return this.http.post(this.baseUrl+'PostPackage',form);
}
}

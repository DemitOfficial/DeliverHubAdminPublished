import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'jquery';
import { Observable } from 'rxjs';
import { environment } from '../../../src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RiderService {
  baseUrl = environment.apiurl + 'Rider/';
constructor(private http: HttpClient) {
  
};
GetRiders(){
  return this.http.get<any>(this.baseUrl+'Getriders');
}
Updatestatus(riderid:number):Observable<any>{

  return this.http.post<any>(this.baseUrl+'ActivateDeactivate', riderid)}

  AddArea(form:any):Observable<any>{

    return this.http.post<any>(this.baseUrl+'PostRiderArea', form)
};
}

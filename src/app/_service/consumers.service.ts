import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsumersService {
  baseUrl = environment.apiurl + 'ConsumerApi/';

constructor(private http: HttpClient) { }

GetCOnsumers(){
  return this.http.get<any>(this.baseUrl+'GetConsumers');
}
Updatestatus(consumer_Id:number):Observable<any>{

  return this.http.post<any>(this.baseUrl+'Statuschange', consumer_Id)}

};


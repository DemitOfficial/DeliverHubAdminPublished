import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResturantService {

  baseUrl = environment.apiurl + 'VenderApi/';
  baseUrl1 = environment.apiurl + 'Restaurant/';
  baseUrl2=environment.apiurl + 'Review/';
constructor(private http: HttpClient) { }

GetCOnsumers(){
  debugger;
  return this.http.get<any>(this.baseUrl+'GetResturants');
}
Updatestatus(id:number):Observable<any>{

  return this.http.post<any>(this.baseUrl1+'BlockResturat', id)}

  GetresturantReviews(id:string):Observable<any>{
 debugger;
    return this.http.post<any>(this.baseUrl2+'GetResturantReviewsIdBase',Number(id))}

}






import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseUrl = environment.apiurl + 'DashboardApi/';
  constructor(private http: HttpClient) {
    
  };
  DatsboardDataGet(){
    return this.http.get<any>(this.baseUrl+'Dashboard');
  }


}

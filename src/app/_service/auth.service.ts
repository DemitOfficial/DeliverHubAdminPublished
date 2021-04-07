import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  baseUrl = environment.apiurl + 'Admin/';
constructor(private http: HttpClient) {}

login(form: any){

  return this.http.post(this.baseUrl+'AdminLogin', form)
  .pipe(map ((response: any) => {
  
    const user = response.res;
    if (user) {
      localStorage.setItem('token', user);
      this.decodedToken = this.jwtHelper.decodeToken(user);
      console.log(this.decodedToken);
    }
  }));
}
loggedIn() {
  const token = localStorage.getItem('token');
  return !this.jwtHelper.isTokenExpired(token);
}
// logout() {
//   localStorage.removeItem(this.decodedToken);
//   console.log('logged out');
// }

}

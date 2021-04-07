import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


import { Login } from './../../../../Models/Login.model';
import { AuthService } from './../../../../_service/auth.service';

@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {
loginForm: FormGroup;
  constructor(private Model: Login, private authService: AuthService, private router: Router
   ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      Email: new FormControl(this.Model.Email),
      Password: new FormControl(this.Model.Password)
    })
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }
   login() {
     // tslint:disable-next-line: no-debugger
     
     this.authService.login(this.loginForm.value).subscribe(next => {
      this.router.navigate(['/dashboard']);
  
     },() => {
     
     });
   }
   loggedIn() {
       const token = localStorage.getItem('token');
       return !!token;
    }
}

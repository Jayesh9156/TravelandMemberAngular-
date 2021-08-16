import { Component, OnInit } from '@angular/core';
import { Login } from '../Login';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  log:Login= new Login
  constructor() {
   this.log.userEmail="";
   this.log.userPassword="";
   }
  ngOnInit(): void {
  }

}

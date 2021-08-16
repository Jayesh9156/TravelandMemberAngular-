import { Component, OnInit } from '@angular/core';
import { NgModule }      from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { Register } from '../register';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  reg:Register= new Register();
  constructor() {

    this.reg.userName="gulshan";
    this.reg.userEmail="gulsankataria4120@gmail.com"
    this.reg.userPassword="Gulandas@771"
    this.reg.userPassword1=""
   }

  ngOnInit(): void {
  }
  registerUser(){

  }

}

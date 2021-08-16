import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Travel } from '../travel';
import {TravelService} from '../travelService'
@Component({
  selector: 'app-travel-from',
  templateUrl: './travel-from.component.html',
  styleUrls: ['./travel-from.component.css']
})
export class TravelFromComponent implements OnInit {
  travel:Travel = new Travel();
  ins:number;
  cus:number;
  constructor(private travelService:TravelService) { 
 
  }

  saveTravel(){
    this.travelService.InsertTravelService(this.travel).subscribe(data =>{

      console.log(data);
 

    },

    error=>console.log(error));
}
  ngOnInit(): void {
  }

  onSubmit(){
     
    console.log("hELLO");
     
    this.travel.travelModeoftravel='Airline';
     this.travel.insurance={insuranceId:this.ins}
     this.travel.customer={custId:this.cus}
 
     console.log(this.travel);
 
     this.saveTravel();
  }

}

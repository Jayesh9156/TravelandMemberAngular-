import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Travel } from "./travel";
 



@Injectable({
providedIn:"root"
})



export class TravelService{
baseURL:String = 'http://localhost:8087/travel/'
constructor(private myhttp:HttpClient) { }

InsertTravelService(travel:Travel):Observable<Travel[]>{
return this.myhttp.post<Travel[]>(this.baseURL+"addTravel/",travel);
}




}
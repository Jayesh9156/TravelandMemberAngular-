import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from "./member";

@Injectable({
providedIn:"root"
})



export class MemberService{
baseURL:String = 'http://localhost:8087/member/'
constructor(private myhttp:HttpClient) { }

headers={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

InsertTravelService(member:Member[]):Observable<Member[]>{
    return this.myhttp.post<Member[]>(this.baseURL+"addMember/",member);
    }

}
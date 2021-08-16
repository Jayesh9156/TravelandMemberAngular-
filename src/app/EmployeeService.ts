import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Employee } from "./Employee";
import { Observable } from 'rxjs';

@Injectable({
    providedIn:"root"
})

export class EmployeeService{
    baseURL:String = 'http://localhost:8086/empl/'
    constructor(private myhttp:HttpClient) { }
    
    findAllEmployeeService():Observable<Employee[]>{
        return this.myhttp.get<Employee[]>(this.baseURL+"/getAllEmps/")
    } 
    deleteEmployeeService(empNo : number) : Observable<any> {//eno is copied here to empNo
        return this.myhttp.delete<any>(this.baseURL+"deleteEmp/"+empNo);
      }

}
import { Injectable } from '@angular/core';  
    import { Observable } from "rxjs";  
    import {HttpHeaders, HttpClient } from "@angular/common/http";  
    import { Employee } from "../app/employee";  
    @Injectable({  
      providedIn: 'root'  
    })  
    export class EmprecordService {  
       Url="http://localhost:14026/Api/Employee/";  
      constructor(private http:HttpClient) { }  
       InsertEmployee(employee:Employee)  
       {  
         debugger;  
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
         return this.http.post<Employee[]>(this.Url+'/InsertEmployee/', employee,httpOptions)  
       }  
       GetEmployeeRecord():Observable<Employee[]>  
       {  
         debugger;  
        return this.http.get<Employee[]>(this.Url+"/GetAllEmployee")  
       }  
       DeleteEmployee(id:string):Observable<number>  
       {  
         debugger;  
        return this.http.get<number>(this.Url + '/Delete/?id='+id);  
       }  
       GetEmployeeById(id:string)  
       {  
        return this.http.get<Employee>(this.Url + '/GetEmployeeById/?id=' + id);  
       }  
       UpdatEmplouee(employee:Employee)  
       {  
        debugger;  
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
         return this.http.post<Employee[]>(this.Url+'/UpdateEmployee/', employee,httpOptions)  
       }  
    }
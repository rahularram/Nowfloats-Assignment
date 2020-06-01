import { Component, OnInit } from '@angular/core';  
    import { Employee } from "../employee";  
    import { EmprecordService } from "../emprecord.service";  
    import { Observable } from "rxjs";  
    import { Router } from '@angular/router';  
    @Component({  
      selector: 'employee',  
      templateUrl: './employee.component.html',  
      styleUrls: ['./employee.component.css']  
    })  
    export class EmployeeComponent implements OnInit {  
      public emp: Observable<Employee[]>;  
      massage:String;  
      dataSaved=false;  
      constructor(private router: Router,private emprecordService:EmprecordService) { }  
       Loademployee()  
       {  
          debugger;  
          this.emp = this.emprecordService.GetEmployeeRecord();  
          console.log(this.emp);  
          debugger;  
       }  
       EmployeeEdit(id: string) {  
        debugger;  
       localStorage.removeItem("id");  
       localStorage.setItem("id",id.toString());  
        this.router.navigate(['/addemployee'], { queryParams: { Id: id } });  
        debugger;  
      }  
       Deleteemployee(id: string) {  
        if (confirm("Are You Sure To Delete this Informations")) {  
          this.emprecordService.DeleteEmployee(id).subscribe(  
            () => {  
              this.dataSaved = true;  
              this.massage = "Deleted Successfully";  
            }  
          );  
        }  
      }  
      ngOnInit() {  
        localStorage.clear();
        this.Loademployee();  
      }  
    }
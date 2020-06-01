import { Component, OnInit } from '@angular/core';  
    import { HttpClient } from "@angular/common/http";  
    import { FormGroup, FormControl } from '@angular/forms';  
    import { Observable } from "rxjs";  
    import { identifierModuleUrl } from '@angular/compiler';  
    import { Router } from '@angular/router';  
import { EmprecordService } from '../emprecord.service';
import { Employee } from '../employee';
    @Component({  
      selector: 'addemployee',  
      templateUrl: './addemployee.component.html',  
      styleUrls: ['./addemployee.component.css']  
    })  
    export class AddemployeeComponent implements OnInit {  
      massage: string;  
      dataSaved = false;  
      Addemployee:FormGroup;  
      EmployeeIdUpdate = "0";  
      constructor(private router: Router,private emprecordService:EmprecordService) { }  
      InsertEmployee(employee:Employee)  
      {  
    debugger;  
        if (this.EmployeeIdUpdate != "0") employee.Id=this.EmployeeIdUpdate;  
          this.emprecordService.InsertEmployee(employee).subscribe(  
            ()=>  
            {  
              if (this.EmployeeIdUpdate == "0") {  
                this.massage = 'Saved Successfully';  
              }  
              else  
              {  
                this.massage = 'Update Successfully';  
              }  
              this.dataSaved = true;  
              this.router.navigate(['/employee']);  
            })  
      }  
      onFormSubmit() {  
        const Emp = this.Addemployee.value;  
        this.InsertEmployee(Emp);  
      }  
      EmployeeEdit(id: string) {  
        debugger;  
        this.emprecordService.GetEmployeeById(id).subscribe(emp => {  
          this.massage = null;  
          this.dataSaved = false;  
          debugger;  
          this.EmployeeIdUpdate=id;  
          this.Addemployee.controls['Name'].setValue(emp.Name);  
          this.Addemployee.controls['Department'].setValue(emp.Department);  
          this.Addemployee.controls['City'].setValue(emp.City);  
          this.Addemployee.controls['Country'].setValue(emp.Country);  
          this.Addemployee.controls['Address'].setValue(emp.Address);  
        });  
        debugger;  
      }  
      clearform() {  
        debugger;  
        this.Addemployee.controls['Name'].setValue("");  
        this.Addemployee.controls['Department'].setValue("");  
        this.Addemployee.controls['Address'].setValue("");  
        this.Addemployee.controls['City'].setValue("");  
        this.Addemployee.controls['Country'].setValue("");  
      }  
      ngOnInit() {  
        this.Addemployee = new FormGroup({  
          Name: new FormControl(),  
          Department:new FormControl(),  
          Address:new FormControl(),  
          City:new FormControl(),  
          Country:new FormControl(),  
      });  
      let Id = localStorage.getItem("id");  
    if(Id!=null)  
    {  
      this.EmployeeEdit(Id) ;  
     }}  
    }
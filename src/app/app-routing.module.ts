import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
import { EmployeeComponent } from "./employee/employee.component";   
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
const routes: Routes = [  
  {path:'',redirectTo:'/user/login',pathMatch:'full'},
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      {path:"employee",component:EmployeeComponent},  
      {path:"addemployee",component:AddemployeeComponent}, 
      { path: 'login', component: LoginComponent }
    ]
  },
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]}
 
];  

@NgModule({  
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]  
})  
export class AppRoutingModule { }
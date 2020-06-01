import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
import { FormsModule } from '@angular/forms';  
import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';  
import { HttpClientModule,HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';   
import { EmployeeComponent } from './employee/employee.component';  
import { ReactiveFormsModule } from "@angular/forms";  
import { EmprecordService } from "../app/emprecord.service";   
import {NgxPaginationModule} from 'ngx-pagination';   
import { Ng2SearchPipeModule } from 'ng2-search-filter';  
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './shared/user.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ToastrModule } from 'ngx-toastr/toastr/toastr.module';
@NgModule({  
  declarations: [  
    AppComponent,  
    EmployeeComponent,  
    AddemployeeComponent,  
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,Ng2SearchPipeModule,NgxPaginationModule  ,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule
  ],
  providers: [UserService, EmprecordService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],   
  bootstrap: [AppComponent]  
})  
export class AppModule { }
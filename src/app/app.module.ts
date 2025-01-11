import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from "@angular/common/http";
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { BlogsComponent } from './blogs/blogs.component';
import { WheatherComponent } from './wheather/wheather.component';
import { MoviesComponent } from './movies/movies.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { CarouselsComponent } from './carousels/carousels.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { StudentsComponent } from './students/students.component';
import { CreateStudentsidComponent } from './create-studentsid/create-studentsid.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    ErrorComponent,
    DataBindingComponent,
    DirectivesComponent,
    EmployeeComponent,
    ShoppingComponent,
    VehicleComponent,
    FlipkartComponent,
    MailComponent,
    PinterestComponent,
    BlogsComponent,
    WheatherComponent,
    MoviesComponent,
    ProfilesComponent,
    CarouselsComponent,
    AccountsComponent,
    CreateVehicleComponent,
    StudentsComponent,
    CreateStudentsidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

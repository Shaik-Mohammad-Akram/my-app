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
import { CreateUserComponent } from './create-user/create-user.component';
import { DetailsComponent } from './details/details.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { CapitalDirective } from './capital.directive';
import { BalancePipe } from './balance.pipe';

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
    CreateStudentsidComponent,
    CreateUserComponent,
    DetailsComponent,
    VehicleDetailsComponent,
    StudentDetailsComponent,
    Sibling1Component,
    Sibling2Component,
    ParentComponent,
    ChildComponent,
    RatingComponent,
    CapitalDirective,
    BalancePipe
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

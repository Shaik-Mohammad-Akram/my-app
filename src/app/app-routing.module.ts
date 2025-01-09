import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { BlogsComponent } from './blogs/blogs.component';
import { WheatherComponent } from './wheather/wheather.component';
import { MoviesComponent } from './movies/movies.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { CarouselsComponent } from './carousels/carousels.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'shopping',component:ShoppingComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'mail',component:MailComponent},
    {path:'pinterest',component:PinterestComponent},
    {path:'blogs',component:BlogsComponent},
    {path:'wheather',component:WheatherComponent},
    {path:'movies',component:MoviesComponent},
    {path:'profiles',component:ProfilesComponent},
    {path:'carousels',component:CarouselsComponent},


  ]},
  {path:'**',component:ErrorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

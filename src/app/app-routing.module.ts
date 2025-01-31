import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
import { AccountsComponent } from './accounts/accounts.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { StudentsComponent } from './students/students.component';
import { CreateStudentsidComponent } from './create-studentsid/create-studentsid.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DetailsComponent } from './details/details.component';
import { AuthenticationGuard } from './authentication.guard';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { AboutCompanyComponent } from './about-us/about-company/about-company.component';
import { AboutCeoComponent } from './about-us/about-ceo/about-ceo.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:'',component:LoginComponent},
  {path:'dashboard',canActivate:[AuthenticationGuard],component:DashboardComponent,children:[
    {path:'home',canActivate:[AuthenticationGuard],component:HomeComponent},
    {path:'data-binding',canActivate:[AuthenticationGuard],component:DataBindingComponent},
    {path:'directives',canActivate:[AuthenticationGuard],component:DirectivesComponent},
    {path:'employee',canActivate:[AuthenticationGuard],component:EmployeeComponent},
    {path:'shopping',canActivate:[AuthenticationGuard],component:ShoppingComponent},
    {path:'vehicle',canActivate:[AuthenticationGuard],component:VehicleComponent},
    {path:'create-vehicle',canActivate:[AuthenticationGuard],component:CreateVehicleComponent},

    {path:'flipkart',canActivate:[AuthenticationGuard],component:FlipkartComponent},
    {path:'mail',canActivate:[AuthenticationGuard],component:MailComponent},
    {path:'pinterest',canActivate:[AuthenticationGuard],component:PinterestComponent},
    {path:'blogs',canActivate:[AuthenticationGuard],component:BlogsComponent},
    {path:'wheather',canActivate:[AuthenticationGuard],component:WheatherComponent},
    {path:'movies',canActivate:[AuthenticationGuard],component:MoviesComponent},
    {path:'profiles',canActivate:[AuthenticationGuard],component:ProfilesComponent},
    {path:'carousels',canActivate:[AuthenticationGuard],component:CarouselsComponent},
    {path:'accounts',canActivate:[AuthenticationGuard],component:AccountsComponent},
    {path:'students',canActivate:[AuthenticationGuard],component:StudentsComponent},
    {path:'create-studentid',canActivate:[AuthenticationGuard],component:CreateStudentsidComponent},
    {path:'create-user',canActivate:[AuthenticationGuard],component:CreateUserComponent},
    {path:'details',canActivate:[AuthenticationGuard],component:DetailsComponent},
    {path:'vehicle-details/:id',canActivate:[AuthenticationGuard],component:VehicleDetailsComponent},
    {path:'edit-vehicle/:id',canActivate:[AuthenticationGuard],component:CreateVehicleComponent},
    {path:'student-details/:id',canActivate:[AuthenticationGuard],component:StudentDetailsComponent},
    {path:'edit-student-details/:id',canActivate:[AuthenticationGuard],component:CreateStudentsidComponent},
    {path:'sibling1',component:Sibling1Component},
    {path:'sibling2',component:Sibling2Component},
    {path:'parent',component:ParentComponent},
    {path:'child',component:ChildComponent},
    {path:'rating',component:RatingComponent},
    {path:'about-company',component:AboutCompanyComponent},
    {path:'about-ceo',component:AboutCeoComponent},
    {
      path: 'payment',
      loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule)
    }


  ]},
  {path:'**',component:ErrorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})], 
  exports: [RouterModule]
})
export class AppRoutingModule { }

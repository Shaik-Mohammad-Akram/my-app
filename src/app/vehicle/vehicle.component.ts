import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { CarouselsComponent } from '../carousels/carousels.component';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  vehicles:any=[];
  constructor(private _vehicleService:VehicleService){
    this.pageload();
  }
  pageload(){
    this._vehicleService.getVehicles().subscribe(
      (data:any)=>{
      this.vehicles=data;
       console.log(this.vehicles)
      }
    )
  }
  term:string='';
  filter(){
    this._vehicleService.getfilteredvehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles=data;
        console.log(this.vehicles);
      },(err:any)=>{
        alert('internal server error')
      }
    )
  }
  column:string='';
  order:string='';
  sort(){
    this._vehicleService.getsoretedvehicles(this.column,this.order).subscribe(
      (data:any)=>
      {
        this.vehicles=data;
        console.log(this.vehicles);
      },(err:any)=>{
        alert('internal server error')
      }
    )
  }
  limit:number=0;
  page:number=0;
  pagination(){
    this._vehicleService.getpaginatedvehicles(this.limit,this.page).subscribe(
      (data:any)=>{
        this.vehicles=data;
        console.log(this.vehicles);
      },(err:any)=>{alert('internal server error')}
    )
  }
  delete(id:number){
    if(confirm('Are you sure to delete?')==true){
      this._vehicleService.deletevehicle(id).subscribe(
        (data:any)=>{
          alert('Record Deleted succesfully');
          this.pageload();
        },(err:any)=>{
          alert('Internal server error')
        }
      )
    }
  }
}

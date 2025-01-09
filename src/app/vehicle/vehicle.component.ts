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
    _vehicleService.getVehicles().subscribe(
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
}

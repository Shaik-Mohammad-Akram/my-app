import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {
  vehicle:any=[];
  constructor(private _activateRoute:ActivatedRoute,private _vehicleservice:VehicleService){
    // for capturing id
    _activateRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        // for Api Calls from service
        _vehicleservice.getvehicle(data.id).subscribe(
          (data:any)=>{
            this.vehicle=data;
            console.log('data:',data)
          }
        )
      }
    )
  }
}

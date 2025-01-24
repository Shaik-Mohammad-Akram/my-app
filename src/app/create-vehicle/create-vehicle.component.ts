import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {
  id:number=0;
  constructor(private _activatedRoute:ActivatedRoute, private _vehicleservice:VehicleService, private _router:Router){
    // capturing the id
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
        // interagating api using get method
        _vehicleservice.getvehicle(data.id).subscribe(
          (data:any)=>{
            console.log(data);
            this.vehicleForm.patchValue(data);
          }
        )
      }
    )
  }
  public vehicleForm:FormGroup=new FormGroup(
    {
      Vehicle:new FormControl(),
      manufacturer:new FormControl(),
      model:new FormControl(),
      type:new FormControl(),
      fuel:new FormControl(),
      color:new FormControl(),
      image:new FormControl(),
      cost:new FormControl(),

    }
  )
  submit(){
    // upadte vehicle
    if(this.id){
      this._vehicleservice.updatevehicle(this.id,this.vehicleForm.value).subscribe(
        (data:any)=>{
          console.log(data);
          alert('Vehicle updated Sucessfully😍😍😍');
          // this._router.navigate(['/vehicle']);
          this._router.navigateByUrl("/dashboard/vehicle");
        },(err:any)=>{
          alert('internal server error');
        }
      )
    }else{
      console.log(this.vehicleForm.value);
      this._vehicleservice.createVehicle(this.vehicleForm.value).subscribe(
        (data:any)=>{
          console.log(data);
          alert('Vehicle Created Sucessfully😍😍😍');
          // this._router.navigate(['/vehicle']);
          this._router.navigateByUrl("/dashboard/vehicle");
        },(err:any)=>{
          alert('internal server error');
        }
      )
    }
   
  }
}

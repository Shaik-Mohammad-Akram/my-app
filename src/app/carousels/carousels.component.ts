import { Component } from '@angular/core';
import { CarouselsService } from '../carousels.service';

@Component({
  selector: 'app-carousels',
  templateUrl: './carousels.component.html',
  styleUrls: ['./carousels.component.css']
})
export class CarouselsComponent {
  carousels:any=[];
constructor(private _carouselsservice:CarouselsService){
_carouselsservice.getcarousels().subscribe(
  (data:any)=>{
    this.carousels=data;
  }
)
}
}

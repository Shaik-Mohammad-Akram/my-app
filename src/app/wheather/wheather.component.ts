import { Component } from '@angular/core';
import { WheatherService } from '../wheather.service';

@Component({
  selector: 'app-wheather',
  templateUrl: './wheather.component.html',
  styleUrls: ['./wheather.component.css']
})
export class WheatherComponent {
  wheathers:any={};
  date=new Date();
  constructor(private _wheatherservice:WheatherService){
    _wheatherservice.getwheather().subscribe(
      (data:any)=>{
        this.wheathers=data;
      }
    )
  }

}

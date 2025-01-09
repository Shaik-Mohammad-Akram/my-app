import { Component } from '@angular/core';
import { PinterestService } from '../pinterest.service';

@Component({
  selector: 'app-pinterest',
  templateUrl: './pinterest.component.html',
  styleUrls: ['./pinterest.component.css']
})
export class PinterestComponent {
  pics:any =[];
  constructor(private _pinterestservice:PinterestService){
     _pinterestservice.getpics().subscribe(
      (data:any)=>{
        this.pics=data;
        console.log(this.pics);
      }
     )
  }
}

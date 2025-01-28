import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component {
count:number=0;
constructor(private _commonService:CommonService){
  _commonService.countsub.subscribe(
    (data:any)=>{
      console.log(data);
      this.count=data;
    },(err:any)=>{
      alert('internal server error')
    }
  )
}
}


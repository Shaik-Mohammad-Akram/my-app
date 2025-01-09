import { Component } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
 products:any=[];
 constructor (private _flipkartservice:FlipkartService){
  _flipkartservice.getproducts().subscribe(
    (data:any)=>{
      this.products=data;
      console.log(this.products);
    }
  )
 }
}

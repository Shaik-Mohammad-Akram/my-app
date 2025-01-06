import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
age:number=69;

//variablename : datatype = initialvalue;

ages:number[]=[10,20,30,40,50];

state:string="Andhra"
states:string[]=['Andhra','Telegana','karnataka','tamil nadu','KERALA'];

products:any[]=[
  {Name:'book',price:50},
  {Name:'shirt',price:599},
  {Name:'Mobile',price:55000},
  {Name:'Bike',price:500000},
  {Name:'Car',price:5300000},

];
today:any=new Date();
}

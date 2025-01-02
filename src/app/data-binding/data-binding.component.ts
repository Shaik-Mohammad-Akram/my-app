import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  name:string='Akram';
  age:number=25;
  email:string='akram@gmail.com';
  isIndian:boolean=false;

  num1:number=0;
  num2:number=0;
  result:number=0;

  sum(){
    this.result=this.num1+this.num2;
    console.log(this.result);
  }
   phone:string='+91';

   
  user:any={
    name:'Akram',
  age:25,
  email:'akram@gmail.com',
  }
 submit(){
  alert('clicked submit button')
 }
 typing(){
  alert('typing.........')
 }
}

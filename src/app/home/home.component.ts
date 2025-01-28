import { Component } from '@angular/core';
import { Usesr } from '../usesr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
user:Usesr={
name:'',
age:0,
}
}

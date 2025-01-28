import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  moon:string='';
@Input()a:number=0;
@Output() bEvent:EventEmitter<number>=new EventEmitter()
send(){
  this.bEvent.emit(7097974046);
}


@Input()star:string='';
@Output() sEvent:EventEmitter<string>=new EventEmitter()
seend(){
  this.sEvent.emit(this.moon);
}
}

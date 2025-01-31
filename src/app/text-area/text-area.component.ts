import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent {
@Input()max:number=0;
text:string='';
len:number=0;
view(event:any){
  this.len=this.text.length
  if(this.len == this.max){
 alert('maximun limit completed')
  }
}
}

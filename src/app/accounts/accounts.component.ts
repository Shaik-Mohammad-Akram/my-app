import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  accounts:any=[];

constructor(private _accountservices:AccountsService){
  this.pageload();
}
pageload(){
  this._accountservices.getaccount().subscribe(
    (data:any)=>{
      this.accounts=data;
      console.log(this.accounts);
    },(err:any)=>{
      alert('internal server error')
    }
  )
}
term:string='';
filter(){
  this._accountservices.getfilteredaccounts(this.term).subscribe(
    (data:any)=>{
      this.accounts=data;
      console.log(this.accounts);

    },(err:any)=>{
      alert('internal server error')
    }
  )
}
column:string='';
order:string='';
sort(){
  this._accountservices.getsortedaccounts(this.column,this.order).subscribe(
    (data:any)=>{
      this.accounts=data;
      console.log(this.accounts);
    },(err:any)=>{
      alert('internal server error')
    }
  )
}
limit:number=0;
page:number=0;
pagination(){
  this._accountservices.getpaginatedaccounts(this.limit,this.page).subscribe(

    (data:any)=>{
      this.accounts=data;
      console.log(this.accounts);
    },(err:any)=>{
      alert('internal server error')
    }
  )
}

delete(id:number){
  if(confirm('Are you sure?')==true){
    this._accountservices.deleteaccounts(id).subscribe(
      (data:any)=>{
        alert('Your Account is succesfully Deleted😍');
        this.pageload();
      },(err:any)=>{
        alert('internal server error')
      }
     )
    }
  }
 
}

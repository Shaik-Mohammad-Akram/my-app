import { Component } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students:any=[];
  constructor(private _studentsservice:StudentsService){
   this.pageload();
  }
  pageload(){
    this._studentsservice.getstudentsdetails().subscribe(
      (data:any)=>{
        this.students=data;
        console.log(this.students);
      },(err:any)=>{
        alert('internal server error')
      }
    )
  }
  term:string='';
  filter(){
    this._studentsservice.getfilteredstudentsdetails(this.term).subscribe(
      (data:any)=>{
        this.students=data;
        console.log(this.students);
      },(err:any)=>{
        alert('internal server error')
      }
    )
  }
  column:string='';
  order:string='';
  sort(){
    this._studentsservice.getsoretedstudentsdetails(this.column,this.order).subscribe(
      (data:any)=>
      {
        this.students=data;
        console.log(this.students);
      },(err:any)=>{
        alert('internal server error')
      }
    )
  }
  limit:number=0;
  page:number=0;
  pagination(){
    this._studentsservice.getpaginatedstudentsdetails(this.limit,this.page).subscribe(
      (data:any)=>{
        this.students=data;
        console.log(this.students);
      },(err:any)=>{alert('internal server error')}
    )
  }
  delete(id:number){
    if(confirm('Are you sure to delete?')==true){
      this._studentsservice.deletestudentsdetails(id).subscribe(
        (data:any)=>{
          alert('Record Deleted succesfully');
          this.pageload();
        },(err:any)=>{
          alert('Internal server error')
        }
      )
    }
  }
}

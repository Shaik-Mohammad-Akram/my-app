import { Component } from '@angular/core';
import { StudentsService } from '../students.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-studentsid',
  templateUrl: './create-studentsid.component.html',
  styleUrls: ['./create-studentsid.component.css']
})
export class CreateStudentsidComponent {
 constructor(private _studentsservice:StudentsService, private _router:Router){}
 public StudentsForm:FormGroup= new FormGroup(
  {
    name:new FormControl(),
    city:new FormControl(),
    dob:new FormControl(),
    profile_picture:new FormControl(),
    phone:new FormControl(),
    email:new FormControl(),
  }
 )
 create(){
  console.log(this.StudentsForm.value);
  this._studentsservice.createstudentsdetails(this.StudentsForm.value).subscribe(
    (data:any)=>{
      alert('Student ID created successfully😍')
      this._router.navigateByUrl("/dashboard/students");

    },(err:any)=>{
      alert('internal server error');
    }
  )
 }

}

import { Component } from '@angular/core';
import { StudentsService } from '../students.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-create-studentsid',
  templateUrl: './create-studentsid.component.html',
  styleUrls: ['./create-studentsid.component.css']
})
export class CreateStudentsidComponent {
  id:number=0;
 constructor(private _studentsservice:StudentsService, private _router:Router,private _activateRoute:ActivatedRoute){
   // capturing the id
  _activateRoute.params.subscribe(
    (data:any)=>{
      console.log(data.id);
      this.id=data.id;
      // interagating api using get method
      _studentsservice.getstudentdetails(data.id).subscribe(
        (data:any)=>{
          console.log(data);
          this.StudentsForm.patchValue(data);
        },(err:any)=>{
          alert:('error')
        }
      )
    }
  )
 }
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
 submit(){
  if(this.id){
    this._studentsservice.updatestudentdetails(this.id,this.StudentsForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert('student Details updated Sucessfully😍😍😍');
        // this._router.navigate(['/vehicle']);
        this._router.navigateByUrl("/dashboard/students");
      },(err:any)=>{
        alert('internal server error');
      }
    )
  }else{
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


}

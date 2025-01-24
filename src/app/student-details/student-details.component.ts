import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  student:any=[];
  constructor(private _activateRoute:ActivatedRoute,private _studentsservice:StudentsService){
    // for capturing id
    _activateRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        // for Api Calls from service
        _studentsservice.getstudentdetails(data.id).subscribe(
          (data:any)=>{
            this.student=data;
            console.log('data:',data)
          }
        )
      }
    )
  }
}

import { Component } from '@angular/core';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
  blogs:any=[];
  constructor(private _blogsservice:BlogsService){
    _blogsservice.getblogs().subscribe(
      (data:any)=>{
        this.blogs=data;
        console.log(this.blogs);
      }
    )
  }
}

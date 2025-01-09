import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  movies:any=[];
constructor(private _moviesservice:MoviesService){
 _moviesservice.getmovies().subscribe(
  (data:any)=>{
    this.movies=data;
  }
 )
}
getstar(rating:number){
  return Math.floor(rating);
}
}


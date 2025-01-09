import { Component } from '@angular/core';
import { ProfilesService } from '../profiles.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent {
  profiles:any=[];
constructor(private _profilesservice:ProfilesService){
_profilesservice.getprofiles().subscribe(
  (data:any)=>{
    this.profiles=data;
  }
)
}
}

import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  public detailsform:FormGroup=new FormGroup({
    name:new FormControl(),
    class:new FormControl(),
    fathername:new FormControl(),
    email:new FormControl(),
    dob:new FormControl(),
    mobile:new FormControl('',[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
    address:new FormGroup({
      addressline:new FormControl(),
      city:new FormControl(),
      state:new FormControl(),
      pincode:new FormControl('',[Validators.required,Validators.min(100000),Validators.max(999999)]),
    }),
    type:new FormControl(),
    cards:new FormArray([]),

  });
  
  get cardFormArray(){
    return this.detailsform.get('cards') as FormArray
  }
  reportcard(){
    this.cardFormArray.push(
      new FormGroup({
        class:new FormControl(),
        year:new FormControl(),
        percentage:new FormControl(),
      })
    )
  }
  delete(i:number){
    this.cardFormArray.removeAt(i);

  }
  constructor(){
    this.detailsform.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data == 'dayscholar'){
          this.detailsform.addControl('busfee',new FormControl());
          this.detailsform.removeControl('hostelfee');
        }else{
          this.detailsform.addControl('hostelfee', new FormControl());
          this.detailsform.removeControl('busfee');
        }
      }
    );
    
  }
  create (){
    console.log(this.detailsform);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private _httpclient:HttpClient) { }
  getstudentsdetails():Observable<any>{
    return this._httpclient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student');
  }
  getfilteredstudentsdetails(term:string):Observable<any>{
    return this._httpclient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter='+term)
  }
  getsoretedstudentsdetails(column:string,order:string):Observable<any>{
    return this._httpclient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy='+column+'&order='+order);

  }
  getpaginatedstudentsdetails(limit:number,page:number):Observable<any>{
    return this._httpclient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit='+limit+'&page='+page);

  }
  deletestudentsdetails(id:number):Observable<any>{
    return this._httpclient.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/student/'+id);
  }
  createstudentsdetails(data:any):Observable<any>{
    return this._httpclient.post('https://6128991386a213001729f9df.mockapi.io/test/v1/student',data);
  }
  getstudentdetails(id:number):Observable<any>{
    return this._httpclient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student/'+id)
  }
  updatestudentdetails(id:number,data:any):Observable<any>{
    return this._httpclient.put('https://6128991386a213001729f9df.mockapi.io/test/v1/student/'+id,data)
  }
}

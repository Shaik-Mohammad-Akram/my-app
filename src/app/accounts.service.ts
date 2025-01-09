import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private _httpcilent:HttpClient) { }
getaccount():Observable<any>{
  return this._httpcilent.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals')
}
getfilteredaccounts(term:string):Observable<any>{
  return this._httpcilent.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter='+term)
}
getsortedaccounts(column:string,order:string):Observable<any>{
  return this._httpcilent.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy='+column+"&order="+order)
}
getpaginatedaccounts(limit:number,page:number):Observable<any>{
  return this._httpcilent.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit='+limit+"&page="+page);
}
deleteaccounts(id:number):Observable<any>{
  return this._httpcilent.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/principals/'+id)

}
}

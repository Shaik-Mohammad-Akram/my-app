import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private _httpClient:HttpClient) { }
  getVehicles():Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction')
  }
  getfilteredvehicles(term:string):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter='+term)
  }
  getsoretedvehicles(column:string,order:string):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy='+column+'&order='+order);

  }
  getpaginatedvehicles(limit:number,page:number):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit='+limit+'&page='+page);

  }
  deletevehicle(id:number):Observable<any>{
    return this._httpClient.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/'+id);
  }
  createVehicle(data:any):Observable<any>{
    return this._httpClient.post('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction',data);
  }
  getvehicle(id:number):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/'+id)
  }
  updatevehicle(id:number,data:any):Observable<any>{
    return this._httpClient.put('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/'+id,data)
  }
}

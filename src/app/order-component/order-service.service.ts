import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'text/plain',
      'Access-Control-Allow-Origin': '*',
      //'Access-Control-Allow-Credentials': 'true',
      //'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      //'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
      //'Authorization': 'my-auth-token'
    })
  };

  constructor(private _http: HttpClient) { }
  
  sharedMessage:any;
  razorUiPredefinedData:any;

  postData(data){
    console.log("postData  "+data)
    return this._http.post("http://aincworks.tech:8843/pay",data,this.httpOptions).pipe(map(result => result));
  }



}

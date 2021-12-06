import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(loginObj:any):Observable<any>{
    var url="http://localhost:3000/login";
    let header={'content-type':'application/json'};
    return this.http.post(url,loginObj,{'headers':header,responseType:'text'});
  }
  register(registerObj:any):Observable<any>{
    var url="http://localhost:3000/register";
    let header={'content-type':'application/json'};
    return this.http.post(url,registerObj,{'headers':header,responseType:'text'});
  }
}

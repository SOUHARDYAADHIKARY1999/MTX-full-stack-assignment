import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  
  constructor(private http:HttpClient) { }
  

  getAllPolicies():Observable<any>{
    var url="http://localhost:3000/getAllPolicies";
    return this.http.get(url);
  }

  getPolicyById(id:number):Observable<any>{
    var url="http://localhost:3000/getPolicyById/"+id;
    return this.http.get(url,{responseType:'text'});
  }

  insertPolicy(policyObj:any):Observable<any>{
    var url="http://localhost:3000/insertPolicyData";
    let header={'content-type':'application/json'};
    return this.http.post(url,policyObj,{'headers':header,responseType:'text'});
  }

  updatePolicy(policyObj:any):Observable<any>{
    var url="http://localhost:3000/updatePolicyData";
    let header={'content-type':'application/json'};
    return this.http.put(url,policyObj,{'headers':header,responseType:'text'});
  }

  deletePolicy(id:number):Observable<any>{
    var url="http://localhost:3000/deletePolicyData/"+id;
    return this.http.delete(url,{responseType:'text'});
  }
  
}

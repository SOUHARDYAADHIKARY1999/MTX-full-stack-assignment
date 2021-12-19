import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Policy } from '../models/policy.model';
import { PolicyService } from '../services/policy.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {

  constructor(private policyService:PolicyService,) { }
  arrPolicy:any =[];
  policyNumber:string="";
  name:string="";
  amount:string="";
  matAmount:string="";
  nominee:string="";
  search_name:any;

  policy:Policy[]=[];

  action:boolean=true;

  ngOnInit(): void {
    //this.getAllPolicies();
  }
  getAllPolicies(){
    console.log("Hello");
    console.log(this.matAmount);
    console.log(this.policyService.getAllPolicies());
    this.policyService.getAllPolicies().subscribe(
      (res)=>{
        //console.log("Recieved data"+JSON.stringify(data));
        this.arrPolicy=res;
      },
      (error)=>console.log(error)
    )
  }
  insertPolicyData(){
    let policyObj={
        "PolicyNumber": this.policyNumber,
        "Name": this.name,
        "Amount": this.amount,
        "MaturityAmount": this.matAmount,
        "Nominee": this.nominee
    }
    console.log(policyObj);
    this.policyService.insertPolicy(policyObj).subscribe((data)=>{
      this.getAllPolicies();
    },
    (error)=>console.log("Unable to insert record",error)
    )
  }
  onEdit(id:number){
    console.log(id);
    this.action=false;
    interface policyObj{
      "PolicyNumber": any,
      "Name": string,
      "Amount": any,
      "MaturityAmount": any,
      "Nominee": string
    }
    this.policyService.getPolicyById(id).subscribe(
      (data)=>{
        console.log(data);
        let obj: policyObj=JSON.parse(data);
        //console.log(typeof(policyObj1));
        this.policyNumber=obj.PolicyNumber;
        this.name=obj.Name;
        this.amount=obj.Amount;
        this.matAmount=obj.MaturityAmount;
        this.nominee=obj.Nominee;
      },
      (error)=>console.log("Unable to insert record",error)
    )
  }
  updatePolicyData(){
    let policyObj={
      "PolicyNumber": this.policyNumber,
      "Name": this.name,
      "Amount": this.amount,
      "MaturityAmount": this.matAmount,
      "Nominee": this.nominee
    }
    this.policyService.updatePolicy(policyObj).subscribe(
      (data)=>{
        this.getAllPolicies();
      },
      (error)=>console.log("Unable to update the record",error)
    )
    this.action=true;
    this.policyNumber="";
    this.name="";
    this.amount="";
    this.matAmount="";
    this.nominee="";
  }
  /*getPolicyWithId(id:number):any{
    this.policyService.getPolicyById(id).subscribe(
      (data)=>{
        //console.log("Recieved data:"+JSON.stringify(data));
        console.log(data);
        return JSON.stringify(data);
      },
      (error)=>console.log("Unable to insert record",error)
    )
  }*/
  search(){
    if(this.search_name==""){
      this.getAllPolicies();
    }
    else{
      console.log("lp");
      this.arrPolicy=this.arrPolicy.filter((res: { Name: string; })=>{
        return res.Name.toLocaleLowerCase().match(this.search_name.toLocaleLowerCase());
      })
    }
  } 
  key:string='id';
  reverse:boolean=false;
  sort(key:string){
    this.key=key;
    this.reverse=!this.reverse
  }


  onDelete(id:number){
    this.policyService.deletePolicy(id).subscribe(
      (data)=>{
        console.log("Deleted data"+JSON.stringify(data));
        this.getAllPolicies();
      },
      (error)=>console.log("Error occured"+JSON.stringify(error))
    )
  }

}

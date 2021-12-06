import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService) { }
  user_Id:any;
  password:string="";

  ngOnInit(){
    //this.loggedIn();
  } 
  loggedIn(){
    let loginObj={
      "User_ID": this.user_Id,
      "Password": this.password
    }
    this.authService.login(loginObj).subscribe((data)=>{
        this.router.navigateByUrl('/policies');
    },
    (error)=>console.log("Unable to insert record",error))

    
  }

}

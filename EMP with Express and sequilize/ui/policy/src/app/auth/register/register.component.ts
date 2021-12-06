import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService) { }
  
  user_Id:any;
  password:string="";
  role:string="";

  ngOnInit(): void {
  }

  Register(){
    let loginObj={
      "User_ID": this.user_Id,
      "Password": this.password,
      "Role": this.role
    }
    this.authService.register(loginObj).subscribe((data)=>{
        this.router.navigateByUrl('/login');
    },
    (error)=>console.log("Unable to insert record",error))

    
  }
}

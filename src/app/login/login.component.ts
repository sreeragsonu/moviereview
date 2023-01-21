import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username="";
  password="";
  //errormsg occuer when there is no text in username and password
  errorMsg="";
  
constructor(private auth: AuthService, private router:Router){}
  login(){
    if (this.username.trim().length===0){
      this.errorMsg="Username is Requird";
    }
    else if(this.password.trim().length===0){
      this.errorMsg="Password is required";
    }
    else{
      this.errorMsg="";
      let res=this.auth.login(this.username,this.password);
      if (res===200){
        this.router.navigate(['home']);
      }
      if (res===403){
        this.errorMsg='Invalied Credentials';
      }
    }
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(uname: string, pword: string){
    if(uname==='sonu' && pword==='1234'){
      return 200;
    }else{
      return 403;
    }
  }
  logout(){
    //press logout go to login page
   this.router.navigate(['login']);
  }
}

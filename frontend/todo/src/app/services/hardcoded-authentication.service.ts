import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string){
    if(username=="in28minutes" && password=="123"){
      sessionStorage.setItem('authenticatedUser',username)
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user==null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }
}

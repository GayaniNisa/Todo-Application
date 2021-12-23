import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeJWTAuthenticationService(username:string,password:string){
    
    return this.http.post<any>(`${API_URL}/authenticate`,{username:username,password:password}).pipe(
      map(
        data=>{
          sessionStorage.setItem('authenticatedUser',username)
          sessionStorage.setItem('token',`Bearer ${data.token}`)
          console.log(typeof(sessionStorage.getItem('token')))
          return data
        }
      )
    )
  }

  executeAuthenticationService(username:string,password:string){
    let basicAuthHeaderString = "Basic "+window.btoa(username+":"+password)
    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,{headers:header}).pipe(
      map(
        data=>{
          sessionStorage.setItem('authenticatedUser',username)
          sessionStorage.setItem('token',basicAuthHeaderString)
          console.log(typeof(sessionStorage.getItem('token')))
          return data
        }
      )
    )
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticatedUser')
  }

  getAuthenticatedToken(){
    // if(this.getAuthenticatedUser())
    //   return sessionStorage.getItem('token')      
    return sessionStorage.getItem('token')
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user==null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
    sessionStorage.removeItem('token')
  }
}

class AuthenticationBean{
  constructor(public message:string){}
}
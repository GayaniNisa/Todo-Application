import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { BasicAuthenticationService } from '../services/basic-authentication.service';
import { HardcodedAuthenticationService } from '../services/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "in28minutes"
  password = ''
  errorMessage = ""
  invalidLogin = false

  constructor(private router: Router,private hardcodedAuthentication:HardcodedAuthenticationService,private basicAuthenticationService:BasicAuthenticationService) { }

  ngOnInit(): void {
  }

  // handleLogin(){
  //   // if(this.username=="in28minutes" && this.password=="123"){
  //   if(this.hardcodedAuthentication.authenticate(this.username,this.password)){
  //     this.invalidLogin=false
  //     this.router.navigate(['welcome',this.username])
  //   }else{
  //     this.errorMessage="username or password is not valid"
  //     this.invalidLogin=true
  //   }
  // }

  handleBasicAuthLogin(){
    // if(this.username=="in28minutes" && this.password=="123"){
    this.basicAuthenticationService.executeAuthenticationService(this.username,this.password).subscribe(
      data=>{
        console.log(data)
        this.invalidLogin=false
        this.router.navigate(['welcome',this.username])
      },
      error=>{
        console.log(error)
        this.errorMessage="username or password is not valid"
        this.invalidLogin=true
      }
    )
    
  }

  handleJWTAuthLogin(){
    // if(this.username=="in28minutes" && this.password=="123"){
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username,this.password).subscribe(
      data=>{
        console.log(data)
        this.invalidLogin=false
        this.router.navigate(['welcome',this.username])
      },
      error=>{
        console.log(error)
        this.errorMessage="username or password is not valid"
        this.invalidLogin=true
      }
    )
    
  }
}

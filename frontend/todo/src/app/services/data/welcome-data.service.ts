import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';

class HelloWorldBeanResponse{
  constructor(public message:string){

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  // error 1 without adding auth headder for request

  // Access to XMLHttpRequest at 'http://localhost:8080/hello-world-bean/in28minutes' from origin 'http://localhost:4200'
  // has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

  // error 2 After adding basic auth header to the request

  // Access to XMLHttpRequest at 'http://localhost:8080/hello-world-bean/in28minutes' from origin 'http://localhost:4200' 
  // has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.

  executeHelloWorldBeanService(name:string){
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader()
    // let header = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })

    // return this.http.get<HelloWorldBeanResponse>(`http://localhost:8080/hello-world-bean/${name}`,{headers:header})
    return this.http.get<HelloWorldBeanResponse>(`${API_URL}/hello-world-bean/${name}`)

  }

  createBasicAuthenticationHttpHeader(){
    // let username = "in28minutes"
    // let password = "123"

    // let basicAuthHeaderString = "Basic "+window.btoa(username+":"+password)
    // return basicAuthHeaderString
  }
}

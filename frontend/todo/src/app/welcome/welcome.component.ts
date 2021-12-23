import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../services/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = ''
  welcomeMsg: string = ''

  constructor(private route:ActivatedRoute, private welcomeDataService: WelcomeDataService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMsg(){
    this.welcomeDataService.executeHelloWorldBeanService(this.name).subscribe(
      data =>{
        this.welcomeMsg = data.message
      },
      error=>{
        this.welcomeMsg = error.error.message
      }
    )
  }

}

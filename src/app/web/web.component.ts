import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-web',
  template: `

  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<body>

<!-- Sidebar -->
<div class="w3-sidebar w3-light-grey w3-bar-block" style="width:25%">
<img class="left" src="https://vignette.wikia.nocookie.net/logopedia/images/f/f0/Washington_capitals_alternate_logo.gif/revision/latest?cb=20130929140614" width="50" height="50"><br><br><br>

  <a (click)="profile()" class="w3-bar-item w3-button">Profile</a>
  <a (click)="school()" class="w3-bar-item w3-button">School</a>
  <a (click)="college()" class="w3-bar-item w3-button">College</a>
  <a (click)="dashboard()" class="w3-bar-item w3-button">Dashboard</a>
</div>


<div style="margin-left:25%">

<div class="w3-container w3-teal">
<h2>{{this.id}}</h2>
  </div>
  <button class="button" (click)="logout()">Logout</button>
 

    <router-outlet></router-outlet>
  `,
  styles: [
    `.button{
      float:right;
    }
    h2
    {
float:right;
    }
    .left{
      float:left;
    }

   `
  ]
})
export class WebComponent implements OnInit {
  public id;

  constructor(private router: Router, private _dataService: DataService) { }

  ngOnInit() {

    this.id = this._dataService.username;
  }
  profile() {

   
    this.router.navigate(['/web/profile']);

  }
  school(){
    this.router.navigate(['/web/school']);
    
  }
  dashboard(){
    this.router.navigate(['/web/dashboard']);
  }
  college(){
    this.router.navigate(['/web/college']);
  }
  logout(){
    this.router.navigate(['/login']);
  }

}

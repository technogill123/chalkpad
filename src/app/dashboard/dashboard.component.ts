import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-dashboard',
  template: `

  <div class="button" *ngIf="detail.name === '' ">
  <button (click)="Details()">Add my details</button>
   </div>
  <div class="form" *ngIf="detail.name !== '' ">
  <h3>Name: {{detail.name}}</h3>
  <h3>Age: {{detail.age}}</h3>
  </div>
  `,
  styles: [
    `
    .form,.button
    {
      position: relative;
      left: 250px;
      top:250px;
    }
    `
  ]
})
export class DashboardComponent implements OnInit {
  public detail;

  constructor(private router:Router,private _profileService: ProfileService) { }

  ngOnInit() {
this.detail=this._profileService.details;

  }
  Details(){this.router.navigate(['/web/profile']);


  }

}

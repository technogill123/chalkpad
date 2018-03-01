import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  template: `<img class="left" src="https://vignette.wikia.nocookie.net/logopedia/images/f/f0/Washington_capitals_alternate_logo.gif/revision/latest?cb=20130929140614" width="50" height="50"><br><br><br>
  <h1 align="center">LOGIN</h1>
  <table frame = "box" align="center" cellspacing = "50">
  <tr>
  <th>username <input [(ngModel)]="id" type="text"  ></th>
  </tr>
  <tr>
  <th>password <input [(ngModel)]="pass" type ="password" ></th>
  </tr>
  <tr>
  <button (click)="onclick()">enter</button>
  </tr>
</table>
  `,
  styles: [`
  .left{
    float:left;
  }
  
  `]
})
export class LoginComponent implements OnInit {
  public id;
  public pass;
  constructor(private router: Router, private _dataService: DataService) { }

  ngOnInit() {
  }
  onclick(){
    
     if(this.id==this.pass)
      {
        this._dataService.username=this.id;
        this.router.navigate(['/web/dashboard']);
    
      }
    
  }

  }





























































































































































































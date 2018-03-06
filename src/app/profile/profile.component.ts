import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  template: `
  
<div class="forms" *ngIf="showdetail">

<label>My Name:</label>
<input  [(ngModel)]=name type="text" ><br>
<label>My Age:</label>
<input  [(ngModel)]=age type="text"><br>
<label>Father's Name:</label>
<input  [(ngModel)]=Father_Name type="text"><br>
<label>Mother's Name:</label>
<input  [(ngModel)]=Mother_Name type="text"><br>
<button (click)="save(Mother_Name)" type="submit">Save</button>

</div>
<div class="forms" *ngIf="!showdetail">
<label>Name:</label> 
{{detail.name}}<br>
<label>Age:</label> 
{{detail.age}}<br>
<label>Father's Name:</label> 
{{detail.Father_Name}}<br>
<label>Mother's Name:</label> 
{{detail.Mother_Name}}<br>
<button (click)="update()" type="submit">Update</button>
</div>

  `,
  styles: [
    `
    .forms
    {
      position: relative;
      left: 250px;
      top:250px;
      width: 400px;
    }
    label,h3 { float: left; width: 150px; }
    input { float: left; width: 250px; }
    `
  ]
})
export class ProfileComponent implements OnInit {
  public showdetail = true;
  public name = '';
  public age = '';
  public Father_Name = '';
  public Mother_Name = '';
  public detail;

  constructor(private router: Router, private _profileService: ProfileService) { }

  ngOnInit() {
    this.detail = this._profileService.getdata();
    if (this.detail.name === '' || this.detail.name==undefined) {
      this.showdetail = true;
    } else {
      this.showdetail = false;
      this.initUpdateState();
    }
  }

  initUpdateState() {
    this.name = this.detail.name;
    this.age = this.detail.age;
    this.Father_Name = this.detail.Father_Name;
    this.Mother_Name = this.detail.Mother_Name;
  }

  save() {
    let details =
      {
        "name": this.name,
        "age": this.age,
        "Father_Name": this.Father_Name,
        "Mother_Name": this.Mother_Name
      }
    this._profileService.setdata(details);
    this.detail = this._profileService.getdata();
    this.showdetail = false;
  }

  update() {
    this.initUpdateState();
    this.showdetail = true;
  }
}



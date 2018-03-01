import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollegeService } from '../college.service';
@Component({
  selector: 'app-college',
  template: `
  <div class="form" *ngIf="showdetail">
  
  <label>College Name:</label>
  <input [(ngModel)]=College_Name type="text" ><br>
  <label>Address:</label>
  <input [(ngModel)]=Address type="text" ><br>
  <label>CGPA:</label>
  <input [(ngModel)]=cgpa type="float"><br>
  <button (click)="save()" type="submit">Save</button>
  
  </div>
  
<div class="form" *ngIf="!showdetail">
<label>College Name:</label>
{{collegedetailss.College_Name}}<br>
<label>Address:</label> 
{{collegedetailss.Address}}<br>
<label>CGPA:</label> 
{{collegedetailss.cgpa}} <br>
<button (click)="update()" type="submit">Update</button>
</div>

  `,
  styles: [
    `
    .form
    {
      position: relative;
      left: 250px;
      top:250px;
      width: 400px;
    }

    label { float: left; width: 150px; }

    input{ float: left; width: 250px; }
    `
  ]
})
export class CollegeComponent implements OnInit {
  public showdetail = true;
  public collegedetailss;
  public College_Name;
  public Address;
  public cgpa;
  constructor(private router: Router, private _collegeService: CollegeService) { }

  ngOnInit() {
    this.collegedetailss = this._collegeService.collegedetails;
    if (this.collegedetailss.College_Name == '') {
      this.showdetail = true;
    }
    else {
      this.showdetail = false;
      this.College_Name = this._collegeService.collegedetails.College_Name;
      this.Address = this._collegeService.collegedetails.Address;
      this.cgpa = this._collegeService.collegedetails.cgpa;
    }
  }
  save() {
    let collegedetail =
      {
        "College_Name": this.College_Name,
        "Address": this.Address,
        "cgpa": this.cgpa
      }
    this._collegeService.collegedetails = collegedetail;
    this.collegedetailss = this._collegeService.collegedetails
    this.showdetail = false;

  }
  update() {
    this.showdetail = true;
  }

}

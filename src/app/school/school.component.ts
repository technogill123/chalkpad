import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-school',
  template: `
 
  <div class="form" *ngIf="showdetail">
<label>School Name:</label>
<input [(ngModel)]=School_Name type="text" ><br>
<label>Address:</label>
<input [(ngModel)]=Address type="text" ><br>
<label>Marks:</label>
<input [(ngModel)]=Marks type="number"><br>
<button (click)="save()" type="submit">Save</button>
</div>


<div class="form" *ngIf="!showdetail">
<label>School Name: </label>
{{schooldetails.School_Name}}<br>
<label>Address: </label>
{{schooldetails.Address}}<br>
<label>Marks:</label> 
{{schooldetails.Marks}}%<br>
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

    input{ float: left; width: 250px; }`
  ]
})
export class SchoolComponent implements OnInit {
  showdetail = true;
  public School_Name;
  public Address;
  public Marks;
  public schooldetails;
  constructor(private router: Router, private _schoolService: SchoolService) { }

  ngOnInit() {
    this.schooldetails = this._schoolService.schooldetails;
    this.schooldetails=this._schoolService.getschooldata();
    if(this.schooldetails.School_Name=='')
    {
      this.showdetail=true;
    }
    else{
      this.showdetail=false;
 this.updateState();
    }
  }
  updateState(){
    this.School_Name = this.schooldetails.School_Name;
    this.Address = this.schooldetails.Address;
    this.Marks = this.schooldetails.Marks;
  }

  save() {
    {
      let schooldetail =
        {
          "School_Name": this.School_Name,
          "Address": this.Address,
          "Marks": this.Marks
        }
        this._schoolService.setschooldata(schooldetail);
      this._schoolService.schooldetails = schooldetail;
      this.schooldetails = this._schoolService.schooldetails;
      this.showdetail=false;
    }
  }
  update(){
    this.updateState();
    this.showdetail=true;
  }
}

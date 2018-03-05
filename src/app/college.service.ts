import { Injectable } from '@angular/core';

@Injectable()
export class CollegeService {
  collegedetails=
  {
    "College_Name":'' , 
    "Address": '',
    "cgpa": '',
    
  }
  constructor() { }
  getcollegedetail(){
    return this.collegedetails;
}
setcollegedata(newcollegedetails){
  this.collegedetails=newcollegedetails;
  localStorage.setItem('My_College_Data',JSON.stringify(newcollegedetails));
  }
  getcollegedata(){
    return JSON.parse(localStorage.getItem('My_College_Data'));
  }
}

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
}

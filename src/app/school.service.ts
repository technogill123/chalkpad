import { Injectable } from '@angular/core';

@Injectable()
export class SchoolService {
  schooldetails=
  {
    "School_Name":'' , 
    "Address": '',
    "Marks": '',
    
  }
  constructor() { }
  getschooldetail(){
    return this.schooldetails;
}
}

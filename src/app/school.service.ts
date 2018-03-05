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
setschooldata(newschooldetails){
this.schooldetails=newschooldetails;
localStorage.setItem('My_School_Data',JSON.stringify(newschooldetails));
}
getschooldata(){
  return JSON.parse(localStorage.getItem('My_School_Data'));
  
  }
}

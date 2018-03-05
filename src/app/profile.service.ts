import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {

  details =
    {
      "name": '',
      "age": '',
      "Father_Name": '',
      "Mother_Name": ''
    }

  constructor() { }

  getstudetail() {
    return this.details;
  }

  setdata(newdetails) {
    this.details = newdetails;
    localStorage.setItem('My_Data', JSON.stringify(newdetails));
  }

  getdata() {
    return JSON.parse(localStorage.getItem('My_Data')) || {};
  }
}

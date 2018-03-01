import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {
details=
  {
    "name":'' , 
    "age": '',
    "Father_Name": '',
    "Mother_Name":''
  }

  constructor() { }
  getstudetail(){
    return this.details;

}
}

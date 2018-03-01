import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
username='';
  constructor() { }
  getdata(){
    return this.username;
    
      }
    
    }
    
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
username='';
  constructor() { }
  getdata(){
    return this.username;
    
      }
      setlogindata(newlogindetails){
        this.username=newlogindetails;
        localStorage.setItem('My_Login_Data',newlogindetails);
        }
        getlogindata(){
          return localStorage.getItem('My_Login_Data');
          
          }
    
    }
    
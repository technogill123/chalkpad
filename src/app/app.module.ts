import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{ AppRoutingModule,routingComponents } from './app-routing.module';
import{DataService} from './data.service';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import{CommonModule} from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { WebComponent } from './web/web.component';
import { ProfileService } from './profile.service';
import { SchoolComponent } from './school/school.component';
import {SchoolService } from './school.service';
import { CollegeComponent } from './college/college.component';
import {CollegeService } from './college.service';
@NgModule({
  declarations: [
    AppComponent,
  
    ...routingComponents,
  
    WebComponent,
  
    SchoolComponent,
  
    CollegeComponent,
  
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,CommonModule,
    FormsModule
  ],
  providers: [DataService,ProfileService,SchoolService,CollegeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

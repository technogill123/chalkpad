import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent} from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WebComponent } from './web/web.component';
import { SchoolComponent } from './school/school.component';
import { CollegeComponent } from './college/college.component';


const routes: Routes = [ 
  {path : '', redirectTo : "login",pathMatch:'full'},
  {path : 'login', component: LoginComponent},
  {path : 'web', component: WebComponent, 
  children:[
    {path : 'dashboard', component: DashboardComponent},
    {path : 'profile', component: ProfileComponent},
    {path : 'school', component: SchoolComponent},
    {path : 'college', component: CollegeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[LoginComponent,DashboardComponent,ProfileComponent,WebComponent,SchoolComponent,CollegeComponent]
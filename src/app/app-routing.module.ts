import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes = [
  {path: 'home', component : HomeComponent},
  {path: 'dashboard', component : DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }

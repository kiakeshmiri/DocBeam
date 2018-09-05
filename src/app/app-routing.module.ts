import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes = [
  {path: 'dashboard', component : DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }

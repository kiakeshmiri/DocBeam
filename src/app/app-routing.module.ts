import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RootComponent } from './dashboard/root/root.component';

const routes = [
  {path: '', component : HomeComponent},
  // {path: 'dashboard', component : RootComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }

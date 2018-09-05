import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RootComponent } from './root/root.component';
import { routing } from './dashboard.routing';
import { FormsModule } from '@angular/forms';
import { AutoGuard } from '../auth.guard';
import { DashboardService } from './services/dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
  ],
  declarations: [HomeComponent, RootComponent],
  exports:  [],
  providers: [AutoGuard, DashboardService]
})
export class DashboardModule { }

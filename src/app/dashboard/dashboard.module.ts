import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { RootComponent } from './root/root.component';
import { AuthGuard } from '../auth.guard';
import { MatCommonModule } from '@angular/material';
import { DashboardComponent } from './dashboard.component';
import { MatComponentsModule } from '../mat-components/mat-components.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCommonModule,
    MatComponentsModule
  ],
  declarations: [RootComponent, DashboardComponent],
  providers: [AuthGuard]
})
export class DashboardModule { }

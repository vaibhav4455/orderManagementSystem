import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardActionComponent } from './components/dashboard-action/dashboard-action.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardActionComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

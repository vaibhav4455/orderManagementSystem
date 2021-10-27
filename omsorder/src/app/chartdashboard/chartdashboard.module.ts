import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartdashboardRoutingModule } from './chartdashboard-routing.module';
import { ChartdashboardComponent } from './components/chartdashboard/chartdashboard.component';


@NgModule({
  declarations: [
    ChartdashboardComponent
  ],
  imports: [
    CommonModule,
    ChartdashboardRoutingModule
  ]
})
export class ChartdashboardModule { }

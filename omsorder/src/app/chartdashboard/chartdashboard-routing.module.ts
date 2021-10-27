import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartdashboardComponent } from './components/chartdashboard/chartdashboard.component';

const routes: Routes = [
  {path:'chartboard',
component:ChartdashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartdashboardRoutingModule { }

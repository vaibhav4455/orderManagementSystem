import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddorderComponent } from './addorder/components/addorder/addorder.component';
import { ChartdashboardModule } from './chartdashboard/chartdashboard.module';
import { CompletedordersModule } from './completedorders/completedorders.module';
import { EditinventoryModule } from './editinventory/editinventory.module';
import { DashboardComponent } from './omsdashboard/components/dashboard/dashboard.component';
import { DashboardModule } from './omsdashboard/dashboard.module';
import { ViewordersModule } from './pendingorder/vieworders.module';
import { ViewpendingordersModule } from './viewpendingorders/viewpendingorders.module';

const routes: Routes = [{
  path:'omsdashboard', 
  loadChildren: () => import('./omsdashboard/dashboard.module').then((m) =>DashboardModule)
},
{path:'pendingorders',
loadChildren: () => import('./pendingorder/vieworders.module').then((m) =>ViewordersModule) },
{path:'viewpendingorders',
loadChildren: () => import('./viewpendingorders/viewpendingorders.module').then((m) =>ViewpendingordersModule)},
{path:'completeorders',
loadChildren: () => import('./completedorders/completedorders.module').then((m) =>CompletedordersModule)},{
  path:'editinventory',
  loadChildren: () => import('./editinventory/editinventory.module').then((m) =>EditinventoryModule)
},
{path:'chartdashboard',
    loadChildren: () => import('./chartdashboard/chartdashboard.module').then((m) => ChartdashboardModule)
  },
  {
    path: 'addorder',
    component: AddorderComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

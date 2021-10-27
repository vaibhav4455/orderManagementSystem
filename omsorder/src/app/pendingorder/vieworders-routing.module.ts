import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewpendingordersModule } from '../viewpendingorders/viewpendingorders.module';
import { PendingordersComponent } from './components/pendingorders/pendingorders.component';

const routes: Routes = [
  {
  path:'pending',
  component: PendingordersComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewordersRoutingModule { }

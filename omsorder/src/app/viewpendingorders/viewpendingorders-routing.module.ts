import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewpendingorderComponent } from './components/viewpendingorder/viewpendingorder.component';

const routes: Routes = [
  {path:'viewpending',
component:ViewpendingorderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewpendingordersRoutingModule { }

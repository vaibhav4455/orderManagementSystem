import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewpendingordersRoutingModule } from './viewpendingorders-routing.module';
import { ViewpendingorderComponent } from './components/viewpendingorder/viewpendingorder.component';


@NgModule({
  declarations: [
    ViewpendingorderComponent
  ],
  imports: [
    CommonModule,
    ViewpendingordersRoutingModule
  ]
})
export class ViewpendingordersModule { }

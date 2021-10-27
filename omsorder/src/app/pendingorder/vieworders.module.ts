import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewordersRoutingModule } from './vieworders-routing.module';
import { PendingordersComponent } from './components/pendingorders/pendingorders.component';


@NgModule({
  declarations: [
    PendingordersComponent
  ],
  imports: [
    CommonModule,
    ViewordersRoutingModule
  ]
})
export class ViewordersModule { }

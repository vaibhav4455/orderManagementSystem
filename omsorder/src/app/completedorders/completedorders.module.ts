import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompletedordersRoutingModule } from './completedorders-routing.module';
import { CompleteordersComponent } from './components/completeorders/completeorders.component';


@NgModule({
  declarations: [
    CompleteordersComponent
  ],
  imports: [
    CommonModule,
    CompletedordersRoutingModule
  ]
})
export class CompletedordersModule { }

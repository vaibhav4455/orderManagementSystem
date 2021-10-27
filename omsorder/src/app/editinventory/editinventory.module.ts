import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditinventoryRoutingModule } from './editinventory-routing.module';
import { EditinventoryComponent } from './components/editinventory/editinventory.component';


@NgModule({
  declarations: [
    EditinventoryComponent
  ],
  imports: [
    CommonModule,
    EditinventoryRoutingModule
  ]
})
export class EditinventoryModule { }

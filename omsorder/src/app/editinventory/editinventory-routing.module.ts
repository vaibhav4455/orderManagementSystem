import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditinventoryComponent } from './components/editinventory/editinventory.component';

const routes: Routes = [
  {path:'editinventory',
component:EditinventoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditinventoryRoutingModule { }

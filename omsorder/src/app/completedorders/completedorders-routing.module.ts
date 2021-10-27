import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompleteordersComponent } from './components/completeorders/completeorders.component';

const routes: Routes = [
  {path:'completeorders',
component:CompleteordersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompletedordersRoutingModule { }

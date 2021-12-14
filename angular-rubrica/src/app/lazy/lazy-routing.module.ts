import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestcComponent } from './testc/testc.component';

const routes: Routes = [
  {path: '', component: TestcComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }

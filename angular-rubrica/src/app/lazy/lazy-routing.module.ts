import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginazioneComponent } from './paginazione/paginazione.component';

const routes: Routes = [
  {path: '', component: PaginazioneComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }

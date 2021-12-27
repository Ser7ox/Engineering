import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyRoutingModule } from './lazy-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PaginazioneComponent } from './paginazione/paginazione.component';


@NgModule({
  declarations: [PaginazioneComponent],
  imports: [
    CommonModule,
    LazyRoutingModule,
    SharedModule
  ],
  exports: [PaginazioneComponent]
})
export class LazyModule { }

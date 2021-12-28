import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyRoutingModule } from './lazy-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PaginazioneComponent } from './components/paginazione/paginazione.component';
import { PostsDetailsComponent } from './components/posts-details/posts-details.component';


@NgModule({
  declarations: [PaginazioneComponent, PostsDetailsComponent],
  imports: [
    CommonModule,
    LazyRoutingModule,
    SharedModule
  ],
  exports: [PaginazioneComponent, PostsDetailsComponent]
})
export class LazyModule { }

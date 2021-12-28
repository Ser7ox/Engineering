import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginazioneComponent } from './components/paginazione/paginazione.component';
import { PostsDetailsComponent } from './components/posts-details/posts-details.component';
import { FetchDataResolver } from './fetch-data.resolver';

const routes: Routes = [
  { path: '', component: PaginazioneComponent },
  { path: 'details', children: [
    { path: '', component: PostsDetailsComponent},
    { path: ':id', component: PostsDetailsComponent, resolve: { dataResolver: FetchDataResolver }}],}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'persona', loadChildren: () => import('./persona/persona.module').then(m => m.PersonaModule)},
  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)},
  { path: '**',   redirectTo: '/rubrica' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './_components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'persona', loadChildren: () => import('./persona/persona.module').then(m => m.PersonaModule),canActivate:[AuthGuard]},
  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule),canActivate:[AuthGuard]},
  { path: '**',   redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

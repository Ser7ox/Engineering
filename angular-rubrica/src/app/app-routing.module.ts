import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertComponent } from './components/alert/alert.component';
import { FormComponent } from './components/form/form.component';
import { RubricaComponent } from './components/rubrica/rubrica.component';

const routes: Routes = [
  { path: 'rubrica', component: RubricaComponent},
  { path: 'form',  
    children: [
      { path: '', component: FormComponent, data :{ title:"Crea contatto"}},
      { path: ':id', component: FormComponent, data :{ title:"Modifica contatto"}},
    ]
  },
  { path: '**',   redirectTo: '/rubrica' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

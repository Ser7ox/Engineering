import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { RubricaComponent } from './components/rubrica/rubrica.component';

const routes: Routes = [
  { path: 'rubrica', component: RubricaComponent },
  { path: 'form',  
    children: [
      { path: '', 
      children: [
        {path: ':titleNew', component: FormComponent },
      ] },
      { path: ':id',
      children: [
        { path: ':titleEdit', component: FormComponent },
      ]}
    ]
  }, 
  { path: '**',   redirectTo: '/rubrica' }, 
  // devi passare come route parameter due valori diversi, crea contatto o modifica contatto, prendere
  // route parameter da qui e mostrarlo nell'html. 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

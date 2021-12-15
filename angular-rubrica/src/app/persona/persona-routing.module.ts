import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { RubricaComponent } from './components/rubrica/rubrica.component';

const routes: Routes = [
  {path: 'rubrica', component: RubricaComponent},
  {path: 'form', children: [ 
    { path: '', component: FormComponent, data :{ title:"Crea contatto"}},
    { path: ':id', component: FormComponent, data :{ title:"Modifica contatto"}}],}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaRoutingModule { }

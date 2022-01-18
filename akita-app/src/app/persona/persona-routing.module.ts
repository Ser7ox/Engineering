import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/table/form/form.component';
import { TableComponent } from './components/table/table.component';
import { UserCardComponent } from './components/table/user-card/user-card.component';

const routes: Routes = [
  {path: 'table', component: TableComponent},
  {path: 'card', component: UserCardComponent},
  {path: 'form', children: [ 
    { path: '', component: FormComponent, data :{ title:"Crea contatto"}},
    { path: ':id', component: FormComponent, data :{ title:"Modifica contatto"}}],}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaRoutingModule { }
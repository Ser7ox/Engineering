import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { NewContactComponent } from './components/new-contact/new-contact.component';
import { RubricaComponent } from './components/rubrica/rubrica.component';

const routes: Routes = [
  { path: 'rubrica', component: RubricaComponent },
  { path: 'newcontact', component: NewContactComponent },
  { path: 'edit/:id', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

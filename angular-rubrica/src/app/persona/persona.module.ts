import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaRoutingModule } from './persona-routing.module';
import { RubricaComponent } from './components/rubrica/rubrica.component';
import { FormComponent } from './components/form/form.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [RubricaComponent, FormComponent],
  imports: [
    CommonModule,
    PersonaRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [RubricaComponent,FormComponent]
})
export class PersonaModule { }

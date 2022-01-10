import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaRoutingModule } from './persona-routing.module';
import { RubricaComponent } from './components/rubrica/rubrica.component';
import { FormComponent } from './components/form/form.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { filterNames } from './filterPipe';
import { CookieModule } from 'ngx-cookie';
import { TableComponent } from './components/table/table.component';
import { ControlRoomComponent } from './components/control-room/control-room.component';


@NgModule({
  declarations: [RubricaComponent, FormComponent, filterNames, TableComponent, ControlRoomComponent],
  imports: [
    CommonModule,
    PersonaRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CookieModule.forRoot()
  ],
  exports: [RubricaComponent,FormComponent]
})
export class PersonaModule { }

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';
import { SharedModule } from '../shared/shared.module';
import { ControlRoomComponent } from './components/control-room/control-room.component';
import { FormComponent } from './components/form/form.component';
import { RubricaComponent } from './components/rubrica/rubrica.component';
import { TableComponent } from './components/table/table.component';
import { filtraCognome } from './filterPipe';
import { PersonaRoutingModule } from './persona-routing.module';


@NgModule({
  declarations: [RubricaComponent, FormComponent, filtraCognome, TableComponent, ControlRoomComponent],
  imports: [
    CommonModule,
    PersonaRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CookieModule.forRoot()
  ],
  exports: [RubricaComponent,FormComponent, TableComponent, ControlRoomComponent]
})
export class PersonaModule { }

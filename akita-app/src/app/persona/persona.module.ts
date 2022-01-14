import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';
import { PersonaRoutingModule } from './persona-routing.module';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PersonaRoutingModule,
  ],
  exports: [TableComponent]
})
export class PersonaModule { }

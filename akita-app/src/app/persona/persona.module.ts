import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';
import { PersonaRoutingModule } from './persona-routing.module';
import { UserCardComponent } from './components/table/user-card/user-card.component';



@NgModule({
  declarations: [
    TableComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PersonaRoutingModule,
  ],
  exports: [TableComponent, UserCardComponent]
})
export class PersonaModule { }

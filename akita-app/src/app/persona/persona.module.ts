import { NgModule } from '@angular/core';
import { TableComponent } from './components/table/table.component';
import { PersonaRoutingModule } from './persona-routing.module';
import { UserCardComponent } from './components/user-card/user-card.component';
import { FormComponent } from './components/form/form.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    TableComponent,
    UserCardComponent,
    FormComponent
  ],
  imports: [
    PersonaRoutingModule,
    SharedModule
  ],
  exports: [TableComponent, UserCardComponent, FormComponent]
})
export class PersonaModule { }

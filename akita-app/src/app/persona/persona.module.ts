import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';
import { PersonaRoutingModule } from './persona-routing.module';
import { UserCardComponent } from './components/table/user-card/user-card.component';
import { FormComponent } from './components/table/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    TableComponent,
    UserCardComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PersonaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: {
        baseUrl: 'http://localhost:3000/persona'
      }
    }
  ],
  exports: [TableComponent, UserCardComponent, FormComponent]
})
export class PersonaModule { }

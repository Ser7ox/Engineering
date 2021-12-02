import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RubricaComponent } from './components/rubrica/rubrica.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalComponent } from './components/modal/modal.component';
import { GenericPipe } from './generic-pipe';
import { MousehoverDirective } from './mousehover.directive';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    RubricaComponent,
    FormComponent,
    ModalComponent,
    GenericPipe,
    MousehoverDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(),
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

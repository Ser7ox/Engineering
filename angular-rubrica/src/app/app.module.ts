import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RubricaComponent } from './components/rubrica/rubrica.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { ModaldeleteComponent } from './components/modaldelete/modaldelete.component';

@NgModule({
  declarations: [
    AppComponent,
    RubricaComponent,
    FormComponent,
    ModaldeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

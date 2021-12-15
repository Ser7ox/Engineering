import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GenericPipe } from './generic-pipe';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { PersonaModule } from './persona/persona.module';
import { LazyModule } from './lazy/lazy.module';

@NgModule({
  declarations: [
    AppComponent,
    GenericPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
    PersonaModule,
    LazyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

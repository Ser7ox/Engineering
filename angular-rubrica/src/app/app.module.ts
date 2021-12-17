import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GenericPipe } from './generic-pipe';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { PersonaModule } from './persona/persona.module';
import { LazyModule } from './lazy/lazy.module';
import { LoginComponent } from './components/login/login.component';
import { InterceptorService } from './_services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    GenericPipe,
    LoginComponent,
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
  exports: [LoginComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }

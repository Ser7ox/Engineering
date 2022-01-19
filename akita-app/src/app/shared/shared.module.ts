import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { LoadingComponent } from './components/loading/loading/loading.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedRoutingModule,
    HttpClientModule
  ],
  exports: [
    LoadingComponent,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }

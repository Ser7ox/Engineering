import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { TestComponent } from './test/test.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { AppModule } from '../app.module';


@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    LazyRoutingModule,
    SharedModule,
  ],
  exports: [TestComponent]
})
export class LazyModule { }

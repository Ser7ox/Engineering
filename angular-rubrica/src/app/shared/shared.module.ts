import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { AlertComponent } from './alert/alert.component';
import { ModalComponent } from './modal/modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [AlertComponent, ModalComponent, LoadingComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ModalModule.forRoot(),
  ],
  exports: [AlertComponent, ModalComponent, LoadingComponent]
})

export class SharedModule { }

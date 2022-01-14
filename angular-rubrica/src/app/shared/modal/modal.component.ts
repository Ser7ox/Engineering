import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  
  @Input() headM: string;
  @ViewChild('modale') public modale:ModalDirective;

  ngOnInit(): void {
  }
  
  show(): void {
    this.modale.show();
  }

  hide(): void {
    this.modale.hide();
  }
}

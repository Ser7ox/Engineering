import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Persona } from '../model/persona';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  
  @ViewChild('modale') public modale:ModalDirective;
  @Input() headM: string;
  @Input() bodyM: string;
  @Input() savepersonmodal: Persona;

  constructor() { }

  ngOnInit(): void {
  }
  
  show(): void {
    this.modale.show();
  }

  hide(): void {
    this.modale.hide();
  }
}

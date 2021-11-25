import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-modaldelete',
  templateUrl: './modaldelete.component.html',
  styleUrls: ['./modaldelete.component.css']
})
export class ModaldeleteComponent implements OnInit {
  
  @ViewChild('modale') public modale:ModalDirective;
  @Input() headM: string
  @Input() bodyM: string;

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

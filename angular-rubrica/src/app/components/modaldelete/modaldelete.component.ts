import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { RubricaComponent } from '../rubrica/rubrica.component';


@Component({
  selector: 'app-modaldelete',
  templateUrl: './modaldelete.component.html',
  styleUrls: ['./modaldelete.component.css']
})
export class ModaldeleteComponent implements OnInit {
  
  @ViewChild('modale2') public modale2:ModalDirective;
  
  @ViewChild(RubricaComponent) child2: RubricaComponent;

  constructor() { }

  ngOnInit(): void {
  }
  
  show(): void {
    this.modale2.show();
    this.child2.hide();
  }
}

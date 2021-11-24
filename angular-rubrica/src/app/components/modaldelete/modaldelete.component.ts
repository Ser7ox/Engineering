import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modaldelete',
  templateUrl: './modaldelete.component.html',
  styleUrls: ['./modaldelete.component.css']
})
export class ModaldeleteComponent implements OnInit {
  
  openModal: false

  constructor() { }

  ngOnInit(): void {
  }
  
  clickmodale() {
    return !this.openModal
  }
}

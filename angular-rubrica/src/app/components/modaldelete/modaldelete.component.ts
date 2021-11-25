import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modaldelete',
  templateUrl: './modaldelete.component.html',
  styleUrls: ['./modaldelete.component.css']
})
export class ModaldeleteComponent implements OnInit {
  
  openModal:boolean = false;
  

  constructor() { }

  ngOnInit(): void {
  }
  
  clickModale(open: boolean): boolean {
    this.openModal = open;
    return this.openModal
  }
}

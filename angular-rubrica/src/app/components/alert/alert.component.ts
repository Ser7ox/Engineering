import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() headA: string;
  @Input() bodyA: string;
  @Input() htmlToAdd: string;
  @Input() dynamicClass: any;

  constructor() {  }

  ngOnInit(): void { 
  }

  
  
}

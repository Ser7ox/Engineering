import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @ViewChild(ModalComponent)child: ModalComponent;
  alertShow: boolean;
  headT: string; 
  bodyT: string;
  htmlIcon: string;
  classDynamic: string;
  constructor() { }

  ngOnInit(): void {
  }

  testModale() {
    this.child.show();
    this.headT = 'Titolo di prova ';
    this.bodyT = 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.';
  }

  testAlert() {
    this.classDynamic = 'primary';
    this.alertShow = true;
    this.htmlIcon = 'fas fa-check-circle';
    this.headT = 'Titolo di prova ';
    this.bodyT = 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.';
    setTimeout(()=>{
      this.alertShow = false;
    }, 4000);
  }
}



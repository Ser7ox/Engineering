import { Component, OnInit } from '@angular/core';
import { Prova } from '../persona';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-rubrica',
  templateUrl: './rubrica.component.html',
  styleUrls: ['./rubrica.component.css']
})
export class RubricaComponent implements OnInit {

  
  constructor() { 
    let prova2 = new Prova("Mario");
  }
  ngOnInit(): void {
  }
  faCoffee = faCoffee;

  

}





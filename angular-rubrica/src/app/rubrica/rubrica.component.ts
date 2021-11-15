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
  }
  ngOnInit(): void {
  }
  faCoffee = faCoffee;

  metodoprova = function () {
    return Prova.name;
  }

}





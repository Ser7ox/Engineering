import { Component, OnInit } from '@angular/core';
import { Persone } from '../persona-server';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-rubrica',
  templateUrl: './rubrica.component.html',
  styleUrls: ['./rubrica.component.css']
})
export class RubricaComponent implements OnInit {

  person = Persone;
  
  constructor() { 
  }
  ngOnInit(): void {
  }
  faCoffee = faCoffee;



}





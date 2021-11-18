import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { Persone } from '../persona-server';


@Component({
  selector: 'app-rubrica',
  templateUrl: './rubrica.component.html',
  styleUrls: ['./rubrica.component.css']
})
export class RubricaComponent implements OnInit {

  person = Persone;
  saveperson: Persona;

  constructor() { 
    
  }
  ngOnInit(): void {
  }

  eliminaRiga(index: number) {
    this.person.splice(index, 1);
  }

  onSelect(persona: Persona) {
    this.saveperson = persona;  // prende in input persona di tipo Persona e salva l'intera riga della table html all'interno di saveperson. Successivamente in HTML io stampo saveperson.indirizzo
  }

}





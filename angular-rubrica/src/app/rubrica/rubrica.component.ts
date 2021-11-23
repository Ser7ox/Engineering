import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { Persone } from '../persona-server';


@Component({
  selector: 'app-rubrica',
  templateUrl: './rubrica.component.html',
  styleUrls: ['./rubrica.component.css']
})
export class RubricaComponent implements OnInit {

  person = Persone
  saveperson: Persona
  event: Persona

  constructor() { 
    
  }
  ngOnInit(): void {
  }

  eliminaRiga(persona: Persona) {
    this.person.forEach( (element, i) => 
      {if (element.id === persona.id ) this.person.splice(i, 1)} )
    
  }

  onSelect(persona: Persona) {
    this.saveperson = persona;
    //console.log(this.saveperson);  // prende in input persona di tipo Persona e salva l'intera riga della table html all'interno di saveperson. Successivamente in HTML io stampo saveperson.indirizzo
  }

  takeData(outputP: Persona) {
    this.person.forEach(  (element, i) => 
      {if (element.id === outputP.id ) this.person[i] = outputP } )
  }
}
        






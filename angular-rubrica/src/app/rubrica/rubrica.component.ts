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

  person = Persone;
  saveperson: Persona;
  event: Persona;

  constructor() { 
    
  }
  ngOnInit(): void {
  }

  eliminaRiga(id: number) {
    this.person.splice(id, 1);
  }

  onSelect(persona: Persona) {
    this.saveperson = persona;
    console.log(this.saveperson);  // prende in input persona di tipo Persona e salva l'intera riga della table html all'interno di saveperson. Successivamente in HTML io stampo saveperson.indirizzo
  }

  takeData(FormPerson: Persona) {

  const listofid = this.person.map(function(a) {return a.id;});
  console.log(listofid)
  for ( let x of listofid ) {
    if (x == FormPerson.id)
        this.person[x - 1] = FormPerson;
        console.log(this.person[x - 1]);
  }
  
  }
}
        






import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Persona } from '../../model/persona';
import { Persone } from '../../persona-server';
import { PersonaServiceService } from 'src/app/services/persona-service.service';


@Component({
  selector: 'app-rubrica',
  templateUrl: './rubrica.component.html',
  styleUrls: ['./rubrica.component.css']
})
export class RubricaComponent implements OnInit {

  person = Persone
  saveperson: Persona
  
  constructor( private personaservice: PersonaServiceService ) { }

  ngOnInit(): void {
  }

  eliminaRiga(persona: Persona) {
    return this.personaservice.eliminaUtente(persona);
  }

  takeData(outputP: Persona) {
    return this.personaservice.editForm(outputP);
  }

  onSelect(persona: Persona) {
    this.saveperson = persona; 
    // input <= persona di tipo Persona e salva l'intera riga della table html all'interno di saveperson. 
  }

}    






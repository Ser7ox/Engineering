import { Injectable } from '@angular/core';
import { Persone } from '../persona-server';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  person = Persone;
  constructor() {}

  eliminaUtente(var1: Persona): Persona[] {
    this.person.forEach((element, i) => {
      if (element.id === var1.id) this.person.splice(i, 1);
    });
    return this.person;
  }

  getutenti(): Persona[] {
    return this.person;
  }

  modificaUtente(var2: Persona): Persona[] {
    this.person.forEach((element, i) => {
      if (element.id === var2.id) this.person[i] = var2;
    });
    return this.person;
  }

  // aggiungiUtente(var3: Persona): Persona[] {}
  
  recuperaDati(id: number): Persona {
    let utente: Persona;
    this.person.forEach((element, i) => {
      if ( element.id === id ) utente = this.person[i]
    });
    return utente;
  }
}

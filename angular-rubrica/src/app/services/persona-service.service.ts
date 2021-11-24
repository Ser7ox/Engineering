import { Injectable } from '@angular/core';
import { Persona } from '../model/persona';
import { Persone } from '../persona-server';

@Injectable({
  providedIn: 'root',
})
export class PersonaServiceService {
  
  person = Persone;

  constructor() {}

  eliminaUtente(var1: Persona) {
    this.person.forEach((element, i) => {
      if (element.id === var1.id) this.person.splice(i, 1);
    });
  }

  editForm(var2: Persona) {
    this.person.forEach((element, i) => {
      if (element.id === var2.id) this.person[i] = var2;
    });
  }

}

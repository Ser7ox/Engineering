import { Injectable } from "@angular/core";
import { QueryEntity } from "@datorama/akita";
import { Persona } from "../model/persona.model";
import { PersonaState, PersonaStore } from "./persona.store";

@Injectable({
    providedIn: 'root'
  })

  export class PersonaQuery extends QueryEntity<PersonaState, Persona> {
      
    constructor(protected override store: PersonaStore) {
        super(store);
    }
  }
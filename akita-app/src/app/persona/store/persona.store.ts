import { Injectable } from "@angular/core";
import { EntityState, EntityStore, StoreConfig } from "@datorama/akita";
import { Persona } from "../model/persona.model";


export interface PersonaState extends EntityState<Persona> {
}

@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'persona' })

export class PersonaStore extends EntityStore<PersonaState, Persona> {

    constructor() { 
        super(); 
    }

}
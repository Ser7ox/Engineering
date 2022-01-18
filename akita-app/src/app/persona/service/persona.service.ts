import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PersonaConverter } from '../converter/personaConverter';
import { Persona } from '../model/persona.model';
import { map } from 'rxjs';
import { PersonaDto } from '../dto/persona.dto';
import { PersonaState, PersonaStore } from '../store/persona.store';
import { ID, setLoading } from '@datorama/akita';
import { NgEntityService } from '@datorama/akita-ng-entity-service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService extends NgEntityService<PersonaState>{
  endPoint = 'http://localhost:3000';
  converter: PersonaConverter = new PersonaConverter();

  constructor(private httpClient: HttpClient,protected override store: PersonaStore) { super(store);}

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getPersone(): void {
    this.store.setLoading(true);
    this.httpClient
      .get<PersonaDto[]>(this.endPoint + '/persone')
      .pipe(
        map( (BackEnd: PersonaDto[]) => { 
          let persona: Persona[] = [];
          BackEnd.forEach(element => {
            persona.push(this.converter.DaDtoaModel(element))
          }); return persona;
        })
      ).subscribe(data => this.store.set(data));
  }

  getPersona(id: ID): void {
    this.httpClient
      .get<PersonaDto>(this.endPoint + '/persone/' + id)
      .pipe(
        map( (personaDto: PersonaDto) => { 
          return this.converter.DaDtoaModel(personaDto);
          })
      )
      .subscribe(data => this.store.add(data));
  }

  removePersona(id: ID): void {
    this.httpClient
    .delete<PersonaDto>(this.endPoint + '/persone/' + id, this.httpHeader)
    .pipe(
      map( (personaDto: PersonaDto) => { 
      return this.converter.DaDtoaModel(personaDto);
        })
      ).subscribe(() => this.store.remove(id));
  }

  updatePersona(persona: Persona): void {
    let personaDto: PersonaDto;
    personaDto = this.converter.DaModelaDto(persona);
    this.httpClient
      .put<PersonaDto>(this.endPoint + '/persone/' + personaDto.id, personaDto, this.httpHeader)
      .pipe(setLoading(this.store),
        map( (personaDto) => {
          return this.converter.DaDtoaModel(personaDto);
          })
      ).subscribe(data => this.store.update(data));
  }

  addPersona(persona: Persona): void {
    const personaDto = this.converter.DaModelaDto(persona);
    this.httpClient
      .post<PersonaDto>(this.endPoint + '/persone', personaDto, this.httpHeader)
      .pipe(map( (personaDto) => {
        return this.converter.DaDtoaModel(personaDto); 
        })
      ).subscribe(data => this.store.add(data));
  }
  
}

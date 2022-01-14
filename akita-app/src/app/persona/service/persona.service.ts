import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { PersonaConverter } from '../converter/personaConverter';
import { Persona } from '../model/persona.model';
import { catchError, map, Observable, throwError } from 'rxjs';
import { PersonaDto } from '../dto/persona.dto';
import { PersonaStore } from '../store/persona.store';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  endPoint = 'http://localhost:3000';
  converter: PersonaConverter = new PersonaConverter();

  constructor(private httpClient: HttpClient,private store: PersonaStore) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getPersone(): void {
    this.httpClient
      .get<PersonaDto[]>(this.endPoint + '/persone')
      .pipe(map( (BackEnd: PersonaDto[]) => { 
          let persona: Persona[] = [];
          BackEnd.forEach(element => {
            persona.push(this.converter.DaDtoaModel(element))
          }); return persona;
        })
      ).subscribe(data => this.store.set(data));
  }

  getPersona(id: number): void {
    this.httpClient
      .get<PersonaDto>(this.endPoint + '/persone/' + id)
      .pipe(map( (personaDto: PersonaDto) => { 
          return this.converter.DaDtoaModel(personaDto);
          })
      )
      .subscribe(data => this.store.add(data));
  }

  removePersona(id: number | undefined): void {
    this.httpClient
    .delete<PersonaDto>(this.endPoint + '/persone/' + id, this.httpHeader)
    .pipe(map( (personaDto: PersonaDto) => { 
      return this.converter.DaDtoaModel(personaDto);
        })
      ).subscribe(() => this.store.remove(id));
  }

  updatePersona(persona: Persona): void {
    let personaDto: PersonaDto;
    personaDto = this.converter.DaModelaDto(persona);
    this.httpClient
      .put<PersonaDto>(this.endPoint + '/persone/' + personaDto.id, personaDto, this.httpHeader)
      .pipe(
        map( (personaDto) => {
          return this.converter.DaDtoaModel(personaDto);
          })
      )
      .subscribe(data => this.store.update(personaDto.id, { ...data }));
  }
  
}

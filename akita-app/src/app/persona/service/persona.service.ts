import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PersonaConverter } from '../converter/personaConverter';
import { Persona } from '../model/persona.model';
import { catchError, map, throwError } from 'rxjs';
import { PersonaDto } from '../dto/persona.dto';
import { PersonaStore } from '../store/persona.store';
import { ID } from '@datorama/akita';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  endPoint = 'http://localhost:3000';
  converter: PersonaConverter = new PersonaConverter();
  error: string;

  constructor(private httpClient: HttpClient,protected store: PersonaStore) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getPersone(): void {
    this.httpClient
      .get<PersonaDto[]>(this.endPoint + '/persone')
      .pipe(
        map( (BackEnd: PersonaDto[]) => { 
          let persona: Persona[] = [];
          BackEnd.forEach(element => {
            persona.push(this.converter.DaDtoaModel(element))
          }); return persona;
        }),catchError((err) => {
          this.store.setError('Non è stato possibile caricare i dati degli utenti.');
          return throwError(() => {err}); 
        })
      )
      .subscribe(data => this.store.set(data))
  }

  getPersona(id: ID): void {
    this.httpClient
      .get<PersonaDto>(this.endPoint + '/persone/' + id)
      .pipe(
        map( (personaDto: PersonaDto) => { 
          return this.converter.DaDtoaModel(personaDto);
          })
      )
      .subscribe({next: data => this.store.add(data),
                  error: () => (this.store.setError('Non è stato possibile prendere i dati dell\'utente.'))
      })
  }

  removePersona(id: ID): void {
    this.httpClient
    .delete<PersonaDto>(this.endPoint + '/persone/' + id, this.httpHeader)
    .pipe(
      map( (personaDto: PersonaDto) => { 
      return this.converter.DaDtoaModel(personaDto);
        }),catchError((err) => {
          this.store.setError('Non è stato possibile eliminare l\' utente selezionato.');
          return err; 
        })
      )
      .subscribe(() => this.store.remove(id))
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
      .subscribe({next: data => this.store.update(data),
                  error: () => (this.store.setError('Non è stato possibile aggiornare i dati dell\'utente.'))
      })
  }

  addPersona(persona: Persona): void {
    const personaDto = this.converter.DaModelaDto(persona);
    this.httpClient
      .post<PersonaDto>(this.endPoint + '/persone', personaDto, this.httpHeader)
      .pipe(map( (personaDto) => {
        return this.converter.DaDtoaModel(personaDto); 
        })
      )
      .subscribe({next: data => this.store.add(data),
                  error: () => (this.store.setError('Non è stato possibile creare l\'utente richiesto.'))
      })
  }
  
}

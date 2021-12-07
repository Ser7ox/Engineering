import { Injectable } from '@angular/core';
import { Persona } from '../model/persona';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { PersonaDto } from '../dto/persona.dto';
import { PersonaConverter } from '../converter/personaConverter';

@Injectable({
  providedIn: 'root',
})

export class PersonaService {
  
  endPoint = 'http://localhost:3000';
  Converter: PersonaConverter = new PersonaConverter;

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getUtenti(): Observable<Persona[]> {
    return this.httpClient.get<PersonaDto[]>(this.endPoint + '/users')
    .pipe(map( (rispostaBackEnd: PersonaDto[]) => { 
      let persona: Persona[] = []; 
      rispostaBackEnd.forEach(element => {
      persona.push(this.Converter.DaDtoaModel(element))
    })
    return persona;
    })
    )
  }

  getUtente(id: number): Observable<Persona> {
    return this.httpClient.get<PersonaDto>(this.endPoint + '/users/' + id)
    .pipe( map( (personaDto: PersonaDto) => { 
      return this.Converter.DaDtoaModel(personaDto);
    })   
    )
  }

  eliminaUtente(id: number): Observable<Persona[]> {
    let prova;
    prova = this.httpClient.delete<Persona[]>(this.endPoint + '/users/' + id, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
    return prova;
  }

  modificaUtente(id: number, data: Persona): Observable<Persona> {
    let personaDto;
    personaDto = this.Converter.DaModelaDto(data);
    return this.httpClient.put<PersonaDto>(this.endPoint + '/users/' + id, personaDto, this.httpHeader)
    .pipe(
      map( (personaDto) => { return this.Converter.DaDtoaModel(personaDto) } )
    )
  }

  creaUtente(persona: Persona): Observable<Persona> {
    let personaDto;
    personaDto = this.Converter.DaModelaDto(persona);
    return this.httpClient.post<PersonaDto>(this.endPoint + '/users', personaDto, this.httpHeader)
    .pipe(
      map( (personaDto) => { return this.Converter.DaDtoaModel(personaDto) } )
    )
  }

  httpError(error: { error: { message: string; }; status: any; message: any; }) {
    let msg = '';
    if(error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }
}

import { Injectable } from '@angular/core';
import { Persona } from '../model/persona';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { PersonaDto } from '../dto/persona.dto';
import { PersonaConverter } from '../converter/personaConverter';
import { Sesso } from '../model/sesso';
import { SessoDto } from '../dto/sesso.dto';
import { SessoConverter } from '../converter/sessoConverter';

@Injectable({
  providedIn: 'root',
})

export class PersonaService {
  
  endPoint = 'http://localhost:3000';
  Converter: PersonaConverter = new PersonaConverter;
  sessoConverter: SessoConverter = new SessoConverter;

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

  getSesso(): Observable<Sesso> {
    return this.httpClient.get<SessoDto[]>(this.endPoint + '/sesso')
    .pipe(map( (rispostaBackEnd: SessoDto[]) => {
                return this.sessoConverter.SessoDaDtoaModel(rispostaBackEnd[0]);
                }          
      )
    )
  }

  getUtente(id: number): Observable<Persona> {
    return this.httpClient.get<PersonaDto>(this.endPoint + '/users/' + id)
    .pipe( map( (personaDto: PersonaDto) => { 
      return this.Converter.DaDtoaModel(personaDto);
      })   
    )
  }

  eliminaUtente(id: number): Observable<Persona> {
    return this.httpClient.delete<PersonaDto>(this.endPoint + '/users/' + id, this.httpHeader)
    .pipe(map( (personaDto: PersonaDto) => { 
      return this.Converter.DaDtoaModel(personaDto);
      })
    )
  }

  modificaUtente(data: Persona): Observable<Persona> {
    let personaDto: PersonaDto;
    personaDto = this.Converter.DaModelaDto(data);
    return this.httpClient.put<PersonaDto>(this.endPoint + '/users/' + personaDto.id, personaDto, this.httpHeader)
    .pipe(map( (personaDto) => {
      return this.Converter.DaDtoaModel(personaDto);
      })
    )
  }

  creaUtente(persona: Persona): Observable<Persona> {
    let personaDto: PersonaDto;
    personaDto = this.Converter.DaModelaDto(persona);
    return this.httpClient.post<PersonaDto>(this.endPoint + '/users', personaDto, this.httpHeader)
    .pipe(map( (personaDto) => {
      return this.Converter.DaDtoaModel(personaDto); 
      })
    )
  }

  checkPhone(telefono: number): Observable<boolean> {
    return this.httpClient.get<PersonaDto[]>(this.endPoint + '/users?number=' + telefono)
    .pipe(map( (arrayBackEnd: PersonaDto[]) => {
      return (arrayBackEnd.length === 0) ? false : true;
      })
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

  public setCookie(params:any) 
  {
    let d: Date = new Date();
    d.setTime(d.getTime() + (params.expireDays ? params.expireDays:1) * 24 * 60 * 60 * 1000); 
    document.cookie = 
        (params.name? params.name:'') + "=" + (params.value?params.value:'') + ";"
        + (params.session && params.session == true ? "" : "expires=" + d.toUTCString() + ";")
        + "path=" +(params.path && params.path.length > 0 ? params.path:"/") + ";"
        + (location.protocol === 'https:' && params.secure && params.secure == true ? "secure":"");
  }

  public deleteCookie(cookieName: string) {
    this.setCookie({name:cookieName,value:'',expireDays:-1});
  }
}



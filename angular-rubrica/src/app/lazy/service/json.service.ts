import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonConverter } from '../converter/jsonConverter';
import { JsonDto } from '../dto/json.dto';
import { Json } from '../model/json';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  endPoint = 'https://jsonplaceholder.typicode.com';
  Converter: JsonConverter = new JsonConverter;

  constructor(private httpClient: HttpClient) {}

  getData(): Observable<Json[]> {
    return this.httpClient.get<JsonDto[]>(this.endPoint + '/posts')
    .pipe(map( (rispostaBackEnd: JsonDto[]) => { 
                  let data: Json[] = []; 
                  rispostaBackEnd.forEach(element => {
                    data.push(this.Converter.JsonDaDtoaModel(element))
    })
    return data;
    })
    )
  }
}
